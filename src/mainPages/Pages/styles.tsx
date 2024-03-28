import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledPagesMainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 15px;
`;

export const StyledTableControllersBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin: 15px 0;
`;

export const StyledTableControllersInputsBlock = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledSearchInput = styled.input<{ $bgImage?: string }>`
  border: none;
  outline: none;
  color: gray;
  padding: 8px 8px 8px 16px;
  border-radius: 8px;
  background-image: url(${({ $bgImage }) => $bgImage});
  font-size: 15px;
  background-position: right 10px center;
  background-repeat: no-repeat;

  &::placeholder {
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
`;

export const StyledSelect = styled.select`
  border: none;
  outline: none;
  color: gray;
  padding: 8px;
  border-radius: 8px;
  font-size: 15px;
`;

export const StyledSelectOptions = styled.option``;

export const StyledPathsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledPagesLink = styled(Link)<{ $isActive?: boolean }>`
  text-decoration: none;
  &:focus {
    color: inherit;
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      color: #12179a;
      font-weight: 700;
    `};
`;
