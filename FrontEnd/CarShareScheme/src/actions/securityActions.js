import axios from "axios";
import {LOGIN_ERROR, USER_EXISTS_ERROR, EMAIL_EXISTS_ERROR, SET_CURRENT_USER, UPDATE_CURRENT_USER} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";


export const createNewUser = (newUser, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/users/register", newUser)

        history.push("/login")

          alert("Account created.")
          window.location.reload()
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
        window.location.reload()
    }
}

export const createNewAdmin = (newUser, history) => async dispatch => {
  try {
      await axios.post("http://localhost:8080/api/users/register", newUser)

      history.push("/AdminDashboard")

        alert("Account created.")
        window.location.reload()
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
      history.push("/NewAdmin")
      alert("Account exist")
      window.location.reload()
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
        history.push("/")
        alert("Login successful")
        window.location.reload()
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
      window.location.reload()
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


export const editUser = (id,user,history) => async dispatch => {
  try {
    const res = await axios.put(`http://localhost:8080/api/users/${id}`, null, { params: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    }})
    dispatch({
      type: UPDATE_CURRENT_USER,
      payload: res.data
    });
    alert("Saved profile, after next log in, you can see the changes")
    history.push("/edit")
  } catch (error) {
    if (error.response.status === 400) {
      dispatch({
          type: EMAIL_EXISTS_ERROR,
          payload: error.response.data.username
      });
    } else {
      alert("Failed to save profile")
    }
    history.push("/")
  }
}

export const deleteUser = (id, history) => async dispatch => {
  try {
    await axios.delete(`http://localhost:8080/api/users/delete`,id)
    history.push("/AdminDashboard")
    alert("Deleted the user")
  }catch (error) {
    alert(error)
  }
}