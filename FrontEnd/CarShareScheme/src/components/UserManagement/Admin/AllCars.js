import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import store from "../../../store";
import HeaderAdmin from "./HeaderAdmin";
import { getCar } from "../../../actions/carActions";
import { deleteCar } from "../../../actions/carActions";
import axios from "axios";

class AllCars extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cars : []
        }
    }

    componentDidMount() {

        axios.get("http://localhost:8080/api/cars").then((response) => {
        this.setState({ cars: response.data })
        });

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


      onSubmitCar(e,id) {
        e.preventDefault();
        this.props.getCar(id, this.props.history)
      }

      onSubmit(e,id){
        this.props.deleteCar(id,this.props.history)
    }




      render(){
          return(
            <body>
            <div id="throbber" style={{display:"none", minheight:120}}></div>
        <div id="noty-holder"></div>
        <div id="wrapper">
            <HeaderAdmin/>
            
            <div id="page-wrapper">
        <div class="container-fluid">
            <div class="row" id="main" >
                <div class="col-sm-12 col-md-12 well" id="content">
            <div class="wrapper rounded">
            <nav class="navbar navbar-expand-lg navbar-dark dark d-lg-flex align-items-lg-start"> <h1>All Cars</h1> 
               
            </nav>
            
            <div class="d-flex justify-content-between align-items-center mt-3">
            <ul class="nav nav-tabs w-75">
                    <li class="nav-item"> <h4>Cars</h4> </li>
                    </ul>
                   
                
            </div>
            <div class="table-responsive">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Model</th>
                            <th scope="col" >Color</th>
                            <th scope="col" >Price</th>
                            <th scope="col">Review</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cars.map(
                            car =>
                        <tr key={car.id}>
                            <td scope="row">{car.id}</td>
                            <td scope="row">{car.carName}</td>
                            <td scope="row">{car.carModel}</td>
                            <td scope="row">{car.carColor}</td>
                            <td scope="row">${car.carPrice}</td>
                            <td><a class="btn btn-primary" onClick={e=>this.onSubmitCar(e,car.id)}>View</a></td>
                            <td><a class="btn btn-danger" onClick={e=>this.onSubmit(e,car.id)}>Remove Car</a></td>
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
    AllCars.propTypes = {
        getCar: PropTypes.func.isRequired,
        deleteCar: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
        security: PropTypes.object.isRequired
    };
      
    const mapStateToProps = state => ({
        security: state.security,
        errors: state.errors
    });
      
    export default withRouter(connect(
        mapStateToProps,
        { getCar,deleteCar}
    )(AllCars));