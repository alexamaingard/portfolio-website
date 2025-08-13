import { FC, useRef, useEffect } from 'react';
import {
  sidebarContainerStyle,
  toggleButton,
  textBlock,
  themeModeButtonStyle,
  themeModeButtonsContainerStyle
} from '../../styles/modeSidebar';

interface ModeSidebarProps {
  mode: 'calm' | 'playful';
  setMode: (mode: 'calm' | 'playful') => void;
  isOpen: boolean;
  toggleOpen: () => void;
}

export const ModeSidebar: FC<ModeSidebarProps> = ({ mode, setMode, isOpen, toggleOpen }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleOpen();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleOpen]);

  return (
    <aside ref={sidebarRef} css={sidebarContainerStyle(isOpen)}>
      <button
        css={toggleButton(mode === 'calm' ? '#a7d8d8' : '#ff4f9d')}
        onClick={toggleOpen}
      >
        ☰
      </button>
      <div css={textBlock}>
        Life moves fast.
        <span>The internet moves faster.</span>
        <span>Here, you set the tone:</span>
        <span>
          <strong> Calm mode</strong> — gentle, relaxed, easy on the senses.
        </span>
        <span>
          <strong> Playful mode</strong> — dynamic, interactive, full of energy.
        </span>
      </div>

      <div css={themeModeButtonsContainerStyle}>
        <button
          onClick={() => setMode('calm')}
          css={themeModeButtonStyle(mode === 'calm', '#a7d8d8', '#a7d8d8')}
        >
          Calm
        </button>
        <button
          onClick={() => setMode('playful')}
          css={themeModeButtonStyle(mode === 'playful', '#ff4f9d', '#ff4f9d')}
        >
          Playful
        </button>
      </div>
    </aside>
  );
};
