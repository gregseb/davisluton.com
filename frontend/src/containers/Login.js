import React, { Component } from 'react';
import $ from 'jquery';
import { FormGroup, FormControl, ControlLabel, Alert } from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';
import './Login.css';


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            incorrectPassword: false,
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    login(username, password) {
        return new Promise((resolve, reject) =>
            $.ajax({
                url: '/api/auth/login/',
                method: "POST",
                cache: false,
                data: {
                    username: username,
                    password: password,
                },
                success: function(response) {
                    // Store the auth info...
                    localStorage.setItem('site-auth-info', JSON.stringify(response));
                    resolve()
                },
                error: function(xhr, status, err) {
                    reject('/api/auth/login/ ' + status + ' ' + err.toString())
                }
            })
        )
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ isLoading: true });

        //this.login(this.state.username, this.state.password);
        try {
            await this.login(this.state.username, this.state.password);
            this.props.userHasAuthenticated(true);
            this.props.history.push('/');
        } catch (e) {
            console.error(e);
            this.setState({ isLoading: false, incorrectPassword: true });
        }
    }

    render() {
        return(
            <div className="Login">
                { this.state.incorrectPassword
                    ?
                    <Alert bsStyle="warning">
                        <strong>Incorrect username or password!</strong>&nbsp;&nbsp;
                        Please try again.
                    </Alert>
                    :
                    ""
                }
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Login"
                        loadingText="Logging in..."
                    />
                </form>
            </div>
        );
    }
}
