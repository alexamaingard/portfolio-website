import { css, Global, useTheme } from '@emotion/react';

import { globalResetStyle, globalStyleBase } from './global';

export const GlobalStyles = ({ loaded }: { loaded: boolean }) => {
  const theme = useTheme();

  return (
    <Global
      styles={css(
        globalResetStyle,
        globalStyleBase(theme, loaded)
      )}
    />
  );
};
