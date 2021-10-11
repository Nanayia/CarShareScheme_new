import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import store from "../../../store";
import { createNewAdmin } from "../../../actions/securityActions";
import HeaderAdmin from './HeaderAdmin';

class NewAdmin extends Component {

    constructor(props){
        super(props);
        this.state = {
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          usernameError: "",
          emailError: "",
          passwordError: "",
          confirmPasswordError: "",
          accountType:"",
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
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


    validate = () => {
      let usernameError = ""
      let emailError = ""
      let passwordError = ""
      let confirmPasswordError = ""
    
      if (!this.state.username.trim()) {
          usernameError = "Username required"
      }
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
    
    
      if (usernameError || emailError || passwordError || confirmPasswordError) {
          this.setState({ usernameError, emailError, passwordError, confirmPasswordError})
          return false
      }
      return true
    }


    onSubmit(e){
      e.preventDefault();
      const isValid = this.validate()
      
      if (isValid) {
          const newUser = {
              username: this.state.username,
              email: this.state.email,
              password: this.state.password,
              confirmPassword: this.state.confirmPassword,
              accountType:"Admin",
          }
          this.props.createNewAdmin(newUser, this.props.history);
      }
    }

      onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }


      render(){
          return(<body class="home">
          <div id="throbber" style={{display:"none", minheight:120}}></div>
      <div id="noty-holder"></div>
      <div id="wrapper">
          <HeaderAdmin/>
              

            <div class="container bootstrap snippets bootdey" style={{marginTop:200}}>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-2">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                <span class="glyphicon glyphicon-th"></span>
                                Add new Admin
                            </h3>
                        </div>
                        <form onSubmit={this.onSubmit}>
                        <div class="panel-body">
                            <div class="row">
                               
                                <div style={{marginTop:20, marginLeft:50}} class="col-xs-9 col-sm-9 col-md-9">
                                 <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-log-in"></span></div>
                                      <input name="username" class="form-control" type="text" placeholder="User Name" Value={this.state.username} onChange={this.onChange}/>
                                      <p>{this.state.usernameError}</p>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-log-in"></span></div>
                                      <input name="email" class="form-control" type="email" placeholder="Email" Value={this.state.email} onChange={this.onChange}/>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-log-in"></span></div>
                                      <input name="password" class="form-control" type="password" placeholder="Password"  Value={this.state.password} onChange={this.onChange}/>
                                      <p>{this.state.passwordError}</p>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-log-in"></span></div>
                                      <input name="confirmPassword" class="form-control" type="password" placeholder="ConfirmPassword"  Value={this.state.confirmPassword} onChange={this.onChange}/>
                                      <p>{this.state.confirmPasswordError}</p>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer">
                            <div class="row">
                                <div class="col-xs-6 col-sm-6 col-md-6"></div>
                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <button class="btn btn-success" type="submit">
                                        Add
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
    NewAdmin.propTypes = {
        createNewAdmin: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
        security: PropTypes.object.isRequired
    };
      
    const mapStateToProps = state => ({
        security: state.security,
        errors: state.errors
    });
      
    export default withRouter(connect(
        mapStateToProps,
        {createNewAdmin}
    )(NewAdmin));