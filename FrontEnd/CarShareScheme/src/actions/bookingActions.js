import axios from "axios"
import { GET_USER_BOOKINGS } from "./types";

export const createNewBooking = (newBooking, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/bookings/createBooking", newBooking)
        alert("Create Booking!")
        history.push("/")
    }
    catch (err) {
        alert("Create Booking failed!")
        history.push("/")
    }
}

export const getBookings = (userId, history) => async dispatch => {
    try {
      const res = await axios.post("http://localhost:8080/api/bookings/userBookings", userId)
      localStorage.setItem("bookings", JSON.stringify(res.data));
      dispatch({
        type: GET_USER_BOOKINGS,
        payload: res.data
      });
      history.push("/")
  
    } catch (error) {
      alert("Failed to get orders")
      let url = "/";
        window.open(url)
    }
}