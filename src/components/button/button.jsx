import React from "react";

import { StyledButton } from "./button.styled";

const Button = ({ label, onClick }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);

export default Button;
