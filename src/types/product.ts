import { ProductCategoryMap, ProductTypeMap } from '../const';

export type TProduct = {
  id: string;
  title: string;
  category: ProductCategoryMap;
  type: ProductTypeMap;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
  description: string;
  images: string[];
  weight: number;
  rating: number;
  reviewCount: number;
};
