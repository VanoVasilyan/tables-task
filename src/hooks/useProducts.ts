import { ChangeEvent, useCallback, useMemo, useState } from "react";
import productsData from "../data/mocks/products.json";
import { selectValues } from "../data";
import { EPageTypesForTable, ESelectOptions, IProductsProps } from "../types/globalTypes";

export const useProducts = () => {
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
    handleSearchItems,
    handleSelectItems,
    setEditItem,
    pageType: EPageTypesForTable.PRODUCTS
  };
};
