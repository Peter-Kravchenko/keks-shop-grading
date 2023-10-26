import { ProductCategory, ProductType } from '../const';

export type TProduct = {
  id: string;
  title: string;
  category: ProductCategory;
  type: ProductType;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
  description: string;
  images: string[];
  weight: number;
  reviewCount: number;
};
