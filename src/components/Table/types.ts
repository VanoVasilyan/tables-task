import { SetStateAction } from "react";
export interface ITableProps {
  data: any[];
  setEditItem: React.Dispatch<SetStateAction<any>>;
}

export enum EElementStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}