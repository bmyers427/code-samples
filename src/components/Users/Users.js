import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Users.scss';

class Users extends Component {
  componentWillMount() {
    this.props.retrieveUsers();
  }

  renderUsersList () {
    const { users } = this.props;
    if (!users) return null;
    return users.map(user => {
      return (
        <Link key={user.id} to={`/users/${user.id}/user-info`} className={css.userRow}>{user.first_name}</Link>
      );
    });
  }

  render () {
    return (
      <div className={css.users}>
        {this.renderUsersList()}
      </div>
    );
  }
}

Users.propTypes = {
  retrieveUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default Users;
