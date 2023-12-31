import dayjs from 'dayjs';
import { DESCRIPTION_LENGTH, FilterRatingMap, SortDateMap } from '../const';
import { TProducts } from '../types/products';
import { TReview } from '../types/review';
import { TProduct } from '../types/product';

export const addPluralEnding = (count: number) => {
  if (count === 1) {
    return '';
  }
  if (count > 1 && count < 5) {
    return 'а';
  }
  return 'ов';
};

export const addSpaceInNumber = (price: number) =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const limitDescriptionLength = (
  description: TProduct['description']
) => {
  if (description.length > DESCRIPTION_LENGTH) {
    return `${description.slice(0, DESCRIPTION_LENGTH)}...`;
  }
  return description;
};

export const getThreeRandomProducts = (products: TProducts[]) => {
  const randomProducts = [...products];
  return randomProducts.sort(() => Math.random() - 0.5).slice(0, 3);
};

const sortIncrease = (reviewA: TReview, reviewB: TReview) =>
  dayjs(reviewB.isoDate).diff(reviewA.isoDate);

function sortDecrease(reviewA: TReview, reviewB: TReview) {
  return dayjs(reviewA.isoDate).diff(reviewB.isoDate);
}

export const filterByRating = {
  [FilterRatingMap.All]: (reviews: TReview[]) => reviews,
  [FilterRatingMap.High]: (reviews: TReview[]) =>
    [...reviews].filter((review) => review.rating > 3),
  [FilterRatingMap.Low]: (reviews: TReview[]) =>
    [...reviews].filter((review) => review.rating < 4),
};

export const sortByDate = {
  [SortDateMap.Increase]: (reviews: TReview[]) =>
    [...reviews].sort(sortIncrease),
  [SortDateMap.Decrease]: (reviews: TReview[]) =>
    [...reviews].sort(sortDecrease),
};
