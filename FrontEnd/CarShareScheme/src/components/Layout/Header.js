import React, { Component } from 'react'
import { getUser } from "../../actions/userActions";
import store from "../../store"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { logout } from '../../actions/securityActions';
import { getUsers } from "../../actions/userActions";
import { queryCars } from "../../actions/carActions";

const initialState = {
    query: ""
}

 class Header extends Component {
     

	constructor(props) {
        super(props)
        this.state = initialState
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSearch = this.onSearch.bind(this)
    }

	onSubmit(e){
        e.preventDefault();
		this.props.logout();
	}

    onSearch(e){
        e.preventDefault();

        if (this.state.query.trim()) {
            const CarQuery = {
                query: this.state.query
            }
            this.props.queryCars(CarQuery, this.props.history)
        }
    }

    onSearchTo(e,to){
        e.preventDefault();

        if (to === "Mercedes") {
            const CarQuery = {
                query: "Mercedes"
            }
            this.props.queryCars(CarQuery, this.props.history)
        }
        if (to === "Civic") {
            const CarQuery = {
                query: "Civic"
            }
            this.props.queryCars(CarQuery, this.props.history)
        }
        if (to === "Toyota") {
            const CarQuery = {
                query: "Toyota"
            }
            this.props.queryCars(CarQuery, this.props.history)
        }
        if (to === "Honda") {
            const CarQuery = {
                query: "Honda"
            }
            this.props.queryCars(CarQuery, this.props.history)
        }
    }



    onSubmitDashboard(e){
        e.preventDefault();
		if (store.getState().security.user.accountType === "Admin") {
            this.props.history.push("/AdminDashboard")
        }else{
            this.props.history.push("/UserDashboard")
        }
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
			<header class="header">
            <div class="top_bar">
                <div class="container">       
                    <div class="row">
                        <div class="col d-flex flex-row">
                            <div class="top_bar_contact_item">
                                <div class="top_bar_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918577/phone.png" alt=""></img></div>+92 0000 132 000
                            </div>
                            <div class="top_bar_contact_item">
                                <div class="top_bar_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918597/mail.png" alt=""></img></div><a href="mailto:fastsales@gmail.com">contact@gmail.com</a>
                            </div>
                            <div class="top_bar_content ml-auto">
                                <div class="top_bar_menu">
                                    <ul class="standard_dropdown top_bar_dropdown">
                                        <li> <a href="#">English<i class="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li><a href="#">Italian</a></li>
                                                <li><a href="#">Spanish</a></li>
                                                <li><a href="#">Japanese</a></li>
                                            </ul>
                                        </li>
                                        <li> <a href="#">$ US dollar<i class="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li><a href="#">EUR Euro</a></li>
                                                <li><a href="#">GBP British Pound</a></li>
                                                <li><a href="#">JPY Japanese Yen</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {
                store.getState().security.validToken ? 
                <div class="top_bar_user">
                                    <div class="user_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg" alt=""></img></div>
                                    <div><a href="#" onClick={e=>this.onSubmitDashboard(e)}>{store.getState().security.user.username.charAt(0).toUpperCase() + store.getState().security.user.username.slice(1)}</a></div>
                                    <div><a href="#" onClick={e=>this.onSubmit(e)}>Log out</a></div>
                                </div>
                                :
                                <div class="top_bar_user">
                                    <div class="user_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg" alt=""></img></div>
                                    <div><a href="/register">Register</a></div>
                                    <div><a href="/Login">Sign in</a></div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header_main">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-sm-3 col-3 order-1">
                            <div class="logo_container">
                                <div class="logo"><a href="/">CarShare</a></div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                        <div class="header_search">
                                <div class="header_search_content">
                                    <div class="header_search_form_container">
                                        <form onSubmit={this.onSearch} class="header_search_form clearfix"> 
                                        <input id="query" name="query" type="text" value={this.state.query} onChange={this.onChange} class="header_search_input" placeholder="Search for products..."/>
                                        <button type="submit" id="search-btn" class="header_search_button trans_300" ><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png" alt=""/></button>
                                        </form>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                            <div class="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                                <div class="wishlist d-flex flex-row align-items-center justify-content-end">
                                    <div class="wishlist_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png" alt=""></img></div>
                                    <div class="wishlist_content">
                                        <div class="wishlist_text"><a href="#">Wishlist</a></div>
                                        <div class="wishlist_count">10</div>
                                    </div>
                                </div>
                                <div class="cart">
                                    <div class="cart_container d-flex flex-row align-items-center justify-content-end">
                                        <div class="cart_icon"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png" alt=""></img>
                                            <div class="cart_count"><span>3</span></div>
                                        </div>
                                        <div class="cart_content">
                                            <div class="cart_text"><a href="#">Cart</a></div>
                                            <div class="cart_price">$18500</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="main_nav">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="main_nav_content d-flex flex-row">
                                <div class="main_nav_menu">
                                    <ul class="standard_dropdown main_nav_dropdown">
                                        <li><a href="/" class=" nav-link active">Home<i class="fas fa-chevron-down"></i></a></li>
                                        <li class="hassubs"> <a href="#">Car Brands<i class="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li> <a href="#" id="mercedes" onClick={e=>this.onSearchTo(e,"Mercedes")}>Mercedes<i class="fas fa-chevron-down"></i></a>
                                                </li>
                                                <li><a href="#" id="toyota" onClick={e=>this.onSearchTo(e,"Toyota")}>Toyota<i class="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#" id="civic" onClick={e=>this.onSearchTo(e,"Civic")}>Civic<i class="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#" id="honda" onClick={e=>this.onSearchTo(e,"Honda")}>Honda<i class="fas fa-chevron-down"></i></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/ContactUs">Contact<i class="fas fa-chevron-down"></i></a></li>
                                    </ul>
                                </div>
                                <div class="menu_trigger_container ml-auto">
                                    <div class="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                        <div class="menu_burger">
                                            <div class="menu_trigger_text">menu</div>
                                            <div class="cat_burger menu_burger_inner"><span></span><span></span><span></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
		)
    }
}
Header.propTypes = {
    getUser: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    queryCars: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors
  });
  
  export default withRouter(connect(
    mapStateToProps,
    {logout,getUser,getUsers,queryCars }
  )(Header));