import React, { Component } from 'react';

import './Login.css';
import twitterLogo from '../twitter.svg';

export default class Login extends Component {
    state = {
        username: '',
    };

    handleSubmit = e => {
        this.setState({ username: e.target.value });
    }

    handleInputChange = e => {
        this.setState({ username: e.target.value });
    }

    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="GoTwitter" />
                <form onSubmit={ this.handleSubmit }>
                    <input
                        placeholder="Nome de usuário"
                        onChange={ this.handleInputChange } 
                        value={ this.state.username }/>
                    <button type="submit"> Entrar </button>
                </form>
            </div>
        );
    }
}
