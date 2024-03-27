import React, { FC } from "react";
import { useProducts } from "../../hooks/useProducts";
import searchIcon from "../../assets/search.png";
import * as SC from "./styles";
import Table from "../../components/Table";
import { Link } from "react-router-dom";

const Products: FC = () => {
  const {
    tableData,
    inputValue,
    editItem,
    selectValues,
    pageType,
    handleSearchItems,
    handleSelectItems,
    setEditItem,
  } = useProducts();

  return (
    <SC.StyledProductsMainContainer>
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
            <SC.StyledSelectOptions key={item.id}>
              {item.value}
            </SC.StyledSelectOptions>
          ))}
        </SC.StyledSelect>
      </SC.StyledTableControllersBlock>
      {/* TODO */}
      <Link to={"/products"}>Products</Link>
      <Link to={"/pages"}>Pages</Link>
      <Link to={"/pricePlans"}>Price Plans</Link>
      <Table pageType={pageType} data={tableData} setEditItem={setEditItem} />
      {editItem && <div>{editItem.id}</div>}
    </SC.StyledProductsMainContainer>
  );
};

export default Products;
