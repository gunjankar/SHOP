import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route path="/products/:category" element={<ProductList />}></Route>

        <Route path="/product/:id" element={<Product />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        ></Route>

        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
