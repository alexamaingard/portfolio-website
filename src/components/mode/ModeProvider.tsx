import React, { useEffect } from 'react';

interface ModeProviderProps {
  mode: 'playful' | 'calm';
  children: React.ReactNode;
}

export const ModeProvider = ({ mode, children }: ModeProviderProps) => {
  useEffect(() => {
    document.body.setAttribute('data-mode', mode);
  }, [mode]);

  return <>{children}</>;
};
