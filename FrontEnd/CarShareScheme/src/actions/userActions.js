import axios from "axios";
import { GET_USERS, GET_USER } from "./types";


export const getUsers = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/users");
  dispatch({
    type: GET_USERS,
    payload: res.data
  });
};

export const getUser = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/api/users/${id}`);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (error) {
    alert("FAILED GET USER")
    history.push("/");
  }
};