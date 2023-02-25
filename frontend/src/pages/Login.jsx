import React from 'react';
import { Link } from 'react-router-dom';
<head>
    <script src="login.js"></script>
    <link rel="stylesheet" href="login.css"/>
</head>


export default class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  } 
  
  handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val
    });
  }  
  
  handleLogin (e) {
    e.preventDefault();
    // Login implementation which binds to the form data
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <label>Username</label><br/>
          <input type="text" name="username" onChange={this.handleChange}/>
          <br /><br />
          <label>Password</label><br/>
          <input type="password" name="password" onChange={this.handleChange}/>
          <br /><br />
          <Link to="/home">
            <button type="submit">Login</button>
          </Link>
        </form>
      </div>
    );
  }
}

