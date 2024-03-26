import { SetStateAction } from "react";
export interface ITableProps {
  data: any[];
  setSelectedItem: React.Dispatch<SetStateAction<any>>;
}
