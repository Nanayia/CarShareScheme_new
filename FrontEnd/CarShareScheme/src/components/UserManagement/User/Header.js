import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import store from "../../../store";
import { getUser } from "../../../actions/userActions";
import { getBookings } from "../../../actions/bookingActions";
import { logout } from '../../../actions/securityActions';

class Header extends Component {


    onSubmit(e) {
        e.preventDefault();
        const Bookings = {
            username: store.getState().security.user.username
        }
        this.props.getBookings(Bookings, this.props.history)
    }
    
    Logout(e){
        e.preventDefault();
		this.props.logout();
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

    render(){
        return(
          <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
              <div class="navbar-header">
              <h1 style={{color: "white"}}>User Portal</h1>
              </div>
              <ul class="nav navbar-right top-nav">
                  <li><a href="/" data-placement="bottom" data-toggle="tooltip" data-original-title="Stats"><i class="fa fa-bar-chart-o"></i>
                      </a>
                  </li>            
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">{store.getState().security.user.username.charAt(0).toUpperCase() + store.getState().security.user.username.slice(1)}<b class="fa fa-angle-down"></b></a>
                      <ul class="dropdown-menu">
                          <li><a href="/bookings" class="Edit_Profile"><i class="fa fa-fw fa-user"></i> Current Orders</a></li>
                          <li><a href="/edit" class="Change_Pass"><i class="fa fa-fw fa-cog"></i> Change Password</a></li>
                          <li class="divider"></li>
                          <li><a href="#" onClick={e=>this.Logout(e)}><i class="fa fa-fw fa-power-off"></i> Logout</a></li>
                      </ul>
                  </li>
              </ul>
              <div class="collapse navbar-collapse navbar-ex1-collapse">
                  <ul class="nav navbar-nav side-nav">
                      <li>
                          <a href="/UserDashboard" class="menu1"><i></i>Nearest Available Cars</a>
                      </li>
                      <li>
                          <a href="/bookings" class="menu2" onClick={e=>this.onSubmit(e)}><i></i> Current Orders</a>
                      </li>
                      
                      <li>
                          <a href="/edit" class="menu3"><i></i>Edit Profile</a>
                      </li>
                  
                  </ul>
              </div>
          </nav>
        )
    }

}

Header.propTypes = {
    getBookings: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors
});
  
export default withRouter(connect(
    mapStateToProps,
    { getUser,getBookings,logout }
)(Header));