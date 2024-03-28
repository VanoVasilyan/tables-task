export interface IPagesProps {
  id: number;
  title: string;
  active: boolean;
  updatedAt: string;
  publishedAt: string;
}

export interface IPricePlansProps {
  id: number;
  description: string;
  active: boolean;
  createdAt: string;
  removedAt: string;
}

type TProductOptions = {
  size: string;
  amount: number;
};

export interface IProductsProps {
  id: number;
  name: string;
  options: TProductOptions;
  active: boolean;
  createdAt: string;
}

export enum ESelectOptions {
  ALL = "All",
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}

export enum EPageTypesForTable {
  PAGES = "Title",
  PRICE_PLANS = "Description",
  PRODUCTS = "Name",
}

export enum EPageTypes {
  PAGES = "pages",
  PRODUCTS = "products",
  PRICE_PLANS = "pricePlans",
}
