import React from "react";
import {
  Nav,
  Menu,
  MenuItem,
  MenuLink,
  Input,
  Icon,
  NavbarContainer,
} from "./Header.style";
import { NAME_STORE } from "../../utils/constants";

export default function Header() {
  return (
    <Nav>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <NavbarContainer>
        <Menu>
          <MenuItem>
            <MenuLink to="/">{NAME_STORE}</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/">HOME</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/info">INFO</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/about">ABOUT</MenuLink>
          </MenuItem>
          <MenuItem>
            <Icon></Icon>
          </MenuItem>
          <MenuItem>
            <Input />
          </MenuItem>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
}
