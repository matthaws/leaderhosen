import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';


const Header = (props) => {
  let profile;
  if (props.currentUser.email) {
    profile = <button onClick={props.logout}>Log Out</button>
  } else {
    profile = (<Link className='button' to='/login'>LOGIN</Link>);
  }

  return (
    <header>
      <ul>
        <li></li>
        <li id="logo">Leaderhosen</li>
        <li>{profile}</li>
      </ul>
    </header>
  )
};

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
