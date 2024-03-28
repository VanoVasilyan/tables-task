import React, {
  ChangeEvent,
  FC,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import * as SC from "./styles";
import useOutsideClick from "../../hooks/useOutsideClick";
import CloseIcon from "../../assets/icons/CloseIcon";
import Button from "../Button";
import { EInputValueType, IModal } from "./types";
import { EPageTypes } from "../../types/globalTypes";

const Modal: FC<IModal> = ({
  onClose,
  modalContent,
  setTableData,
  pathname,
}) => {
  const modalRef = useRef<HTMLElement>(null);
  const [inputValue, setInputValue] = useState(
    modalContent.content?.title ||
      modalContent.content?.description ||
      modalContent.content?.name ||
      ""
  );

  useOutsideClick([modalRef], onClose);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const inputValueType = useMemo(() => {
    return modalContent.content.hasOwnProperty(EInputValueType.DESCRIPTION)
      ? EInputValueType.DESCRIPTION
      : modalContent.content.hasOwnProperty(EInputValueType.TITLE)
      ? EInputValueType.TITLE
      : EInputValueType.NAME;
  }, [modalContent]);

  const handleSave = () => {
    
    const newTableData = [...modalContent.data];
    const newObject = {
      ...modalContent,
      content: { ...modalContent.content, [inputValueType]: inputValue },
    };
    const findElementIndex = modalContent.data.findIndex(
      (item: any) => item.id === modalContent?.content.id
    );
    newTableData[findElementIndex] = newObject.content;

    if (pathname.includes("/")) {
      localStorage.setItem(EPageTypes.PRODUCTS, JSON.stringify(newTableData));
    } else if (pathname.includes(EPageTypes.PRICE_PLANS)) {
      localStorage.setItem(
        EPageTypes.PRICE_PLANS,
        JSON.stringify(newTableData)
      );
    } else if (pathname.includes(EPageTypes.PAGES)) {
      localStorage.setItem(EPageTypes.PAGES, JSON.stringify(newTableData));
    }

    setTableData(newTableData);
    onClose();
  };

  const defaultValue = useMemo(() => {
    return (
      modalContent.content?.title ||
      modalContent.content?.description ||
      modalContent.content?.name
    );
  }, [modalContent]);

  return (
    <SC.StyledModalSection>
      <SC.StyledModalContent ref={modalRef}>
        <h1>Edit</h1>
        <SC.StyledExitIcon onClick={onClose}>
          <CloseIcon />
        </SC.StyledExitIcon>
        <SC.StyledMainContents>
          <label htmlFor="">
            {inputValueType.charAt(0).toUpperCase() + inputValueType.slice(1)}
          </label>
          <input
            type="text"
            defaultValue={defaultValue}
            onInput={handleChange}
          />
          <Button text="Save" onClick={handleSave} />
        </SC.StyledMainContents>
      </SC.StyledModalContent>
    </SC.StyledModalSection>
  );
};

export default Modal;
