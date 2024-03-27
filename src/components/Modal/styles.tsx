import styled from "styled-components";

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

export const StyledExitIcon = styled.div`
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
`

export const StyledMainContents = styled.main`
    
`
// .modal {
//     position: fixed;
//     left: 0;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     background-color: rgba(0, 0, 0, 0.5);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//    }
//    .modal-content {
//     border: 1px solid #fff;
//     width: 500px;
//     background-color: #fff;
//     border-radius: 15px;
//    }
//    .exit-icon {
//     cursor: pointer;
//     font-size: 20px;
//    }
//    .modal-title {
//     color: #6821c3;
//     font-weight: 700;
//     font-size: 30px;
//     line-height: 28px;
//    }
//    .modal-image img {
//     width: 8rem;
//    }
//    .modalText {
//     text-align: justify;
//    }
//    .modal-button button {
//     border: 1px solid #6821c3;
//     padding: 6px;
//     width: 8rem;
//     background-color: #6821c3;
//     color: white;
//     border-radius: 7px;
//    }