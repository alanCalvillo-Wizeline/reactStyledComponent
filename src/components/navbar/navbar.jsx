import React from "react";
import Button from "../button";
import Input from "../input";

import {
  Container,
  NavCenter,
  NavRight,
  NavLeft,
  NavHeader,
} from "./navbar.styled";

const NavBar = ({ onSearch, onOpenModal }) => (
  <Container>
    <NavHeader>
      <NavLeft>Product Management</NavLeft>

      <NavCenter>
        <Input type="text" placeholder="Product Name" />{" "}
        <Button onClick={onSearch} label="Search" />
      </NavCenter>

      <NavRight>
        <Button onClick={onOpenModal} label="Add Product" />
      </NavRight>
    </NavHeader>
  </Container>
);

export default NavBar;
