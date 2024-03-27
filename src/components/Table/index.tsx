import React, { FC } from "react";
import * as SC from "./styles";
import { EElementStatus, ITableProps } from "./types";
import { dateFormatter } from "../../utils/dateformatter";
import Button from "../Button";

const Table: FC<ITableProps> = ({ data, setEditItem, pageType }) => {
  return (
    <SC.StyledTableMainContainer>
      <SC.StyledTableBlock>
        <SC.StyledMainTable>
          <SC.StyledMainTableHead>
            <SC.StyledTableRows>
              <SC.StyledTableColumns $bgColor={"#F5F8FC"}>
                {pageType}
              </SC.StyledTableColumns>
              <SC.StyledTableColumns $bgColor={"#F5F8FC"}>
                Status
              </SC.StyledTableColumns>
              <SC.StyledTableColumns $bgColor={"#F5F8FC"}>
                Created
              </SC.StyledTableColumns>
              <SC.StyledTableColumns
                $bgColor={"#F5F8FC"}
              ></SC.StyledTableColumns>
            </SC.StyledTableRows>
          </SC.StyledMainTableHead>
          <SC.StyledMainTableBody>
            {data.map((element: any, index: number) => {
              return (
                <SC.StyledTableRows key={element.id}>
                  <SC.StyledTableColumns
                    $bgColor={index % 2 ? "#F5F8FC" : "white"}
                  >
                    {element.title || element.name || element.description}
                  </SC.StyledTableColumns>
                  <SC.StyledTableColumns
                    $bgColor={index % 2 ? "#F5F8FC" : "white"}
                    $isActive={element.active}
                  >
                    {element.active
                      ? EElementStatus.ACTIVE
                      : EElementStatus.INACTIVE}
                  </SC.StyledTableColumns>
                  <SC.StyledTableColumns
                    $bgColor={index % 2 ? "#F5F8FC" : "white"}
                  >
                    {dateFormatter(
                      element.createdAt || element.publishedAt,
                      false,
                      true
                    )}
                  </SC.StyledTableColumns>
                  <SC.StyledTableColumns
                    $bgColor={index % 2 ? "#F5F8FC" : "white"}
                  >
                    <Button text="Edit" onClick={() => setEditItem(element)} />
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
