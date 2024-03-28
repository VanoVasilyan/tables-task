import { ChangeEvent, SetStateAction, useCallback, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { EPageTypesForTable, IPagesProps } from "../types/globalTypes";
import { ESelectOptions } from "../types/globalTypes";
import { selectValues } from "../data";
import { pagesLinks } from "./../data/index";
import pagesData from "../data/mocks/pages.json";

export const usePages = () => {
  const { pathname } = useLocation();
  const [tableData, setTableData] = useState<IPagesProps[]>(pagesData);
  const [selectedItem, setSelectedItem] = useState<string>(ESelectOptions.ALL);
  const [inputValue, setInputValue] = useState<string>("");
  const [editItem, setEditItem] = useState<IPagesProps>();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<IPagesProps>()

  const filteredData = useMemo(() => {
    return selectedItem === ESelectOptions.ALL
      ? pagesData
      : selectedItem === ESelectOptions.ACTIVE
        ? pagesData.filter((item) => item.active && item)
        : selectedItem === ESelectOptions.INACTIVE
          ? pagesData.filter((item) => !item.active && item)
          : pagesData;
  }, [selectedItem]);

  const handleSearchItems = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      const searchResults = filteredData.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (searchResults.length) {
        setTableData(searchResults);
      }
    },
    [filteredData]
  );

  const handleSelectItems = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedItem(e.target.value);
      if (inputValue) {
        setInputValue("");
      }
      const selectedItems = pagesData.filter((item) =>
        (e.target.value === ESelectOptions.ACTIVE && item.active) ||
          (e.target.value === ESelectOptions.INACTIVE && !item.active) ||
          e.target.value === ESelectOptions.ALL
          ? item
          : null
      );
      if (selectedItems.length) {
        setTableData(selectedItems);
      }
    },
    [inputValue]
  );

  const openModal = (content: IPagesProps, data: any) => {
    setIsModalOpen(true);
    setModalContent(content);
    console.log('data', data)
    // setEditItem(content)
  };

  const closeModal = () => {
    console.log('closed')
    setIsModalOpen(false);
  };

  console.log('tableData', tableData)

  return {
    isModalOpen,
    tableData,
    inputValue,
    editItem,
    selectValues,
    pagesLinks,
    pathname,
    modalContent,
    openModal,
    closeModal,
    setTableData,
    handleSearchItems,
    handleSelectItems,
    setEditItem,
    pageType: EPageTypesForTable.PAGES,
  };
};
