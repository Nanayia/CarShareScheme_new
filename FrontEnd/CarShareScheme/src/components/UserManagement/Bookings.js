import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import store from "../../store";
import { bookingCancelled, bookingReturn } from "../../actions/bookingActions";
import { getBookings } from "../../actions/bookingActions";
import Header from "./Header";
import { getCar } from "../../actions/carActions";

class Bookings extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bookings : JSON.parse(localStorage.bookings)
        }
    }

    componentDidMount() {

        const link1 = document.createElement("link")
              link1.rel="stylesheet"
              link1.href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" 
              document.body.appendChild(link1)

        const link2 = document.createElement("link")
              link2.rel="stylesheet"
              link2.href="./CssFiles/DashboardCustomer.css" 
              document.body.appendChild(link2)

        const script1 = document.createElement("script")
              script1.src="stylesheet"
              script1.href="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" 
              document.body.appendChild(script1)

        const script2 = document.createElement("script")
              script2.src="stylesheet"
              script2.href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" 
              document.body.appendChild(script2)
    }

      Cancelled(e,id){
        e.preventDefault();
        this.props.bookingCancelled(id,this.props.history)
      }

      Return(e,id){
        e.preventDefault();
        this.props.bookingReturn(id,this.props.history)
      }

      onSubmitCar(e,id) {
        e.preventDefault();
        this.props.getCar(id, this.props.history)
      }


      render(){
          return(
            <body>
            <div id="throbber" style={{display:"none", minheight:120}}></div>
        <div id="noty-holder"></div>
        <div id="wrapper">
            <Header/>
            
            <div id="page-wrapper">
        <div class="container-fluid">
            <div class="row" id="main" >
                <div class="col-sm-12 col-md-12 well" id="content">
            <div class="wrapper rounded">
            <nav class="navbar navbar-expand-lg navbar-dark dark d-lg-flex align-items-lg-start"> <h1>Your Purchases </h1> 
               
            </nav>
            
            <div class="d-flex justify-content-between align-items-center mt-3">
            <ul class="nav nav-tabs w-75">
                    <li class="nav-item"> <h4>Rented Cars</h4> </li>
                    </ul>
                   
                
            </div>
            <div class="table-responsive">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Car</th>
                            <th scope="col">Model</th>
                            <th scope="col">Color</th>
                            <th scope="col" >Pick up</th>
                            <th scope="col" >Drop off</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cancellation</th>
                            <th scope="col">Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.bookings.map(
                            booking =>
                        <tr key={booking.id}>
                            <td scope="row">{booking.carName}</td>
                            <td scope="row">{booking.carType}</td>
                            <td scope="row">{booking.carColor}</td>
                            <td scope="row">{booking.pickUp}</td>
                            <td scope="row">{booking.dropOff}</td>
                            <td scope="row">${booking.carPrice}</td>
                            { booking.status == "Return" ?
                            <td><a class="btn btn-info" onClick={e=>this.Return(e,booking.id)}>Return</a></td>
                            :
                            <td><a class="btn btn-success" disabled>{booking.status}</a></td>
                            }
                            { booking.status == "Return" ?
                            <td><a class="btn btn-danger" onClick={e=>this.Cancelled(e,booking.id)}>Cancel</a></td>
                            :
                            <td><a class="btn btn-danger" disabled>Cancel</a></td>
                            }
                            <td><a class="btn btn-primary" onClick={e=>this.onSubmitCar(e,booking.carId)}>View</a></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div> 
            <div class="row" >
                <button style={{marginLeft:20,backgroundColor:"#ffc312",color:"black"}} class="btn btn-secondary">generate Report</button>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </body>



          )
      }



    }
    Bookings.propTypes = {
        bookingCancelled: PropTypes.func.isRequired,
        bookingReturn: PropTypes.func.isRequired,
        getBookings: PropTypes.func.isRequired,
        getCar: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
        security: PropTypes.object.isRequired
    };
      
    const mapStateToProps = state => ({
        security: state.security,
        errors: state.errors
    });
      
    export default withRouter(connect(
        mapStateToProps,
        { getBookings,bookingCancelled, bookingReturn,getCar}
    )(Bookings));