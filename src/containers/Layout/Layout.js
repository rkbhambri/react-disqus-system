import React, { Component } from 'react';
import Login from '../Login/Login';

class Layout extends Component {
    render() {
        return (
            <div className="layout row col-md-9 offset-3 mt-5">
                <Login />
            </div>
        );
    };
};

export default Layout;
