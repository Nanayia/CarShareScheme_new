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


export const getCars = () => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/cars`)
        localStorage.setItem("cars", JSON.stringify(res.data));
        dispatch({
            type: GET_CARS,
            payload: res.data
          })
    } 
    catch (err) {
        alert(err)
        alert("Failed to get the cars")
        let url = "/";
        window.open(url)
    }
};