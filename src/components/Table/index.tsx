import React, { FC } from 'react';
import Button from '../Button';
import { dateFormatter } from '../../utils/dateformatter';
import { EElementStatus, ITableProps } from './types';
import * as SC from './styles';

const Table: FC<ITableProps> = ({ data, filterdData, pageType, openModal }) => {
  return (
    <SC.StyledTableMainContainer>
      <SC.StyledTableBlock>
        <SC.StyledMainTable>
          <SC.StyledMainTableHead>
            <SC.StyledTableRows>
              <SC.StyledTableColumns $bgColor={'#F5F8FC'}>
                {pageType}
              </SC.StyledTableColumns>
              <SC.StyledTableColumns $bgColor={'#F5F8FC'}>
                Status
              </SC.StyledTableColumns>
              <SC.StyledTableColumns $bgColor={'#F5F8FC'}>
                Created
              </SC.StyledTableColumns>
              <SC.StyledTableColumns
                $bgColor={'#F5F8FC'}
              ></SC.StyledTableColumns>
            </SC.StyledTableRows>
          </SC.StyledMainTableHead>
          <SC.StyledMainTableBody>
            {filterdData?.map((element: any, index: number) => {
              return (
                <SC.StyledTableRows key={element.id}>
                  <SC.StyledTableColumns
                    $bgColor={index % 2 ? '#F5F8FC' : 'white'}
                  >
                    {element.title || element.name || element.description}
                  </SC.StyledTableColumns>
                  <SC.StyledTableColumns
                    $bgColor={index % 2 ? '#F5F8FC' : 'white'}
                    $isActive={element.active}
                  >
                    {element.active
                      ? EElementStatus.ACTIVE
                      : EElementStatus.INACTIVE}
                  </SC.StyledTableColumns>
                  <SC.StyledTableColumns
                    $bgColor={index % 2 ? '#F5F8FC' : 'white'}
                  >
                    {dateFormatter(
                      element.createdAt || element.publishedAt,
                      false,
                      true
                    )}
                  </SC.StyledTableColumns>
                  <SC.StyledTableColumns
                    $bgColor={index % 2 ? '#F5F8FC' : 'white'}
                  >
                    <Button
                      text='Edit'
                      onClick={() => openModal(element, data)}
                    />
                  </SC.StyledTableColumns>
                </SC.StyledTableRows>
              );
            })}
          </SC.StyledMainTableBody>
        </SC.StyledMainTable>
      </SC.StyledTableBlock>
    </SC.StyledTableMainContainer>
  );
};

export default Table;
