import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

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
const Angello = styled.button`
  font-size: x-large;
  width: 220px;
  height: 40px;
  border: none;
  outline: none;
  color: #111;
  background: #fff;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  ${mobile({ fontSize: "24px" })}

  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  :active {
    color: #fff;
  }

  :active:after {
    background: transparent;
  }

  :hover:before {
    opacity: 1;
  }

  :after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
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
  const user = useSelector((state) => state.user.currentUser);
  // const user = false;
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch);
  };
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
          {user ? (
            <>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItems>REGISTER</MenuItems>
              </Link>
              <MenuItems onClick={handleClick}>LOGOUT</MenuItems>
              <Link to="/cart">
                <MenuItems>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </MenuItems>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItems>SIGN-IN</MenuItems>
              </Link>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
