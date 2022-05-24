import React from "react";
import Button from "../Button";
import { styled } from "../stitches.config";

const StyledDiv = styled("div", {
  bg: "$backgroundSurface",
  borderRadius: "$l",
  p: "$m",
  borderColor: "$borderSubtle",
  borderWidth: "$s",
  borderStyle: "solid",
});

const Card: React.FC = () => {
  return (
    <StyledDiv>
      <Button label="Button in Card" />
    </StyledDiv>
  );
};

export default Card;
