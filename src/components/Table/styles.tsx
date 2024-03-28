import styled from 'styled-components';

export const StyledTableMainContainer = styled.div``;

export const StyledTableBlock = styled.div``;

export const StyledMainTable = styled.table`
  width: 100%;
  border-radius: 22px;
  background-color: white;
  border-radius: 5px;
  border-spacing: 0;
`;

export const StyledMainTableBody = styled.tbody``;

export const StyledMainTableHeadRightBlock = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  gap: 100px;
`;

export const StyledTableColumns = styled.td<{
  $bgColor?: string;
  $isActive?: boolean | undefined;
}>`
  color: ${({ $isActive }) => {
    if ($isActive !== undefined) {
      return $isActive ? '#37E206' : '#DB1305';
    }
  }};
  font-weight: ${({ $isActive }) => {
    if ($isActive !== undefined) {
      return 500;
    }
  }};
  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : 'white')};
  padding: 10px 22px;
`;

export const StyledTableRows = styled.tr``;

export const StyledMainTableHead = styled.thead`
  ${StyledTableRows} {
    ${StyledTableColumns} {
      color: #6835cd;
      font-weight: 700;
      font-size: 20px;
      padding: 10px 22px;
    }
  }
`;
