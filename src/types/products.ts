import { ProductCategoryMap, ProductTypeMap } from '../const';

export type TProducts = {
  id: string;
  title: string;
  category: ProductCategoryMap;
  type: ProductTypeMap;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
};
