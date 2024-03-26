import React, { FC } from "react";
import * as SC from "./styles";
import { IButton } from "./types";

const Button: FC<IButton> = ({ onClick, text }) => {
  return (
    <SC.StyledButtonWrapper>
      <SC.StyledMainButton onClick={onClick}>{text}</SC.StyledMainButton>
    </SC.StyledButtonWrapper>
  );
};

export default Button;
