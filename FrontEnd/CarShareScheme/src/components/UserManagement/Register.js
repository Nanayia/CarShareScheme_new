import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { createNewUser } from "../../actions/securityActions";
import * as PropTypes from 'prop-types'
import { connect } from "react-redux";



const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  usernameError: "",
  emailError: "",
  passwordError: "",
  confirmPasswordError: "",
}


class Register extends Component {
  constructor(props){
    super(props);
    this.state = initialState
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}

onChange(e){
  this.setState({[e.target.name]: e.target.value});
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

componentDidMount() {
  if(this.props.errors.usernameError){
      let usernameError = this.props.errors.usernameError
      this.setState({usernameError})
      this.props.errors.usernameError = ""

  } else if (this.props.errors.emailError){
      let emailError = this.props.errors.emailError
      this.setState({emailError})
      this.props.errors.emailError = ""
  }
  this.forceUpdate()
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
      }
      this.props.createNewUser(newUser, this.props.history);
  }
}

render() {
  return (   
    <body>
      <div class="login">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="loginmain signup">
                        <div class="user-img">
                            <img src={require("../Layout/images/user.png")}></img>
                        </div>
                        <form onSubmit={this.onSubmit}>
                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange}></input>
                        <p>{this.state.usernameError}</p>
                        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}></input>
	                      <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}></input>
                        <p>{this.state.passwordError}</p>
	                      <input type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.onChange}></input>
                        <p>{this.state.confirmPasswordError}</p>
                        <input type="submit" name="" value ="Submit"/>
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
Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createNewUser }
)(Register);