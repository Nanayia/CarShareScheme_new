import axios from "axios";
import { GET_USERS, GET_USER } from "./types";
import setJWTToken from "../securityUtils/setJWTToken";



export const getUsers = (history) => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/users");
  localStorage.setItem("users", JSON.stringify(res.data));
  dispatch({
    type: GET_USERS,
    payload: res.data
  })
    history.push("/AdminDashboard")
}

export const getUser = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/api/users/${id}`);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (error) {
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    alert("FAILED GET USER")
    history.push("/");
  }
};