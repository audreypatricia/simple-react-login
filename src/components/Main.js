import React, { Component } from 'react';
import Login from './Login';

class Main extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.display = this.display.bind(this);
    this.reset = this.reset.bind(this);
  }

  display(username, password){
    this.setState({
      username: username,
      password: password
    })
  }

  reset(){
    this.setState({
      username: '',
      password: ''
    })
  }

  render(){
    return(
      <div>
        <Login onSubmit={ this.display }/>
        <h2>Your username is: {this.state.username}</h2>
        <h2>Your password is: {this.state.password}</h2>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Main
