import React from "react";

import { styled } from "../stitches.config";

export interface ButtonProps {
  label: string;
}

const StyledButton = styled("button", {
  bg: "$primary",
  borderRadius: "$m",
  px: "$m",
  py: "$xs",
  fontSize: "$m",
  fontWeight: "$heavy",
  borderStyle: "none",
  color: "$primaryText",
  "&:hover": {
    bg: "$primaryHover",
  },
  "&:active": {
    bg: "$primaryActive",
  },
  "&:focus": {
    boxShadow: "$primaryFocused",
  },
});

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <StyledButton>{label}</StyledButton>;
};

export default Button;
