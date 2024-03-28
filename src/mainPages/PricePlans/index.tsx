import React, { FC } from "react";
import searchIcon from "../../assets/search.png";
import { usePricePlans } from "../../hooks/usePricePlans";
import * as SC from "./styles";
import Table from "../../components/Table";
import { pagesLinks } from "../../data";

const PricePlans: FC = () => {
  const {
    tableData,
    inputValue,
    editItem,
    selectValues,
    pageType,
    pathname,
    handleSearchItems,
    handleSelectItems,
    setEditItem,
  } = usePricePlans();

  return (
    <SC.StyledPricePlansMainContainer>
      <SC.StyledTableControllersBlock>
        <SC.StyledPathsContainer>
          {pagesLinks.map((link) => (
            <SC.StyledPagesLink
              $isActive={link.to === pathname}
              to={link.to}
              key={link.id}
            >
              {link.title}
            </SC.StyledPagesLink>
          ))}
        </SC.StyledPathsContainer>
        <SC.StyledTableControllersInputsBlock>
          <SC.StyledSearchInput
            value={inputValue}
            $bgImage={searchIcon}
            placeholder="Search"
            type="text"
            onChange={handleSearchItems}
          />
          <SC.StyledSelect onChange={handleSelectItems}>
            {selectValues.map((item) => (
              <SC.StyledSelectOptions key={item.id}>
                {item.value}
              </SC.StyledSelectOptions>
            ))}
          </SC.StyledSelect>
        </SC.StyledTableControllersInputsBlock>
      </SC.StyledTableControllersBlock>
      {/* TODO */}
      {/* <Table pageType={pageType} data={tableData} setEditItem={setEditItem} /> */}
      {editItem && <div>{editItem.id}</div>}
    </SC.StyledPricePlansMainContainer>
  );
};

export default PricePlans;
