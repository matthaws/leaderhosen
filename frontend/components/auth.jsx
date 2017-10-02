import React from 'react';

const handleLogin = (e) => {
  e.preventDefault();

}

const AuthForm = (props) => {
  return (
    <div className="auth-form">
      <form>
        <input type="text" />
        <input type="password" />
        <input type="submit" value="Log In" />

        <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true"></div>
      </form>
    </div>
  )
}
