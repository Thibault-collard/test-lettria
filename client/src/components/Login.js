import React, { Component } from 'react';
import { loginUser } from "../actions/authActions";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import  {  AppStyle  }  from  "../app.style";
class Login extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            email: "",
            password: "",
            token: "",
        };
    } //end constructor

    componentDidMount() {
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }; //end change

    onSubmit = (e) =>{
        const userData = {
            email: this.state.email,
            password: this.state.password
          };

        this.props.loginUser(userData, this.props.history)

        e.preventDefault();
        console.log(this.state);
        this.setState({
             email: "",
             password: "",
            });
        };

    render() {
    console.log(this.state.data);
        return (
            <AppStyle> 
           <div className="container-box">
                <div className="login-box">
                <img className="home-logo" alt="" src={require('../pictures/logo.png')}></img>
                    <form>
                            <input
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={e => this.change(e) }
                            className="form-control"
                            />  <br />

                            <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={e => this.change(e) }
                            className="form-control"
                            />  <br />

                        <button onClick={e => this.onSubmit(e)} className="btn btn-primary">Login</button>
                        </form>
                    </div>
            </div>
            </AppStyle>
        );
      }
}

const mapStateToProps = state => ({
    user: state.data
  });

export default connect(
    mapStateToProps,
    { loginUser }
  )(withRouter(Login));