import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
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
  return (
    <Router>
      <Routes>
        <Route path="/login">
          <Login />
        </Route>
        {admin && (
          <>
            <Topbar />
            <Container>
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </Container>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
