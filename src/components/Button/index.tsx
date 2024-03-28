import React, { FC } from 'react';
import { IButton } from './types';
import * as SC from './styles';

const Button: FC<IButton> = ({ onClick, text }) => {
  return (
    <SC.StyledButtonWrapper>
      <SC.StyledMainButton onClick={onClick}>{text}</SC.StyledMainButton>
    </SC.StyledButtonWrapper>
  );
};

export default Button;
