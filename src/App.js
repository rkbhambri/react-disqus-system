import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
// import { Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Switch>
					<Route path='/home' exact component={Home} />
					<Route path="/login" exact component={Layout} />
					<Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.login.isAuthenticated
});

export default connect(mapStateToProps, null)(App);
