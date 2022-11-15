import { Route } from 'react-router-dom';
import Home from "./home/Home";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import CustomerService from './customer-service/CustomerServices'

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
          <Login/>
      </Route>
      <Route path="/signup">
          <SignUp/>
      </Route>
      <Route path="/customer-service">
        <CustomerService />
      </Route>
    </>
  )
}

export default Routes