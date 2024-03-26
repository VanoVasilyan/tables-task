import React, { FC, useState } from "react";
import * as SC from "./styles";
import Table from "../../components/Table";
import pagesData from "../../data/mocks/pages.json";

const Pages: FC = () => {
  const [tableData, setTableData] = useState<any[]>(pagesData);
  const [selectedItem, setSelectedItem] = useState<any>();

  return (
    <SC.StyledPagesMainContainer>
      {/* TODO */}
      {/* <SC.StyledTableControllersBlock>
        <input type="text" />
        <input type="text" />
      </SC.StyledTableControllersBlock> */}
      <Table data={tableData} setSelectedItem={setSelectedItem} />
      {selectedItem && <div>{selectedItem.id}</div>}
    </SC.StyledPagesMainContainer>
  );
};

export default Pages;
