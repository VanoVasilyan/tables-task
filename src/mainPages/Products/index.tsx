import React, { FC } from "react";
import { useProducts } from "../../hooks/useProducts";
import searchIcon from "../../assets/search.png";
import Table from "../../components/Table";
import { pagesLinks } from "../../data";
import * as SC from "./styles";
import Modal from "../../components/Modal";

const Products: FC = () => {
  const {
    tableData,
    inputValue,
    selectValues,
    pageType,
    pathname,
    filteredData,
    setTableData,
    handleSearchItems,
    handleSelectItems,
    isModalOpen,
    modalContent,
    openModal,
    closeModal,
  } = useProducts();

  return (
    <SC.StyledProductsMainContainer>
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
      {filteredData?.length ? (
        <Table
          openModal={openModal}
          pageType={pageType}
          data={tableData}
          filterdData={filteredData}
        />
      ) : (
        <div>Nothing found</div>
      )}
      {isModalOpen && (
        <Modal
          pathname={pathname}
          modalContent={modalContent}
          onClose={closeModal}
          setTableData={setTableData}
        />
      )}
    </SC.StyledProductsMainContainer>
  );
};

export default Products;
