import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import { ToastProvider } from "react-toast-notifications";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <ToastProvider autoDismiss={true} placement={"top-right"}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route path="/products/:category" element={<ProductList />}></Route>

          <Route path="/product/:category/:id" element={<Product />}></Route>

          <Route path="/cart" element={<Cart />}></Route>

          <Route path="/my-orders" element={<Orders />}></Route>

          <Route
            path="/login"
            element={user ? <Login /> : <Navigate replace to="/" />}
          ></Route>

          <Route
            path="/register"
            element={user ? <Register /> : <Navigate replace to="/" />}
          ></Route>
        </Routes>
      </ToastProvider>
    </Router>
  );
};

export default App;
