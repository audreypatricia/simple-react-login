import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = { username:'', password: '', submitDisabled: true};
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event){
      this.setState({
        [event.target.name]: event.target.value
      });

      if(this.state.username.length !== '' && this.state.password.length !== ''){
        this.setState({ submitDisabled: false});
      }else {
        this.setState({ submitDisabled: true});
      }
    }

  _handleSubmit (e){
    e.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={ this._handleSubmit }>
          <input id="username-input" type="text" name="username" placeholder="username" value={this.state.username} onChange={this._handleChange} required/>

          <input id="password-input" type="password" name="password" placeholder="password" value={this.state.password} onChange={this._handleChange} required/>

          <button id="login-button" type="submit" disabled={this.state.submitDisabled}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
