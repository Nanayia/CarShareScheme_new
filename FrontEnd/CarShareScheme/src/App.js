import React, { Component } from "react";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/Layout/Landing";
import Transaction from "./components/Layout/Transaction";
import Search from "./components/Layout/Search";
import ContactUs from "./components/Layout/ContactUS";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import UserDashboard from "./components/UserManagement/User/UserDashboard";
import AdminDashboard from "./components/UserManagement/Admin/AdminDashboard";
import AllBookings from "./components/UserManagement/Admin/AllBookings";
import AllCars from "./components/UserManagement/Admin/AllCars";
import NewCar from "./components/UserManagement/Admin/NewCar";
import NewAdmin from "./components/UserManagement/Admin/NewAdmin";
import Edit from "./components/UserManagement//User/Edit";
import Bookings from "./components/UserManagement//User/Bookings";
import SingleCar from "./components/CarManagement/SingleCar";

import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {
              //Public Routes
            }
           
            <Route exact path="/" component={Landing} />
            <Route exact path="/car" component={SingleCar} />
            <Route exact path="/Transaction" component={Transaction} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            {
              //Private Routes
            }
            <Route exact path="/AdminDashboard" component={AdminDashboard} />
            <Route exact path="/AllBookings" component={AllBookings} />
            <Route exact path="/AllCars" component={AllCars} />
            <Route exact path="/NewCar" component={NewCar} />
            <Route exact path="/NewAdmin" component={NewAdmin} />
            <Route exact path="/UserDashboard" component={UserDashboard} />
            <Route exact path="/bookings" component={Bookings} />
            <Route exact path="/edit" component={Edit} />
          
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;