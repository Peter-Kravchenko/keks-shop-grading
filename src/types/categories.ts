import { ProductCategoryMap, ProductTypeMap } from '../const';

export type TCategories = {
  category: ProductCategoryMap;
  types: ProductTypeMap[];
}[];
