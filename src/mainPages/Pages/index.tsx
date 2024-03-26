import React, { ChangeEvent, FC, useState } from "react";
import * as SC from "./styles";
import searchIcon from '../../assets/search.png';
import Table from "../../components/Table";
import pagesData from "../../data/mocks/pages.json";

const Pages: FC = () => {
  const [tableData, setTableData] = useState<any[]>(pagesData);
  const [selectedItem, setSelectedItem] = useState<any>();

  const handleSearchItems = (e: ChangeEvent<HTMLInputElement>) => {
    const searchResults = pagesData.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    if (searchResults.length) {
      setTableData(searchResults)
    }
  }

  return (
    <SC.StyledPagesMainContainer>
      {/* TODO */}
      <SC.StyledTableControllersBlock>
        <SC.StyledSearchInput $bgImage={searchIcon} placeholder="Search" type="text" onChange={handleSearchItems} />
        <input type="text" />
      </SC.StyledTableControllersBlock>
      <Table data={tableData} setSelectedItem={setSelectedItem} />
      {selectedItem && <div>{selectedItem.id}</div>}
    </SC.StyledPagesMainContainer>
  );
};

export default Pages;
