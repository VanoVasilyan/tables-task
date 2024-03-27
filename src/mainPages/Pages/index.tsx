import React, { FC } from "react";
import * as SC from "./styles";
import searchIcon from "../../assets/search.png";
import Table from "../../components/Table";
import { selectValues } from "../../data";
import { usePages } from "../../hooks/usePages";

const Pages: FC = () => {
  const {
    tableData,
    inputValue,
    editItem,
    handleSearchItems,
    handleSelectItems,
    setEditItem,
  } = usePages();

  return (
    <SC.StyledPagesMainContainer>
      <SC.StyledTableControllersBlock>
        <SC.StyledSearchInput
          value={inputValue}
          $bgImage={searchIcon}
          placeholder="Search"
          type="text"
          onChange={handleSearchItems}
        />
        <SC.StyledSelect onChange={handleSelectItems}>
          {selectValues.map((item) => (
            <SC.StyledSelectOptions key={item.id}>{item.value}</SC.StyledSelectOptions>
          ))}
        </SC.StyledSelect>
      </SC.StyledTableControllersBlock>
      <Table data={tableData} setEditItem={setEditItem} />
      {editItem && <div>{editItem.id}</div>}
    </SC.StyledPagesMainContainer>
  );
};

export default Pages;
