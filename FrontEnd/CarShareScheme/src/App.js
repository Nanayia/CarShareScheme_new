import React, { Component } from "react";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/Layout/Landing";
import ContactUs from "./components/Layout/ContactUS";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import UserDashboard from "./components/UserManagement/UserDashboard";
import Edit from "./components/UserManagement/Edit";
import Bookings from "./components/UserManagement/Bookings";
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
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            {
              //Private Routes
            }
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