import styled from 'styled-components';

export const StyledButtonWrapper = styled.div`
  width: 100%;
`;

export const StyledMainButton = styled.button`
  width: 100%;
  max-width: 85px;
  cursor: pointer;
  padding: 6px 14px;
  border-radius: 15px;
  border: none;
  background: #674f97;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
  color: #DFDEDF;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:focus{
    box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }
`;
