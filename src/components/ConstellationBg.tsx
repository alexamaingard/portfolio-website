// ConstellationBackground.tsx
import React, { useRef, useEffect } from 'react';
import { css } from '@emotion/react';

const CANVAS_STARS = 70;
const MAX_DISTANCE = 120;

const canvasStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -2;
`;

type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export const ConstellationBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const mousePos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Initialize stars with random positions and velocities
    stars.current = Array.from({ length: CANVAS_STARS }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mousePos.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Move stars
      stars.current.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        // Bounce off edges
        if (star.x <= 0 || star.x >= width) star.vx *= -1;
        if (star.y <= 0 || star.y >= height) star.vy *= -1;
      });

      // Draw stars
      ctx.fillStyle = 'rgba(136, 255, 255, 0.7)';
      stars.current.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw lines between close stars and mouse
      ctx.strokeStyle = 'rgba(136, 255, 255, 0.2)';
      ctx.lineWidth = 1;

      for (let i = 0; i < stars.current.length; i++) {
        for (let j = i + 1; j < stars.current.length; j++) {
          const dx = stars.current[i].x - stars.current[j].x;
          const dy = stars.current[i].y - stars.current[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(stars.current[i].x, stars.current[i].y);
            ctx.lineTo(stars.current[j].x, stars.current[j].y);
            ctx.stroke();
          }
        }

        // Connect stars to mouse
        if (mousePos.current) {
          const dx = stars.current[i].x - mousePos.current.x;
          const dy = stars.current[i].y - mousePos.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(stars.current[i].x, stars.current[i].y);
            ctx.lineTo(mousePos.current.x, mousePos.current.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} css={canvasStyle} />;
};
