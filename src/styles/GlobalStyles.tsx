import { css, Global } from '@emotion/react';

import { globalResetStyle, globalStyle } from './global';

export const GlobalStyles = () => <Global styles={css(globalResetStyle, globalStyle)} />;
