import { useTheme } from '@emotion/react';
import { footerStyle } from '../styles/footer';

export const Footer = () => {
  const theme = useTheme();

  return (
    <div css={footerStyle(theme)}>
      Copyright 2025 &#169; Alexa Maingard
    </div>
  );
};
