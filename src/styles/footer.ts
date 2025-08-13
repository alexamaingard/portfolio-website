import { css, Theme } from '@emotion/react';

export const footerStyle = (theme: Theme) => css({
  width: '100%',
  textAlign: 'center',
  padding: '15px 30px 15px 25px',
  backgroundColor: theme.darkBackgroundColor,
  fontWeight: 300,
});
