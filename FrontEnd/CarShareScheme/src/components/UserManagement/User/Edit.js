import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import store from "../../../store";
import Header from "./Header";
import { editUser } from "../../../actions/securityActions";

class Edit extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            emailError: "",
            password: "",
            confirmPassword: "",
            passwordError: "",
            confirmPasswordError: "",

        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        let firstName = ""
        let lastName = ""
        let email = ""
        let password = ""
        let confirmPassword = ""
        if (store.getState().security.user.firstName) {
            firstName = store.getState().security.user.firstName.charAt(0).toUpperCase() + store.getState().security.user.firstName.slice(1)
        }
        if (store.getState().security.user.lastName) {
            lastName = store.getState().security.user.lastName.charAt(0).toUpperCase() + store.getState().security.user.lastName.slice(1)
        }
        if (store.getState().security.user.email) {
            email = store.getState().security.user.email
        }
        if (firstName || lastName || email) {
            this.setState({ firstName, lastName, email, password, confirmPassword})
        }


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

    validate = () => {
        let emailError = ""
        let passwordError = ""
        let confirmPasswordError = ""
      
        if (!this.state.email) {
            emailError = "Email required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.email)){
            emailError = "Invalid email";
        }
        if (!this.state.password) {
            passwordError = "Password required"
        } else if (this.state.password.length < 6) {
            passwordError = "Password needs to be 6 characters or more"
        } else if (!this.state.confirmPassword && !this.state.password) {
            confirmPasswordError = "Password required"
        } else if (!this.state.confirmPassword && this.state.password.length >= 6) {
            confirmPasswordError = "Confirmation required"
        } else if (this.state.confirmPassword !== this.state.password) {
            passwordError = "Passwords to not match"
        }
      
      
        if (emailError || passwordError || confirmPasswordError) {
            this.setState({emailError, passwordError, confirmPasswordError})
            return false
        }
        return true
      }

      onSubmit(e){
        e.preventDefault();
        const isValid = this.validate()
        
        if (isValid) {
            const updateUser = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
            }
            this.props.editUser(store.getState().security.user.id, updateUser, this.props.history)
        }
      }

      onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

      Cancelled(e,id){
        e.preventDefault();
        this.props.bookingCancelled(id,this.props.history)
      }

      Return(e,id){
        e.preventDefault();
        this.props.bookingReturn(id,this.props.history)
      }

      render(){
          return(<body class="home">
          <div id="throbber" style={{display:"none", minheight:120}}></div>
      <div id="noty-holder"></div>
      <div id="wrapper">
          <Header/>
              

            <div class="container bootstrap snippets bootdey" style={{marginTop:200}}>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-2">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                <span class="glyphicon glyphicon-th"></span>
                                Update Info 
                            </h3>
                        </div>
                        <form onSubmit={this.onSubmit}>
                        <div class="panel-body">
                            <div class="row">
                               
                                <div style={{marginTop:20, marginLeft:50}} class="col-xs-9 col-sm-9 col-md-9">
                                 <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
                                      <input name="firstName" class="form-control" type="text" placeholder="First Name" Value={this.state.firstName} onChange={this.onChange}/>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-log-in"></span></div>
                                      <input name="lastName" class="form-control" type="text" placeholder="Last Name" Value={this.state.lastName} onChange={this.onChange}/>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-log-in"></span></div>
                                      <input name="email" class="form-control" type="email" placeholder="New Email Address"  Value={this.state.email} onChange={this.onChange}/>
                                    </div>
                                    <p>{this.state.emailError}</p>
                                  </div>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-log-in"></span></div>
                                      <input name="password" class="form-control" type="password" placeholder="New Password" value={this.state.password} onChange={this.onChange}/>
                                    </div>
                                    <p>{this.state.passwordError}</p>
                                  </div>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-log-in"></span></div>
                                      <input name="confirmPassword" class="form-control" type="password" placeholder="confirm New Password" value={this.state.confirmPassword} onChange={this.onChange}/>
                                    </div>
                                    <p>{this.state.confirmPasswordError}</p>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer">
                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6"></div>
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <button class="btn btn-success" type="submit">
                                        Update
                                        </button>
                                 </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </body>
          )
      }




    }
    Edit.propTypes = {
        editUser: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
        security: PropTypes.object.isRequired
    };
      
    const mapStateToProps = state => ({
        security: state.security,
        errors: state.errors
    });
      
    export default withRouter(connect(
        mapStateToProps,
        {editUser}
    )(Edit));