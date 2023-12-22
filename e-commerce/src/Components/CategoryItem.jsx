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
  padding: 5px;
  border: none;
  background-color: white;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #50f62f;
    color: white;
    width: 100px;
    height: 40px;
  }
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now!</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
