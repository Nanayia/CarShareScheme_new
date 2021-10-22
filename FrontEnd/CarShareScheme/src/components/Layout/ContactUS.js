import React, { Component } from 'react'
import { getUser } from "../../actions/userActions";
import store from "../../store"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import Header from "./Header";
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

        const link5 = document.createElement("link")
        link5.rel="stylesheet"
        link5.href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
        document.body.appendChild(link5)

      }
  render() {
    return (
        <body>
<div class="super_container">
<Header />
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
                 Company:  <a href="https://hostriver.ro">GROUP 6</a>
                </div>
                <div class="find-widget">
                 Address: <a href="#">xxxxxxx</a>
                </div>
                <div class="find-widget">
                  Phone:  <a href="#">+ 888-888-8888</a>
                </div>
                
                <div class="find-widget">
                  Website:  <a href="https://uny.ro">www.xxxxxxx.ro</a>
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