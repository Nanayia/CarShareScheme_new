import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import store from "../../../store";
import { deleteUser } from "../../../actions/securityActions";
import HeaderAdmin from "./HeaderAdmin";
import axios from "axios";

class AdminDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users : []
        }
    }

    onSubmit(e,id){
        this.props.deleteUser(id,this.props.history)
    }

    

    componentDidMount() {

        axios.get("http://localhost:8080/api/users").then((response) => {
        this.setState({ users: response.data })
        });

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


      render() {
        return (
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
            <nav class="navbar navbar-expand-lg navbar-dark dark d-lg-flex align-items-lg-start"> <h1>Manage User Accounts</h1> 
               
            </nav>
            
            <div class="d-flex justify-content-between align-items-center mt-3">
            <ul class="nav nav-tabs w-75">
                    <li class="nav-item"> <h4>Car Share Account Holders</h4> </li>
                    </ul>
                   
                
            </div>
            <div class="table-responsive">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Member ID</th>
                            <th scope="col">User Name</th>
                            <th scope="col">First Name</th>
                            <th scope="col" >Last Name</th>
                            <th scope="col" >Email</th>
                            <th scope="col" >Account Type</th>
                            <th scope="col">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(
                            user =>
                        <tr key={user.id}>
                            <td scope="row">{user.id}</td>
                            <td scope="row">{user.username}</td>
                            <td scope="row">{user.firstName}</td>
                            <td scope="row">{user.lastName}</td>
                            <td scope="row">{user.email}</td>
                            <td scope="row">{user.accountType}</td>
                            <td><a class="btn btn-danger" onClick={e=>this.onSubmit(e,user.id)}>Remove Account</a></td>
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
AdminDashboard.propTypes = {
    deleteUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors
});
  
export default withRouter(connect(
    mapStateToProps,
    { deleteUser}
)(AdminDashboard));