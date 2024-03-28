import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledPricePlansMainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 15px;
`;

export const StyledTableControllersBlock = styled.div`
  display: flex;
  justify-content: end;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin: 15px 0;

  @media (max-width: 600px){
    justify-content: center;
  }
`;

export const StyledTableControllersInputsBlock = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledSearchInput = styled.input<{ $bgImage?: string }>`
  border: 1px solid transparent;
  transition: 0.5s;
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
  };

  &:focus{
    border: 1px solid #6835cd;
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

  @media (max-width: 600px){
    flex-direction: column;
  }
`;

export const StyledPagesLink = styled(Link) <{ $isActive?: boolean }>`
  text-decoration: none;
  &:focus {
    color: inherit;
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      font-size: 20px;
      color: #6835cd;
      font-weight: 700;
    `};
`;

export const StyledNothingFound = styled.div`
  text-align: center;
  margin-top: 20vh;
  font-size: 40px;
  color: red;
`