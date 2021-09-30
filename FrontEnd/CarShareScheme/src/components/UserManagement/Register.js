import React, { Component } from "react";
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
  const link1 = document.createElement("link")
  link1.rel="stylesheet"
  link1.href="./CssFiles/SignUp.css" 
  document.body.appendChild(link1)

  const link2 = document.createElement("link")
  link2.rel="stylesheet"
  link2.href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" 
  link2.integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  link2.crossorigin="anonymous"
  document.body.appendChild(link2)

  const link3 = document.createElement("link")
  link3.rel="stylesheet"
  link3.href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i" 
  document.body.appendChild(link3)




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
      <div class="main-w3layouts wrapper">
          <div class="main-agileinfo">
              <div class="agileits-top">
                  <form onSubmit={this.onSubmit}>
                    <h1 class="mb-1">SignUp </h1>
                      <input class="text" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange}/>
                      <p>{this.state.usernameError}</p>
                      <input class="text email" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                      <input class="text" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                      <p>{this.state.passwordError}</p>
                      <input class="text w3lpass" type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.onChange}/>
                      <p>{this.state.confirmPasswordError}</p>
                      <div class="wthree-text">
                          <label class="anim">
                              <input type="checkbox" class="checkbox" required=""/>
                              <span>I Agree To The Terms & Conditions</span>
                          </label>
                          <div class="clear"> </div>
                      </div>
                      <input type="submit" name="" value ="Sign up" class="login_btn mt-3"/>
                  </form>
                  <p >Already have an Account? <a href="/Login" class="links"> Login Now!</a></p>
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