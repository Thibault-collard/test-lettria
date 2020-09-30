import React, { Component } from "react";
import store from '../store/store';
import { connect } from "react-redux";
import { updateInfoProfil } from "../actions/authActions";
import  {  AppStyle  }  from  "../app.style";

class UpdateProfil extends Component {
  constructor() {
		super();
	 	this.state = {
			first_name: store.getState().auth.user.user.profile.firstName,
	 		last_name: store.getState().auth.user.user.profile.lastName,
			email: store.getState().auth.user.user.email,
			user: JSON.stringify(store.getState().auth.user) 
		}
		this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
	}

  onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
  };
  
  onSubmit = (e) =>{
		e.preventDefault();
		
    const userData = {
			firstName: this.state.first_name,
			lastName:this.state.last_name,
		};
		
		this.props.updateInfoProfil(userData)
	};
	
	componentWillReceiveProps () {
		//console.log(nextProps.auth.user)
		this.setState({ user: JSON.stringify(store.getState().auth.user) });
	}
		 
  render() {
    return (
      <AppStyle> 
				<div className="container wave-box-wrapper">
				<div className="wave-box" />
				<form onSubmit={this.onSubmit}>
					<div className="col-md-10 col-md-offset-1">
						<div className="panel panel-default">
							<div className="panel-label">Profil</div>
							<div className="panel-body">
								<div className="form-group clearfix">
									<label className="col-md-4 control-label text-right">First Name:</label>
									<div className="col-md-6">
										<input type="first_name" id="first_name"  onChange={this.onChange} value={this.state.first_name} placeholder={this.state.first_name} className="form-control" />
									</div>
								</div>
								<div className="form-group clearfix">
									<label className="col-md-4 control-label text-right">Last Name:</label>
									<div className="col-md-6">
										<input type="last_name" id="last_name" onChange={this.onChange} value={this.state.last_name} placeholder={this.state.last_name} className="form-control" />
									</div>
								</div>
								<div className="col-md-6 col-md-offset-4">
									<input type="submit" defaultValue="Update" className="btn update-account" />
								</div>
								<div className="box-data">{this.state.user}</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			</AppStyle>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
	mapStateToProps,
	{updateInfoProfil}
)(UpdateProfil);