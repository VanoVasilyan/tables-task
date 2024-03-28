import styled from 'styled-components';
import { StyledButtonWrapper } from '../Button/styles';

export const StyledModalSection = styled.section`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledModalContent = styled.article`
    position: relative;
    border: 1px solid #fff;
    width: 100%;
    max-width: 600px;
    border: 1px solid #fff;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 15px;
`
export const StyledModalHeader = styled.h1`
    font-size: 25px;
    margin: 0;
`;

export const StyledModalInputLabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const StyledModalInputLabel = styled.span`
    font-weight: 600;
    color: #674f97;
`;

export const StyledModalInput = styled.input<{ $isInputEmpty?: boolean }>`
    outline: none;
    border: 1px solid ${({ $isInputEmpty }) => $isInputEmpty ? 'red' : '#a9a9a9ed'};
    color: #524444;
    padding: 8px;
    border-radius: 8px;
    font-size: 15px;
    transition: 0.5s;

    &:focus{
       border: 1px solid ${({ $isInputEmpty }) => $isInputEmpty ? 'red' : '#6835cd'};
    }
`;

export const StyledRequiredFieldText = styled.span`
    color: red;
    font-size: 14px;
`

export const StyledExitIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`

export const StyledMainContents = styled.main`
    margin-top: 50px;
    ${StyledButtonWrapper}{
        text-align: center;
        margin-top: 20px;
    }
`