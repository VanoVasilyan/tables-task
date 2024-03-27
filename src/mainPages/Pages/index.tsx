import React, { FC } from "react";
import searchIcon from "../../assets/search.png";
import Table from "../../components/Table";
import { usePages } from "../../hooks/usePages";
import * as SC from "./styles";

const Pages: FC = () => {
  const {
    tableData,
    inputValue,
    editItem,
    selectValues,
    pageType,
    pagesLinks,
    pathname,
    handleSearchItems,
    handleSelectItems,
    setEditItem,
  } = usePages();

  return (
    <SC.StyledPagesMainContainer>
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
      <Table pageType={pageType} data={tableData} setEditItem={setEditItem} />
      {editItem && <div>{editItem.id}</div>}
    </SC.StyledPagesMainContainer>
  );
};

export default Pages;
