import { SetStateAction } from "react";
import { IPagesProps } from "../../types/globalTypes";
export interface ITableProps {
  data: any[];
  pageType: string;
  openModal: (content: IPagesProps, data: any[]) => void;
  setEditItem: React.Dispatch<SetStateAction<any>>;
}

export enum EElementStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}