import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { EPageTypes, EPageTypesForTable, IPagesProps, ESelectOptions } from '../types/globalTypes';
import { selectValues, pagesLinks } from '../data';

export const usePages = () => {
  const { pathname } = useLocation();
  const pagesData = JSON.parse(localStorage.getItem(EPageTypes.PAGES) as string);
  const [tableData, setTableData] = useState<IPagesProps[]>(pagesData);
  const [selectedItem, setSelectedItem] = useState<string>(ESelectOptions.ALL);
  const [inputValue, setInputValue] = useState<string>('');
  const [editItem, setEditItem] = useState<IPagesProps>();
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
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [selectedItem, tableData, inputValue]);

  const handleSearchItems = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSelectItems = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedItem(e.target.value);
      if (inputValue) {
        setInputValue('');
      }
    },
    [inputValue]
  );

  const openModal = (content: IPagesProps, data: any) => {
    setIsModalOpen(true);
    setModalContent({ content, data, setTableData });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    tableData,
    inputValue,
    editItem,
    selectValues,
    pagesLinks,
    pathname,
    modalContent,
    filteredData,
    openModal,
    closeModal,
    setTableData,
    handleSearchItems,
    handleSelectItems,
    setEditItem,
    pageType: EPageTypesForTable.PAGES,
  };
};
