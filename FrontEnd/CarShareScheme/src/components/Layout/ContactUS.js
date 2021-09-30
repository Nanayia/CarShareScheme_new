import React, { Component } from 'react'
import { getUser } from "../../actions/userActions";
import store from "../../store"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { logout } from '../../actions/securityActions';



class ContactUs extends Component {
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

    componentDidMount () {
        console.log(store.getState())
        if (store.getState().security.validToken) {
            this.props.getUser(store.getState().security.user.id, this.props.history)
        }
        this.forceUpdate()
        const link1 = document.createElement("link")
        link1.rel="stylesheet"
        link1.href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
        link1.integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" 
        link1.crossorigin="anonymous"
        document.body.appendChild(link1)

        const link2 = document.createElement("link")
        link2.rel="stylesheet"
        link2.href="https://fonts.googleapis.com/css?family=Open+Sans" 
        document.body.appendChild(link2)

        const link3 = document.createElement("link")
        link3.rel="stylesheet"
        link3.href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
        document.body.appendChild(link3)

        const link4 = document.createElement("link")
        link4.rel="stylesheet"
        link4.href="./CssFiles/Contact.css" 
        document.body.appendChild(link4)

      }
  render() {
    return (
        <body>
<div class="super_container">
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
                                    <div><a href="/register">{store.getState().security.user.username.charAt(0).toUpperCase() + store.getState().security.user.username.slice(1)}</a></div>
                                    <div><a href="/Login" onClick={e=>this.onSubmit(e)}>Log out</a></div>
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
                                <div class="logo"><a href="#">CarShare</a></div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right"></div>
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
                                    <ul class="standard_dropdown main_nav_dropdown" >
                                        <li><a href="/" class=" nav-link active">Home<i class="fas fa-chevron-down"></i></a></li>
                                        <li class="hassubs"> <a href="#">Car Brands<i class="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li> <a href="#" id="mercedes">Mercedes<i class="fas fa-chevron-down"></i></a>
                                                </li>
                                                <li><a href="#" id="toyota">Toyota<i class="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#" id="civic">Civic<i class="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#" id="honda">Honda<i class="fas fa-chevron-down"></i></a></li>
                                            </ul>
                                        </li>
                                          
                                        <li><a href="/blog">Blog<i class="fas fa-chevron-down"></i></a></li>
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
            <div class="page_menu">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="page_menu_content">
                                <div class="page_menu_search">
                                </div>
                                <ul class="page_menu_nav">
                                    <li class="page_menu_item has-children"> <a href="#">Language<i class="fa fa-angle-down"></i></a>
                                        <ul class="page_menu_selection">
                                            <li><a href="#">English<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Italian<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Spanish<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Japanese<i class="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li class="page_menu_item has-children"> <a href="#">Currency<i class="fa fa-angle-down"></i></a>
                                        <ul class="page_menu_selection">
                                            <li><a href="#">US Dollar<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">EUR Euro<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">GBP British Pound<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">JPY Japanese Yen<i class="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li class="page_menu_item"> <a href="/">Home<i class="fa fa-angle-down"></i></a> </li>
                                    <li class="page_menu_item has-children"> <a href="#">Super Deals<i class="fa fa-angle-down"></i></a>
                                        <ul class="page_menu_selection">
                                            <li><a href="#">Super Deals<i class="fa fa-angle-down"></i></a></li>
                                            <li class="page_menu_item has-children"> <a href="#">Menu Item<i class="fa fa-angle-down"></i></a>
                                                <ul class="page_menu_selection">
                                                    <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li class="page_menu_item has-children"> <a href="#">Featured Brands<i class="fa fa-angle-down"></i></a>
                                        <ul class="page_menu_selection">
                                            <li><a href="#">Featured Brands<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li class="page_menu_item has-children"> <a href="#">Trending Styles<i class="fa fa-angle-down"></i></a>
                                        <ul class="page_menu_selection">
                                            <li><a href="#">Trending Styles<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li class="page_menu_item"><a href="/blog">blog<i class="fa fa-angle-down"></i></a></li>
                                    <li class="page_menu_item"><a href="/contact">contact<i class="fa fa-angle-down"></i></a></li>
                                </ul>
                                <div class="menu_contact">
                                    <div class="menu_contact_item">
                                        <div class="menu_contact_icon"><img src="images/phone_white.png" alt=""></img></div>+38 068 005 3570
                                    </div>
                                    <div class="menu_contact_item">
                                        <div class="menu_contact_icon"><img src="images/mail_white.png" alt=""></img></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </div>

    <section class="Material-contact-section section-padding ">
      <div class="container">
          <div class="row">
              <div class="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
                  <h1 class="section-title">Love to Hear From You</h1>
              </div>
          </div>
          <div class="row">
              <div class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content.</p>

                <div class="find-widget">
                 Company:  <a href="https://hostriver.ro">HostRiver</a>
                </div>
                <div class="find-widget">
                 Address: <a href="#">4435 Berkshire Circle Knoxville</a>
                </div>
                <div class="find-widget">
                  Phone:  <a href="#">+ 879-890-9767</a>
                </div>
                
                <div class="find-widget">
                  Website:  <a href="https://uny.ro">www.uny.ro</a>
                </div>
                <div class="find-widget">
                   Program: <a href="#">Mon to Sat: 09:30 AM - 10.30 PM</a>
                </div>
              </div>
              <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                  <form class="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                      <div class="form-group label-floating">
                        <label class="control-label" for="name">Name</label>
                        <input class="form-control" id="name" type="text" name="name" required data-error="Please enter your name"/>
                        <div class="help-block with-errors"></div>
                      </div>
                      <div class="form-group label-floating">
                        <label class="control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="email" name="email" required data-error="Please enter your Email"/>
                        <div class="help-block with-errors"></div>
                      </div>
                      <div class="form-group label-floating">
                        <label class="control-label">Subject</label>
                        <input class="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject"/>
                        <div class="help-block with-errors"></div>
                      </div>
                      <div class="form-group label-floating">
                          <label for="message" class="control-label">Message</label>
                          <textarea class="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                          <div class="help-block with-errors"></div>
                      </div>
                      <div class="form-submit mt-5">
                          <button class="btn btn-common" type="submit" id="form-submit"><i class="material-icons mdi mdi-message-outline"></i> Send Message</button>
                          <div id="msgSubmit" class="h3 text-center hidden"></div>
                          <div class="clearfix"></div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
    </body>
    );
  }

}

ContactUs.propTypes = {
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
  )(ContactUs));