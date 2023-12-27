import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0px 10px;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  height: 25px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Angello = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  //const cart = useSelector(state=>state.cart.quantity)
  //console.log(cart)
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ fontSize: 18 }} />
            {/* style={{ color: "gray", fontSize: 16 }} */}
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Angello>Angello.</Angello>
          </Link>
        </Center>
        <Right>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItems>REGISTER</MenuItems>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <MenuItems>SIGN-IN</MenuItems>
          </Link>
          <Link to="/cart">
            <MenuItems>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItems>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
