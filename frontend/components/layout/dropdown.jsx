import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const DropDown = (props) => {

  return (
    <ul className='dropdown'>
      <li>Dashboard</li>
      <li>Profile</li>
      <li>Groups</li>
      <li><button onClick={props.logout}>Log Out</button></li>
    </ul>
  )
}

export default DropDown;
