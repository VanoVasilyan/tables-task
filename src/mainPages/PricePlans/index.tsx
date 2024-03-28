import React, { FC } from 'react';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import { usePricePlans } from '../../hooks/usePricePlans';
import searchIcon from '../../assets/icons/search.png';
import { pagesLinks } from '../../data';
import * as SC from './styles';

const PricePlans: FC = () => {
  const {
    tableData,
    inputValue,
    selectValues,
    pageType,
    pathname,
    filteredData,
    handleSearchItems,
    handleSelectItems,
    isModalOpen,
    setTableData,
    modalContent,
    openModal,
    closeModal,
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
            placeholder='Search'
            type='text'
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
    </SC.StyledPricePlansMainContainer>
  );
};

export default PricePlans;
