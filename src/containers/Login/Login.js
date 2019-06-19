import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Heading from '../../components/Heading/Heading';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as actionCreators from '../../store/actions';
import './Login.css';
import { validateEmail, validatePassword } from '../../Helpers/Helpers';

class Login extends Component {

    state = {
        email: '',
        password: '',
        isEmailValid: true,
        isPasswordValid: true,
        redirectToEmployee: null
    };

    componentDidUpdate(prevProps) {
        if (this.props.isAuthenticated) {
            this.setState({
                email: '',
                password: '',
                redirectToEmployee: <Redirect to="/" />
            });
        }
    };

    inputChangeHandler = (event) => {
        const element = event.target.name;
        this.setState({
            [event.target.name]: event.target.value,
            isEmailValid: element === 'email' ? validateEmail(event.target.value) : this.state.isEmailValid,
            isPasswordValid: element === 'password' ? validatePassword(event.target.value) : this.state.isPasswordValid
        });

        this.props.isLoginFailed && this.props.onResetLoginFailFlag();
    };

    formValidate = (event) => {
        const element = event.target.name;
        this.setState({
            isEmailValid: element === 'email' ? validateEmail(event.target.value) : this.state.isEmailValid,
            isPasswordValid: element === 'password' ? validatePassword(event.target.value) : this.state.isPasswordValid
        });
    };

    loginSubmitHandler = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let password = this.state.password;

        if (validateEmail(this.state.email) && validatePassword(this.state.password)) {
            this.props.onLogin(this.state.email, this.state.password);
        }

        this.setState({
            email,
            password,
            isEmailValid: validateEmail(this.state.email),
            isPasswordValid: validatePassword(this.state.password)
        });
    };

    render() {
        return (
            <div className="login-wrapper col-md-4 offset-2 mt-5">
                {this.state.redirectToEmployee}
                <Heading heading="Login" />
                <LoginForm
                    inputChangeHandler={(event) => this.inputChangeHandler(event)}
                    loginSubmitHandler={(event) => this.loginSubmitHandler(event)}
                    formValidate={(event) => this.formValidate(event)}
                    isEmailValid={this.state.isEmailValid}
                    isPasswordValid={this.state.isPasswordValid}
                    email={this.state.email}
                    password={this.state.password} />
                {this.props.isLoginFailed && <div className="alert alert-danger">Username or Password is incorrect !!</div>}
            </div>
        );
    };
};


const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated,
    isLoginFailed: state.login.isLoginFailed
});

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password) => dispatch(actionCreators.login(email, password)),
        onResetLoginFailFlag: () => dispatch(actionCreators.resetLoginFailFlag())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
