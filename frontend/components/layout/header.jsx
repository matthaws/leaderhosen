import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Header = (props) => {
  let profile;
  if (props.currentUser) {
    profile = props.currentUser;
  } else {
    profile = (<Link to='/login'>Login!</Link>);
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

export default connect(mapStateToProps)(Header);
