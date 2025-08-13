import { css } from '@emotion/react';

interface TogglePillProps {
  mode: 'playful' | 'calm';
  onChange: (mode: 'playful' | 'calm') => void;
}

const pillContainer = css`
  display: inline-flex;
  border-radius: 20px;
  overflow: hidden;
  border: 1.5px solid var(--custom-cyan);
  user-select: none;
`;

const pillButton = (active: boolean) => css`
  padding: 8px 24px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  background-color: ${active ? 'var(--custom-cyan)' : 'transparent'};
  color: ${active ? '#0a0a0a' : 'var(--custom-cyan)'};
  border: none;
  outline-offset: 2px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover,
  &:focus-visible {
    background-color: var(--custom-cyan-low-op);
    color: var(--custom-cyan);
    outline: none;
  }
`;

export const TogglePill: React.FC<TogglePillProps> = ({ mode, onChange }) => {
  return (
    <div role="group" aria-label="Select mode" css={pillContainer}>
      <button
        type="button"
        css={pillButton(mode === 'playful')}
        aria-pressed={mode === 'playful'}
        onClick={() => onChange('playful')}
      >
        Playful
      </button>
      <button
        type="button"
        css={pillButton(mode === 'calm')}
        aria-pressed={mode === 'calm'}
        onClick={() => onChange('calm')}
      >
        Calm
      </button>
    </div>
  );
};
