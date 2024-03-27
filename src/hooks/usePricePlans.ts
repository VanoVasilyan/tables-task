import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { EPageTypesForTable, ESelectOptions, IPricePlansProps } from "../types/globalTypes";
import { pagesLinks } from "./../data/index";
import pricePlansData from "../data/mocks/pricePlans.json";
import { selectValues } from "../data";

export const usePricePlans = () => {
  const { pathname } = useLocation();
  const [tableData, setTableData] = useState<IPricePlansProps[]>(pricePlansData);
  const [selectedItem, setSelectedItem] = useState<string>(ESelectOptions.ALL);
  const [inputValue, setInputValue] = useState<string>("");
  const [editItem, setEditItem] = useState<any>();

  const filteredData = useMemo(() => {
    return selectedItem === ESelectOptions.ALL
      ? pricePlansData
      : selectedItem === ESelectOptions.ACTIVE
      ? pricePlansData.filter((item) => item.active && item)
      : selectedItem === ESelectOptions.INACTIVE
      ? pricePlansData.filter((item) => !item.active && item)
      : pricePlansData;
  }, [selectedItem]);

  const handleSearchItems = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      const searchResults = filteredData.filter((item) =>
        item.description.toLowerCase().includes(e.target.value.toLowerCase())
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
      const selectedItems = pricePlansData.filter((item) =>
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
    pageType: EPageTypesForTable.PRICE_PLANS
  };
};
