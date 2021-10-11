import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import store from "../../../store";
import { getBookings } from "../../../actions/bookingActions";
import Header from "./Header";

class UserDashboard extends Component {

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


      render() {
        return (
            <body class="home">
    <div id="throbber" style={{display:"none", minheight:120}}></div>
<div id="noty-holder"></div>
<div id="wrapper">
    <Header/>

    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="row" id="main" >
                <div class="col-sm-12 col-md-12 well" id="content">
                    <div style={{width:300}}> 
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Nearest Available <b>Products</b></h2>
                                   
                                    <div>
                                        <div>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <div class="thumb-wrapper">
                                                        <div class="img-box">
                                                            <img src="https://images.unsplash.com/photo-1589148938909-4d241c91ee52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="img-responsive img-fluid" alt=""/>
                                                        </div>
                                                        <div class="thumb-content">
                                                            <h4>Toyota</h4>
                                                           <h4>London xyz street</h4>
                                                            <p class="item-price"><span>$369</span></p>
                                                            <div class="star-rating">
                                                                <ul class="list-inline">
                                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                                </ul>
                                                            </div>
                                                            <a href="../placeOrder.html" class="btn btn-primary">View</a>
                                                        </div>						
                                                    </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <div class="thumb-wrapper">
                                                        <div class="img-box">
                                                            <img src="https://images.unsplash.com/photo-1589148938909-4d241c91ee52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="img-responsive img-fluid" alt=""/>
                                                        </div>
                                                        <div class="thumb-content">
                                                            <h4>Honda civic</h4>
                                                            <h4>London xyz street</h4>
                                                            <p class="item-price"> <span>$230</span></p>
                                                            <div class="star-rating">
                                                                <ul class="list-inline">
                                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                                    <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                                </ul>
                                                            </div>
                                                            <a href="../placeOrder.html" class="btn btn-primary">View</a>
                                                        </div>						
                                                    </div>
                                                </div>		
                                                <div class="col-sm-3">
                                                    <div class="thumb-wrapper">
                                                        <div class="img-box">
                                                            <img src="https://images.unsplash.com/photo-1589148938909-4d241c91ee52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="img-responsive img-fluid" alt=""/>
                                                        </div>
                                                        <div class="thumb-content">
                                                            <h4>Mercedes</h4>
                                                            <h4>London xyz street</h4>
                                                            <p class="item-price"><span>$649</span></p>
                                                            <div class="star-rating">
                                                                <ul class="list-inline">
                                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                                    <li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
                                                                </ul>
                                                            </div>
                                                            <a href="../placeOrder.html" class="btn btn-primary">View</a>
                                                        </div>						
                                                    </div>
                                                </div>								
                                                
                                            </div>
                                        
                              </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>                </div>
            </div>
        </div>
    </div>
</div>

            </body>

            
        )
      }








}
UserDashboard.propTypes = {
    getBookings: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors
});
  
export default withRouter(connect(
    mapStateToProps,
    { getBookings}
)(UserDashboard));