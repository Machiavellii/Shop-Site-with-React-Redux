import React, { Component } from 'react';
import { Consumer } from '../../context';

import TextInputGroup from '../common/TextInputGroup';

export class Login extends Component {
  state = {
    username: '',
    password: '',
    errors: {}
  };

  onSubmit = (user, e) => {
    const { username, password } = this.state;
    e.preventDefault();

    if (username === user.username && password === user.password) {
      this.props.history.push('/aadmin=@1222');
    } else {
      this.props.history.push('/login');
    }

    //Check for Errors
    if (username !== user.username) {
      this.setState({ errors: { username: 'Username is wrong' } });
      return;
    }
    if (password !== user.password) {
      this.setState({ errors: { password: 'Password is wrong' } });
      return;
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, password, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { user } = value;
          return (
            <div className="card-body">
              <form onSubmit={this.onSubmit.bind(this, user)}>
                <TextInputGroup
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.onChange}
                  error={errors.username}
                />
                <TextInputGroup
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-dark btn-block"
                />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Login;
