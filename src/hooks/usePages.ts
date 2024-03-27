import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { IPagesProps } from "../types/globalTypes";
import { ESelectTypes } from "../mainPages/Pages/types";
import pagesData from "../data/mocks/pages.json";

export const usePages = () => {
  const [tableData, setTableData] = useState<IPagesProps[]>(pagesData);
  const [selectedItem, setSelectedItem] = useState<string>(ESelectTypes.ALL);
  const [inputValue, setInputValue] = useState<string>("");
  const [editItem, setEditItem] = useState<any>();

  const filteredData = useMemo(() => {
    return selectedItem === ESelectTypes.ALL
      ? pagesData
      : selectedItem === ESelectTypes.ACTIVE
      ? pagesData.filter((item) => item.active && item)
      : selectedItem === ESelectTypes.INACTIVE
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
        (e.target.value === ESelectTypes.ACTIVE && item.active) ||
        (e.target.value === ESelectTypes.INACTIVE && !item.active) ||
        e.target.value === ESelectTypes.ALL
          ? item
          : null
      );
      if (selectedItems.length) {
        setTableData(selectedItems);
      }
    },
    [inputValue]
  );

  return {
    tableData,
    inputValue,
    editItem,
    handleSearchItems,
    handleSelectItems,
    setEditItem,
  };
};
