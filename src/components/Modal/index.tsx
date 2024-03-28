import React, {
  ChangeEvent,
  FC,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Button from '../Button';
import useOutsideClick from '../../hooks/useOutsideClick';
import CloseIcon from '../../assets/icons/CloseIcon';
import { EPageTypes } from '../../types/globalTypes';
import { EInputValueType, IModal } from './types';
import * as SC from './styles';

const Modal: FC<IModal> = ({
  onClose,
  modalContent,
  setTableData,
  pathname,
}) => {
  const modalRef = useRef<HTMLElement>(null);
  const [emptyValue, setEmptyValue] = useState(false);
  const [inputValue, setInputValue] = useState(
    modalContent.content?.title ||
    modalContent.content?.description ||
    modalContent.content?.name ||
    ''
  );

  useOutsideClick([modalRef], onClose);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmptyValue(false);
    setInputValue(e.target.value);
  };

  const inputValueType = useMemo(() => {
    return modalContent.content.hasOwnProperty(EInputValueType.DESCRIPTION)
      ? EInputValueType.DESCRIPTION
      : modalContent.content.hasOwnProperty(EInputValueType.TITLE)
        ? EInputValueType.TITLE
        : EInputValueType.NAME;
  }, [modalContent]);

  const handleSave = () => {
    if (inputValue.trim()) {
      const newTableData = [...modalContent.data];
      const newObject = {
        ...modalContent,
        content: { ...modalContent.content, [inputValueType]: inputValue },
      };
      const findElementIndex = modalContent.data.findIndex(
        (item: any) => item.id === modalContent?.content.id
      );
      newTableData[findElementIndex] = newObject.content;

      if (pathname === '/') {
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
    } else {
      setEmptyValue(true)
    }
  };

  const defaultValue = useMemo(() => {
    return (
      modalContent.content?.title ||
      modalContent.content?.description ||
      modalContent.content?.name
    );
  }, [modalContent]);

  useEffect(() => {
    const listener = (event: { code: string; preventDefault: () => void }) => {
      if (event.code === 'Enter') {
        event.preventDefault();
        handleSave()
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  });

  return (
    <SC.StyledModalSection>
      <SC.StyledModalContent ref={modalRef}>
        <SC.StyledModalHeader>Edit</SC.StyledModalHeader>
        <SC.StyledExitIcon onClick={onClose}>
          <CloseIcon />
        </SC.StyledExitIcon>
        <SC.StyledMainContents>
          <SC.StyledModalInputLabelWrapper>
            <SC.StyledModalInputLabel>
              {inputValueType.charAt(0).toUpperCase() + inputValueType.slice(1)}
            </SC.StyledModalInputLabel>
            <SC.StyledModalInput
              type='text'
              defaultValue={defaultValue}
              onInput={handleChange}
              $isInputEmpty={emptyValue}
            />
            {emptyValue && <SC.StyledRequiredFieldText>Required Field</SC.StyledRequiredFieldText>}
          </SC.StyledModalInputLabelWrapper>
          <Button text='Save' onClick={handleSave} />
        </SC.StyledMainContents>
      </SC.StyledModalContent>
    </SC.StyledModalSection>
  );
};

export default Modal;
