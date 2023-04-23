import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0px 10px;
`;
const Language = styled.span`
  font-size: 14px;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const Input = styled.input`
  border: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Angello = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  align-items: center;
`;
const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 0px 15px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Angello>Angello</Angello>
        </Center>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Sign-in</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
