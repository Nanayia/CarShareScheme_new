import React, { Component } from 'react'
import PropTypes from "prop-types";
import { login } from "../../actions/securityActions";
import { Link } from 'react-router-dom';
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
    <body>
    <div class="login">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="loginmain">
                        <div class="user-img">
                            <img src={require("../Layout/images/user.png")}></img>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <input 
                            type='text' 
                            name='username'
                            placeholder='Enter your username'
                            value={this.state.username}
                            onChange={this.onChange}
                            /> 
                            <p>{this.state.usernameError}</p>
                            <input
                            type="password" 
                            name="password" 
                            placeholder="Place Your Password"
                            value={this.state.password}
                            onChange={this.onChange}
                            />
                            <p>{this.state.passwordError}</p>
                            <input
                            type="submit" name="" value ="Login"/>
                            <div class="forget"><a href="">Forget Password?</a></div>
                        </form>
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
