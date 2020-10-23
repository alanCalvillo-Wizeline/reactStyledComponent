import React from "react";

import { StyledInput } from "./input.styled";

const Input = ({ type, placeholder }) => (
  <StyledInput type={type} placeholder={placeholder} />
);

export default Input;
