import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import store from "../../../store";
import { getUser } from "../../../actions/userActions";
import { logout } from '../../../actions/securityActions';

class HeaderAdmin extends Component {


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
              link2.href="./CssFiles/DashboardAdmin.css" 
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
              <h1 style={{color: "white"}}>Admin Portal</h1>
              </div>
              <ul class="nav navbar-right top-nav">
                  <li><a href="/" data-placement="bottom" data-toggle="tooltip" data-original-title="Stats"><i class="fa fa-bar-chart-o"></i>
                      </a>
                  </li>            
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">{store.getState().security.user.username.charAt(0).toUpperCase() + store.getState().security.user.username.slice(1)}<b class="fa fa-angle-down"></b></a>
                      <ul class="dropdown-menu">
                          <li><a href="/AdminDashboard" class="Edit_Profile"><i class="fa fa-fw fa-user"></i> User Accounts</a></li>
                          <li><a href="/Allbookings" class="Change_Pass"><i class="fa fa-fw fa-cog"></i> Bookings</a></li>
                          <li><a href="/AllCars" class="Change_Pass"><i class="fa fa-fw fa-cog"></i> Cars</a></li>
                          <li><a href="/NewCar" class="Change_Pass"><i class="fa fa-fw fa-cog"></i> New Car</a></li>
                          <li><a href="/NewAdmin" class="Change_Pass"><i class="fa fa-fw fa-cog"></i> New Admin</a></li>
                          <li class="divider"></li>
                          <li><a href="#" onClick={e=>this.Logout(e)}><i class="fa fa-fw fa-power-off"></i> Logout</a></li>
                      </ul>
                  </li>
              </ul>
              <div class="collapse navbar-collapse navbar-ex1-collapse">
                  <ul class="nav navbar-nav side-nav">
                      <li>
                          <a href="/AdminDashboard" class="menu1"><i></i>User Accounts</a>
                      </li>
                      <li>
                          <a href="/Allbookings" class="menu2"><i></i> Transaction History</a>
                      </li>
                      
                      <li>
                          <a href="/AllCars" class="menu3" ><i></i>Cars</a>
                      </li>
                      <li>
                          <a href="/NewCar" class="menu3"><i></i>Add New Car</a>
                      </li>
                      <li>
                          <a href="/NewAdmin" class="menu3"><i></i>Add New Admin</a>
                      </li>
                  </ul>
              </div>
          </nav>
        )
    }

}

HeaderAdmin.propTypes = {
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
    { getUser,logout}
)(HeaderAdmin));