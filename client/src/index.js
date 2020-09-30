import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import store from "./store/store";
import UpdateProfil from './components/Profil'
import PrivateRoute from "./components/private-route/PrivateRoute";

ReactDOM.render(
	<div>
		<Provider store={store}>
		<BrowserRouter>
			<Route exact path="/" component={Login} />
				<Switch>
          <PrivateRoute exact path="/user/profil" component={UpdateProfil} />
        </Switch>
		</BrowserRouter>
	</Provider>
</div>
,document.getElementById('root'));

registerServiceWorker();


