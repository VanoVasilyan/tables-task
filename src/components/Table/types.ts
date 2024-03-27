import { SetStateAction } from "react";
export interface ITableProps {
  data: any[];
  pageType: string;
  setEditItem: React.Dispatch<SetStateAction<any>>;
}

export enum EElementStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}