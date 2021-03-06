export enum ProductType {
  Furniture,
  Tech,
  Book,
  Phone
}

export const productCategoryMap: Record<ProductType, string> = {
  [ProductType.Furniture]: 'Мебель',
  [ProductType.Tech]: 'Техника',
  [ProductType.Book]: 'Книга',
  [ProductType.Phone]: 'Телефон',
}
export const productCategoriesList = Object.keys(productCategoryMap).map((key) =>
  Number(key)
) as ProductType[];

export interface IProduct {
  id: number;
  name: string;
  article: string;
  price: number;
  weight: number;
  amount: number;
  category: ProductType;
  producer?: string;
}
