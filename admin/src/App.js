import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import UserList from "./pages/UserList";
import ProductList from "./pages/ProductList";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
import Product from "./pages/Product";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  // const admin = true;
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />

          {admin && (
            <>
              <Route path="/users" element={<UserList />} />

              <Route path="/user/:userId" element={<User />} />

              <Route path="/newUser" element={<NewUser />} />

              <Route path="/products" element={<ProductList />} />

              <Route path="/product/:productId" element={<Product />} />

              <Route path="/newproduct" element={<NewProduct />} />
            </>
          )}
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
