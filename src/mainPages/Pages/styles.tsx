import styled from "styled-components";

export const StyledPagesMainContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 15px;
`

export const StyledTableControllersBlock = styled.div`
    display: flex;
    justify-content: end;
    gap: 15px;
    margin: 15px 0;
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
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }
`