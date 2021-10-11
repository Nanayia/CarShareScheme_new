import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import store from "../../../store";
import { createNewCar } from "../../../actions/carActions";
import HeaderAdmin from './HeaderAdmin';

class NewCar extends Component {

    constructor(props){
        super(props);
        this.state = {
            carName: "",
            carModel: "",
            carColor: "",
            carPrice: "",
            image: "",
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


      onSubmit(e){
        e.preventDefault();
        const newCar = {
            carName: this.state.carName,
            carModel: this.state.carModel,
            carColor: this.state.carColor,
            carPrice: this.state.carPrice,
            image: this.state.image, 
        }
        this.props.createNewCar(newCar,this.props.history)
        
      }

      onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

      Cancelled(e,id){
        e.preventDefault();
        this.props.bookingCancelled(id,this.props.history)
      }

      Return(e,id){
        e.preventDefault();
        this.props.bookingReturn(id,this.props.history)
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
                                Add new car
                            </h3>
                        </div>
                        <form onSubmit={this.onSubmit}>
                        <div class="panel-body">
                            <div class="row">
                               
                                <div style={{marginTop:20, marginLeft:50}} class="col-xs-9 col-sm-9 col-md-9">
                                 <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-log-in"></span></div>
                                      <input name="carName" class="form-control" type="text" placeholder="Car Name" Value={this.state.carName} onChange={this.onChange}/>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-log-in"></span></div>
                                      <input name="carModel" class="form-control" type="text" placeholder="Model" Value={this.state.carModel} onChange={this.onChange}/>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-log-in"></span></div>
                                      <input name="carColor" class="form-control" type="text" placeholder="Color"  Value={this.state.carColor} onChange={this.onChange}/>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-log-in"></span></div>
                                      <input name="carPrice" class="form-control" type="text" placeholder="Price"  Value={this.state.carPrice} onChange={this.onChange}/>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <div class="input-group-addon"><span class="glyphicon glyphicon-log-in"></span></div>
                                      <input name="image" class="form-control" type="text" placeholder="Image"  Value={this.state.image} onChange={this.onChange}/>
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
    NewCar.propTypes = {
        createNewCar: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
        security: PropTypes.object.isRequired
    };
      
    const mapStateToProps = state => ({
        security: state.security,
        errors: state.errors
    });
      
    export default withRouter(connect(
        mapStateToProps,
        {createNewCar}
    )(NewCar));