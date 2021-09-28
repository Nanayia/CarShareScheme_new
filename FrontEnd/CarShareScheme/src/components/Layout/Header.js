import React, { Component } from 'react'
import { getUser } from "../../actions/userActions";
import store from "../../store"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { logout } from '../../actions/securityActions';
import { Link } from 'react-router-dom';

 class Header extends Component {

	constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

	onSubmit(e){
        e.preventDefault();
		this.props.logout();
	}


    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

	componentDidMount() {
		console.log(store.getState())
        if (store.getState().security.validToken) {
            this.props.getUser(store.getState().security.user.id, this.props.history)
        }
        this.forceUpdate()
    }

    render() {
        return (
			<body>
            <div class="menu">
		<div class="container">
			<nav class="navbar navbar-expand-lg navbar-light">
			  <a class="navbar-brand" href="/"><h1 class="logo-text">AutoRent</h1></a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  {
                store.getState().security.validToken ? 
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav ml-auto">
			      <li class="nav-item">
			        <a class="nav-link btn btn-primary car-btn">
					{store.getState().security.user.username.charAt(0).toUpperCase() + store.getState().security.user.username.slice(1)}
					</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link btn btn-primary car-btn" onClick={e=>this.onSubmit(e)}>Log out</a>
			      </li>
			    </ul>
			  </div>
			:		
			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav ml-auto">
			      <li class="nav-item">
			        <a class="nav-link btn btn-primary car-btn" href="/login">Log in</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link btn btn-primary car-btn" href="/register">Sign in</a>
			      </li>
			    </ul>
			  </div>
	}
			</nav>
		</div>
	</div>
	</body>
        )
    }
}
Header.propTypes = {
    searchBooks: PropTypes.func.isRequired,
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
    {logout,getUser }
  )(Header));