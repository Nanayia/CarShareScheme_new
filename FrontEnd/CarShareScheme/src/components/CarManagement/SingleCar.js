import React, { Component } from "react";
import ReactDOM from "react-dom"
import store from "../../store";

import PropTypes from "prop-types";
import { connect } from "react-redux"
import { createNewBooking } from "../../actions/bookingActions";

class SingleCar extends Component{

    constructor(props) {
        super(props)
        this.state = {
            car : JSON.parse(localStorage.car),
            carId: "",
            pickUp: "",
            dropOff: "",
            pickupDate: "",
            dropoffDate: "",
            carPrice:"",
            status:"Rrturn",
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    createBooking(data, actions) {
        return actions.booking.create({
            purchase_units: [
                {
                    amount: {
                        value: this.state.car.carPrice,
                    },
                },
            ],
        });
    }

    onApprove(data, actions) {
        const newBooking = {
            userID: store.getState().security.user.id,
            userName: store.getState().security.user.username,
            carName: this.state.car.carName,
            carModel: this.state.car.carType,
            carColor: this.state.car.carColor,
            carPrice: this.state.car.carPrice,
            pickUp: "",
            dropOff: "",
            pickupDate: "",
            dropoffDate: "",
            status:"Rrturn",
        }
        this.props.createNewBooking(newBooking, this.props.history);

        return actions.Booking.capture();
    }

    onChange(e){
      this.setState({[e.target.name]: e.target.value});
  }

    onSubmit(e){
        e.preventDefault();
        const newBooking = {
            userID: store.getState().security.user.id,
            username: store.getState().security.user.username,
            carId: this.state.car.id,
            carName: this.state.car.carName,
            carType: this.state.car.carModel,
            carColor: this.state.car.carColor,
            carPrice: this.state.car.carPrice,
            pickUp: this.state.pickUp,
            dropOff: this.state.dropOff,
            carPrice: this.state.car.carPrice,
            pickupDate: "",
            dropoffDate: "",
            status:"Return",
        }
        this.props.createNewBooking(newBooking, this.props.history);

    }

    

    componentDidMount () {
        const link1 = document.createElement("link")
        link1.rel="stylesheet"
        link1.href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" 
        link1.integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" 
        link1.crossorigin="anonymous"
        document.body.appendChild(link1)

        const link2 = document.createElement("link")
        link2.rel="stylesheet"
        link2.href="./CssFiles/PlaceOrder.css" 
        document.body.appendChild(link2)

        const link3 = document.createElement("link")
        link3.rel="stylesheet"
        link3.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" 
        document.body.appendChild(link3)
    }

    render() {
        return (
            <body>
<main class="container">
        <div class="left-column mt-5">
          <img  class="active" id="car-img" src="https://images.unsplash.com/photo-1589148938909-4d241c91ee52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
        </div>
       
       
        <div class="right-column">
       
          <div class="product-description">
            <span>CARS</span>
            <h1>{this.state.car.carName}</h1>
            <p>A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods. ... Cars have controls for driving, parking, passenger comfort, and a variety of lights.</p>
          </div>
          <form onSubmit={this.onSubmit}>
          <div class="product-configuration">

            <div class="product-color">
              <span>Type: </span>
              <span>{this.state.car.carModel}</span>
            </div>
            <div class="product-color">
              <span>Color: </span>
              <span>{this.state.car.carColor}</span>
            </div>
            <div class="cable-config">
              <span>pickUp</span>
              <input 
                            type='text' 
                            name='pickUp'
                            placeholder='Enter your pickUp'
                            value={this.state.pickUp}
                            onChange={this.onChange}
                            /> 
              </div>
              <div class="cable-config">
              <span>dropOff</span>
              <input 
                            type='text' 
                            name='dropOff'
                            placeholder='Enter your dropOff'
                            value={this.state.dropOff}
                            onChange={this.onChange}
                            /> 
 
            </div>
          </div>
          <div class="product-price">
            <span id="price">${this.state.car.carPrice}</span>
            <input
            type="submit" name="" value ="Book Now" class="cart-btn"/>
          </div>
          </form>
        </div>
      </main>
</body>


        )
    }
}
SingleCar.propTypes = {
    createNewBooking: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};
      
    const mapStateToProps = state => ({
        security: state.security,
        errors: state.errors
      });
      
    export default connect(
        mapStateToProps,
        { createNewBooking }
      )(SingleCar);























