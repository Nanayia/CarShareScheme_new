import React, { Component } from 'react'
import PropTypes from "prop-types";
import { login } from "../../actions/securityActions";
import { connect } from "react-redux";

const initialState = {
  username: "",
  password: "",
  usernameError: "",
  passwordError: ""
}

class Login extends Component {
  
  constructor(props) {
    super(props)

    this.state = initialState
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}

componentDidMount() {

  const link1 = document.createElement("link")
        link1.rel="stylesheet"
        link1.href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
        link1.integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" 
        link1.crossorigin="anonymous"
        document.body.appendChild(link1)
  
  const link2 = document.createElement("link")
        link2.rel="stylesheet"
        link2.href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" 

        document.body.appendChild(link2)

  const link3 = document.createElement("link")
        link3.rel="stylesheet"
        link3.href="./CssFiles/Login.css" 
        document.body.appendChild(link3)



  if(this.props.errors.loginError){
      let usernameError = this.props.errors.loginError.username
      let passwordError = this.props.errors.loginError.password
      this.setState({usernameError, passwordError})
      this.props.errors.loginError.username = ""
      this.props.errors.loginError.password = ""
  }
  this.forceUpdate()
}

onChange(e){
  this.setState({[e.target.name]: e.target.value});
}

validate = () => {
  let usernameError = ""
  let passwordError = ""

  if (!this.state.username.trim()) {
      usernameError = "Username required"
  }
  if (!this.state.password) {
      passwordError = "Password required"
  } 
  if (usernameError || passwordError) {
      this.setState({ usernameError, passwordError})
      return false
  }
  return true
}

onSubmit(e){
  e.preventDefault();
  const isValid = this.validate()

  if (isValid) {
      const LoginRequest = {
          username: this.state.username,
          password: this.state.password
      }
      this.props.login(LoginRequest, this.props.history)
  }
}

render() {
  return (
    <body class="body">
      <div class="container">
        <div class="d-flex justify-content-center h-100">
            <div class="card">
                <div class="card-header">
                    <h3>Sign In</h3>
                    <div class="d-flex justify-content-end social_icon">
                        <span><i class="fab fa-facebook-square"></i></span>
                        <span><i class="fab fa-google-plus-square"></i></span>
                        <span><i class="fab fa-twitter-square"></i></span>
                    </div>
                </div>
                <div class="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input 
                            type='text' 
                            name='username'
                            class="form-control username"
                            placeholder='Enter your username'
                            value={this.state.username}
                            onChange={this.onChange}
                            /> 
                          
                            
                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                            </div>
                            <input
                            type="password" 
                            name="password" 
                            class="form-control password"
                            placeholder="Place Your Password"
                            value={this.state.password}
                            onChange={this.onChange}
                            />
                            
                        </div>
                        <div class="row align-items-center remember">
                            <input type="checkbox"/>Remember Me
                        </div>
                        <input
                            type="submit" name="" value ="Login" class="mt-3 btn float-right login_btn"/>
                    </form>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-center links">
                        Don't have an account?<a href="/register">Sign Up</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
  );
}
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
