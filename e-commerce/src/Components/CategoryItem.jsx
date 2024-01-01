import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  margin: 10px;
`;
const Button = styled.button`
  border-radius: 10px;
  background-color: #fce9e3;
  border: none;
  color: #000000;
  font-weight: 600;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  opacity: 0.7;

  :hover {
    width: 120px;
    background-color: #b3f562;
    color: #030000;
    opacity: 1;
    border: 2px solid white;
  }
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>
            <span>ShopNow</span>
          </Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
