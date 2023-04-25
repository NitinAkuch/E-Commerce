import styled from "styled-components";

import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 3px;

  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <div>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Categories;
