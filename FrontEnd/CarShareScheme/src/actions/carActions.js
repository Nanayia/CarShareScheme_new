import axios from "axios";
import { GET_CARS, GET_CAR} from "./types"

export const getCar = (id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/cars/${id}`)
        localStorage.setItem("car", JSON.stringify(res.data));
        history.push("/car")
    } 
    catch (err) {
        alert(err)
        alert("Failed to get the car")
        history.push("/")
    }
};


export const getCars = (history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/cars`)
        localStorage.setItem("cars", JSON.stringify(res.data));
        dispatch({
            type: GET_CARS,
            payload: res.data
          })
        history.push("/AllCars")

    } 
    catch (err) {
        alert("Failed to get the cars")
        history.push("/AdminDashboard")
    }
};

export const createNewCar = (newCar, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/cars/newCar", newCar)
        alert("Created the Car!")
        history.push("/NewCar")
        window.location.reload()
    }
    catch (err) {
        alert("Create the car failed!")
        history.push("/NewCar")
        window.location.reload()
    }
}

export const queryCars = (query, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/cars/search", query)
        localStorage.setItem("cars", JSON.stringify(res.data));
        localStorage.setItem("query", query.query);
        history.push("/Search")
        window.location.reload()
    } 
    catch (err) {
        alert("Search error")
        history.push("/")
    }
};

export const deleteCar = (id, history) => async dispatch => {
    try {
      await axios.delete(`http://localhost:8080/api/cars/${id}`,id)
      history.push("/AllCar")
      alert("Deleted the car")
    }catch (error) {
      alert(error)
    }
  }