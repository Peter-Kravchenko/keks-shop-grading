export const addPluralEnding = (count: number) => {
  if (count === 1) {
    return '';
  }
  if (count > 1 && count < 5) {
    return 'а';
  }
  return 'ов';
};
