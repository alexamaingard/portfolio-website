export const _ = (str: string) => str;

export const formatToMonthYear = (date: string): string => (
  new Date(date).toLocaleDateString('en-US', {
    month: '2-digit',
    year: 'numeric',
  })
);