import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  EPageTypes,
  EPageTypesForTable,
  ESelectOptions,
  IProductsProps,
} from "../types/globalTypes";
import { pagesLinks } from "./../data/index";
import { selectValues } from "../data";

export const useProducts = () => {
  const { pathname } = useLocation();
  const productsData = JSON.parse(localStorage.getItem(EPageTypes.PRODUCTS) as string);
  const [tableData, setTableData] = useState<IProductsProps[]>(productsData);
  const [selectedItem, setSelectedItem] = useState<string>(ESelectOptions.ALL);
  const [inputValue, setInputValue] = useState<string>("");
  const [editItem, setEditItem] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Record<string, any>>({});

  const filteredData = useMemo(() => {
    return (
      selectedItem === ESelectOptions.ALL
        ? tableData
        : selectedItem === ESelectOptions.ACTIVE
        ? tableData.filter((item) => item.active && item)
        : selectedItem === ESelectOptions.INACTIVE
        ? tableData.filter((item) => !item.active && item)
        : tableData
    )?.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [selectedItem, tableData, inputValue]);

  const handleSearchItems = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSelectItems = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedItem(e.target.value);

      if (inputValue) {
        setInputValue("");
      }
    },
    [inputValue]
  );

  const openModal = (content: IProductsProps, data: any) => {
    setIsModalOpen(true);
    setModalContent({ content, data, setTableData });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    filteredData,
    tableData,
    inputValue,
    editItem,
    selectValues,
    pagesLinks,
    pathname,
    isModalOpen,
    setIsModalOpen,
    modalContent,
    openModal,
    closeModal,
    setTableData,
    setModalContent,
    handleSearchItems,
    handleSelectItems,
    setEditItem,
    pageType: EPageTypesForTable.PRODUCTS,
  };
};
