import { TProducts } from '../types/products';

export const addPluralEnding = (count: number) => {
  if (count === 1) {
    return '';
  }
  if (count > 1 && count < 5) {
    return 'а';
  }
  return 'ов';
};

export const getThreeRandomProducts = (products: TProducts[]) => {
  const randomProducts = [...products];
  return randomProducts.sort(() => Math.random() - 0.5).slice(0, 3);
};
