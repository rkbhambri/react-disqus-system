import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import login from './store/reducer/login';
/*
 * combining all the reducers
 */
const rootReducer = combineReducers({
	login: login
});

/*
 * composeEnhancers is for chrome dev toolbar which helps us see store management of redux
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
 * Creating Store and applying middleware 
 */
const store = createStore(rootReducer, composeEnhancers());

/*
 * Wrapping the main app with BrowserRouter (provides routing and helps us navigate through project)
 * Provider is a part of Redux which is needed in order to get access to store throughout our project 
 */
const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
