import { ProductCategory, ProductType } from '../const';

export type TProducts = {
  id: string;
  title: string;
  category: ProductCategory;
  type: ProductType;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
};
