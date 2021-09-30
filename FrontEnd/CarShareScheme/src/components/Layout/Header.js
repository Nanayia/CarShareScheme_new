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
			<body></body>
		)
    }
}
Header.propTypes = {
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