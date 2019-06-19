
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Body from '../../components/Body/Body';
import * as actionCreators from '../../store/actions';

class Home extends Component {

    state = {
        redirectToLogin: null
    };

    componentDidUpdate(prevProps) {
        if (!this.props.isAuthenticated) {
            this.setState({
                redirectToLogin: <Redirect to="/login" />
            });
        }
    };

    render() {
        return (
            <div className="home col-md-10 offset-1" >
                {this.state.redirectToLogin}
                <Body isAuthenticated={this.props.isAuthenticated} onLogout={() => this.props.onLogout()} />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated
});

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actionCreators.logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

