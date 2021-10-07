import axios from "axios"
import { GET_USER_BOOKINGS } from "./types";

export const createNewBooking = (newBooking, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/bookings/createBooking", newBooking)
        alert("Create Booking!")
        history.push("/")
        window.location.reload()
    }
    catch (err) {
        alert("Create Booking failed!")
        history.push("/")
        window.location.reload()
    }
}

export const getBookings = (username, history) => async dispatch => {
    try {
      const res = await axios.post("http://localhost:8080/api/bookings/userBookings", username)
      localStorage.setItem("bookings", JSON.stringify(res.data));
      dispatch({
        type: GET_USER_BOOKINGS,
        payload: res.data
      });
      history.push("/bookings")
  
    } catch (error) {
      alert("Failed to get Bookings")
      history.push("/UserDashboard")
    }
}

export const bookingCancelled = (bookingId, history) => async dispatch => {
  try {
      const res = await axios.put(`http://localhost:8080/api/bookings/cancelled/${bookingId}`)
      localStorage.setItem("bookings", JSON.stringify(res.data));
      dispatch({
        type: GET_USER_BOOKINGS,
        payload: res.data
      });
      alert("Cancelled")
      history.push("/bookings")
      window.location.reload()
  } catch (error) {
    alert("Cancelled error")
    window.location.reload()
  }
}

export const bookingReturn = (bookingId, history) => async dispatch => {
  try {
      const res = await axios.put(`http://localhost:8080/api/bookings/return/${bookingId}`)
      localStorage.setItem("bookings", JSON.stringify(res.data));
      dispatch({
        type: GET_USER_BOOKINGS,
        payload: res.data
      });
      alert("Returned")
      history.push("/bookings")
      window.location.reload()
  } catch (error) {
    alert("Return error")
    window.location.reload()
  }
}