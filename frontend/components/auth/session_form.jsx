import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h3>Please {this.props.formType} or {this.navLink()}</h3>
            {this.renderErrors()}
            <div className="auth-group">
              <input type="text"
                  required
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              <span className="highlight" />
              <span className="bar" />
              <label>Email</label>
            </div>
            <div className="auth-group">
                <input type="password"
                  required
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              <span className="highlight" />
                <span className="bar" />
                <label>Password</label>
            </div>
            <input type="submit" value="Submit" />
            <h3>or</h3>
            <br></br>
          </form>
          <div className="facebook">
            <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true"></div>
          </div>
        </div>
    )
  }
}

export default SessionForm;
