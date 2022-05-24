import React from "react";

import { styled } from "../stitches.config";

export interface ButtonProps {
  label: string;
}

const StyledButton = styled("button", {
  bg: "$backgroundElement",
  borderRadius: "$m",
  px: "$m",
  py: "$xs",
  fontSize: "$m",
  fontWeight: "$normal",
  borderStyle: "none",
  color: "$textWhite",
  "&:hover": {
    bg: "$backgroundElementHovered",
    borderColor: "$borderElementHovered",
  },
  "&:active": {
    bg: "$backgroundElementActive",
  },
  "&:focus": {
    boxShadow: "$focused",
  },
});

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <StyledButton>{label}</StyledButton>;
};

export default Button;
