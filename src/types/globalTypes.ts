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
