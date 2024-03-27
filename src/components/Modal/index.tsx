import React, { ChangeEvent, FC, LegacyRef, MutableRefObject, ReactNode, RefObject, useCallback, useRef, useState } from "react";
import { IPagesProps } from "../../types/globalTypes";
import * as SC from './styles';
import useOutsideClick from "../../hooks/useOutsideClick";
import CloseIcon from "../../assets/icons/CloseIcon";
import Button from "../Button";
import { usePages } from "../../hooks/usePages";

const Modal: FC<{ isModalOpen: boolean; modalContent: any; onClose: () => void }> = ({ isModalOpen, modalContent, onClose }) => {
    const modalRef = useRef<HTMLElement>(null);
    const { tableData } = usePages()
    const [inputValue, setInputValue] = useState(modalContent?.title || '')


    useOutsideClick([modalRef], onClose);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }, [])

    // if (isModalOpen !== true) {
    //     return null;
    // }


    // useOutsideClick([shareIconsRef], () => {
    //     setIsShareIconsBlockVisible(false);
    //   });
    console.log('tableData', tableData)
    const handleSave = () => {
        const newObject = { ...modalContent, title: inputValue }
        const findElementIndex = tableData.findIndex(item => item.id === modalContent?.id)
        tableData[findElementIndex] = newObject
        onClose()
    }
    return (
        <SC.StyledModalSection>
            <SC.StyledModalContent ref={modalRef}>
                <h1>Edit</h1>
                <SC.StyledExitIcon onClick={onClose}>
                    <CloseIcon />
                </SC.StyledExitIcon>
                <SC.StyledMainContents>
                    {/* <h5 className="modal-title">{modalContent?.title}</h5> */}
                    <input type="text" defaultValue={modalContent?.title} onInput={handleChange} />
                    <Button text="Save" onClick={handleSave} />
                    {/* <div className="modal-button text-end"> */}
                    {/* Save */}
                    {/* <button>{modalContent.buttonText}</button> */}
                    {/* </div> */}
                </SC.StyledMainContents>
            </SC.StyledModalContent>
        </SC.StyledModalSection>
    );
};

export default Modal;