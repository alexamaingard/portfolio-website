export const screenSizes = {
  xxs: [0, 380],
  xs: [381, 599],
  s: [600, 904],
  m: [905, 1239],
  l: [1240, 1629],
  xl: [1630, Infinity],
};

const mqCss = (min: number, max: number) =>
  [
    '@media screen',
    min > 0 ? `(min-width: ${min}px)` : '',
    max < Infinity ? `(max-width: ${max}px)` : '',
  ]
    .filter((x) => !!x)
    .join(' and ');

/**
 * Object that holds reusable media query strings.
 *
 * @todo consider https://immerjs.github.io/immer/
 */

type BaseMediaQueries = { [_key in ScreenSize]: string };

interface MediaQueries extends BaseMediaQueries {
  lt: BaseMediaQueries;
  gt: BaseMediaQueries;
}

type ScreenSize = keyof typeof screenSizes;

export const mediaQueries: MediaQueries = Object.entries(screenSizes).reduce(
  (cumulativeResult, [key, [min, max]]) => ({
    ...cumulativeResult,
    [key]: mqCss(min, max),
    lt: { ...cumulativeResult.lt, [key]: mqCss(0, min - 1) },
    gt: { ...cumulativeResult.gt, [key]: mqCss(max + 1, Infinity) },
  }),
  { lt: {}, gt: {} } as MediaQueries,
);

export const smallSmartphoneMediaQuery = '@media (max-width: 380px) and (max-height: 740px)';
