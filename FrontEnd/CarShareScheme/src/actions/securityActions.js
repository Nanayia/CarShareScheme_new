import axios from "axios";
import {LOGIN_ERROR, USER_EXISTS_ERROR, EMAIL_EXISTS_ERROR, SET_CURRENT_USER} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";


export const createNewUser = (newUser, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/users/register", newUser)

        history.push("/login")

          alert("Account created.")
    } 
    catch (err) {
        if (err.response.status === 400) {
          dispatch({
              type: EMAIL_EXISTS_ERROR,
              payload: err.response.data.username
          });
        }
        if (err.response.status === 406) {
          dispatch({
              type: USER_EXISTS_ERROR,
              payload: err.response.data.username
          });
        }
        history.push("/")
        history.push("/register")
        alert("Account exist")
    }
}

export const login = (LoginRequest, history) => async dispatch => {
    try {

        //post => login request
        const res = await axios.post("http://localhost:8080/api/users/login", LoginRequest)

        //extract token from res.data
        const { token } = res.data;

        //set our token in the local storage
        localStorage.setItem("jwtToken", token);

        // set our token in header 
        setJWTToken(token); 

        //decode the token on React
        const decoded = jwt_decode(token);

        // dispatch to our securityReducer
        dispatch({
          type: SET_CURRENT_USER,
          payload: decoded
        });
        let url = "/";
        window.open(url)
        alert("Login successful")
    }
    catch (err)
    {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response.data
      });
      history.push("/")
      history.push("/login")
      alert("Username or password error")
    }

}

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: null
  });
}
