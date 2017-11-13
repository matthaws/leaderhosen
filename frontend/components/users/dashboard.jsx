import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({currentUser}) => {
  return (
    <main id="dashboard">
      <h1> Welcome, {currentUser.email}</h1>

      <h3> Your Groups: </h3>
    </main>
  );
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  }
}

export default connect(mapStateToProps)(Dashboard);
