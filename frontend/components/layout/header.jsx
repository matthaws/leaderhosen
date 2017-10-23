import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, openDropdown } from '../../actions/session_actions';
import DropDown from './dropdown';

const Header = (props) => {
  let profile;
  if (props.currentUser.email) {
    profile = (<button onClick={props.openDropdown}>Image</button>)
  } else {
    profile = (<Link className='button' to='/login'>LOGIN</Link>);
  }

  let dropdown = null;

  if (props.dropdownOpen) {
    dropdown = <DropDown logout={props.logout} />
  }

  return (
    <header>
      <ul>
        <li></li>
        <li id="logo"><Link to='/'>Leaderhosen</Link></li>
        <li>{profile}</li>
      </ul>
      {dropdown}
    </header>
  )
};

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
    dropdownOpen: session.dropdownOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDropdown: () => dispatch(openDropdown()),
    logout: () => dispatch(logout())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
