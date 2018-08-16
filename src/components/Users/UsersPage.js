import React, { Component } from 'react';
import UsersContainer from './UsersContainer';
import css from '../Login/LoginPage.scss';

class UsersPage extends Component {
  render () {
    return (
      <div className={css.loginPage}>
        <h3>Select User to Update </h3>
        <UsersContainer/>
      </div>
    );
  }
}

export default UsersPage;
