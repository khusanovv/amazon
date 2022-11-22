import { Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import CustomerService from "./customer-service/CustomerServices";
import Seemore from "./seemore/Seemore";
import Products from "./products/Products";

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/customer-service">
        <CustomerService />
      </Route>
      <Route exact path="/seemore">
        <Seemore />
      </Route>
      <Route path="/seemore/products">
        <Products />
      </Route>
    </>
  );
};

export default Routes;
