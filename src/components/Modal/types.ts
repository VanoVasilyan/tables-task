export interface IModal {
  modalContent: any;
  onClose: () => void;
  setTableData?: any;
  pathname: string;
}

export enum EInputValueType {
  TITLE = "title",
  DESCRIPTION = "description",
  NAME = "name",
}
