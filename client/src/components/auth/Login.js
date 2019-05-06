import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

import TextInputGroup from '../common/TextInputGroup';

export class Login extends Component {
  state = {
    username: '',
    password: '',
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/admin');
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/admin');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, password, errors } = this.state;
    return (
      <div className="card-body">
        <form onSubmit={this.onSubmit}>
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
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
