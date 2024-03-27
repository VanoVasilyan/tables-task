import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { EPageTypesForTable, ESelectOptions, IProductsProps } from "../types/globalTypes";
import productsData from "../data/mocks/products.json";
import { pagesLinks } from "./../data/index";
import { selectValues } from "../data";

export const useProducts = () => {
  const { pathname } = useLocation();
  const [tableData, setTableData] = useState<IProductsProps[]>(productsData);
  const [selectedItem, setSelectedItem] = useState<string>(ESelectOptions.ALL);
  const [inputValue, setInputValue] = useState<string>("");
  const [editItem, setEditItem] = useState<any>();

  const filteredData = useMemo(() => {
    return selectedItem === ESelectOptions.ALL
      ? productsData
      : selectedItem === ESelectOptions.ACTIVE
      ? productsData.filter((item) => item.active && item)
      : selectedItem === ESelectOptions.INACTIVE
      ? productsData.filter((item) => !item.active && item)
      : productsData;
  }, [selectedItem]);

  const handleSearchItems = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      const searchResults = filteredData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
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
      const selectedItems = productsData.filter((item) =>
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

  return {
    tableData,
    inputValue,
    editItem,
    selectValues,
    pagesLinks,
    pathname,
    handleSearchItems,
    handleSelectItems,
    setEditItem,
    pageType: EPageTypesForTable.PRODUCTS
  };
};
