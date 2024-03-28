export interface ITableProps {
  data: any[];
  filterdData: any[];
  pageType: string;
  openModal: (content: any, data: any[]) => void;
}

export enum EElementStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}