import React, { Component } from 'react'
import { getCar } from "../../actions/carActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Header from "./Header";
import axios from "axios";




class Landing extends Component {

    constructor(props) {
        super(props)
        this.onSubmitCar = this.onSubmitCar.bind(this)
        this.state = {
            cars : []
        }
    }

    onSubmitCar(e,id) {
        e.preventDefault();
        this.props.getCar(id, this.props.history)
      }
    componentDidMount () {
        axios.get("http://localhost:8080/api/cars").then((response) => {
        this.setState({ cars: response.data })
        });
        const link1 = document.createElement("link")
        link1.rel="stylesheet"
        link1.href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
        link1.integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" 
        link1.crossorigin="anonymous"
        document.body.appendChild(link1)

        const link2 = document.createElement("link")
        link2.rel="stylesheet"
        link2.href="https://fonts.googleapis.com/css?family=Open+Sans" 
        document.body.appendChild(link2)

        const link3 = document.createElement("link")
        link3.rel="stylesheet"
        link3.href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
        document.body.appendChild(link3)

        const script1 = document.createElement("script")
        script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
        document.body.appendChild(script1)

        const script2 = document.createElement("script")
        script2.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
        document.body.appendChild(script2)

        const link4 = document.createElement("link")
        link4.rel="stylesheet"
        link4.href="./CssFiles/mainPage.css" 
        document.body.appendChild(link4)

        const link5 = document.createElement("link")
        link5.rel="stylesheet"
        link5.href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
        document.body.appendChild(link5)
      }
      componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
          return;
        };
      }

  render() {
    return (
        <body>
        <Header />
    <div class="super_container">
        <div style={{height:700}}> 
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Trending <b>Products</b></h2>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>   
                    <div class="carousel-inner">
                        <div class="item carousel-item active">
                            <div class="row cars-list">
                                {
                                            this.state.cars.map(
                                            car =>
                                    <div class="col-sm-3">
                                    <div class="thumb-wrapper">   
                                        <div class="img-box">
                                            <img src={car.image} class="img-responsive img-fluid" alt=""></img>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>{car.carName}</h4>
                                            <p class="item-price"><span>${car.carPrice}</span></p>
                                            <div class="star-rating">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                            <Link key={car.id} to="/car" class="btn btn-primary btn-view" onClick={e=>this.onSubmitCar(e,car.id)}>View</Link>
                                        </div>						
                                    </div>
                                    </div>
                                    )}
                            </div>
                        </div>

                        <div class="item carousel-item">
                            <div class="row cars-list">
                                {
                                            this.state.cars.map(
                                            car =>
                                    <div class="col-sm-3">
                                    <div class="thumb-wrapper">   
                                        <div class="img-box">
                                            <img src={car.image} class="img-responsive img-fluid" alt=""></img>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>{car.carName}</h4>
                                            <p class="item-price"><span>${car.carPrice}</span></p>
                                            <div class="star-rating">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                            <Link key={car.id} to="/car" class="btn btn-primary btn-view" onClick={e=>this.onSubmitCar(e,car.id)}>View</Link>
                                        </div>						
                                    </div>
                                    </div>
                                    )}
                            </div>
                        </div>

                        <div class="item carousel-item">
                            <div class="row cars-list">
                                {
                                            this.state.cars.map(
                                            car =>
                                    <div class="col-sm-3">
                                    <div class="thumb-wrapper">   
                                        <div class="img-box">
                                            <img src={car.image} class="img-responsive img-fluid" alt=""></img>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>{car.carName}</h4>
                                            <p class="item-price"><span>${car.carPrice}</span></p>
                                            <div class="star-rating">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                            <Link key={car.id} to="/car" class="btn btn-primary btn-view" onClick={e=>this.onSubmitCar(e,car.id)}>View</Link>
                                        </div>						
                                    </div>
                                    </div>
                                    )}
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                        <i class="fa fa-angle-left"></i>
                    </a>
                    <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
    );
  }

}

Landing.propTypes = {
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
    {getCar}
  )(Landing));