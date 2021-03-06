import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Users.scss';
import DeleteContainer from './DeleteContainer';
import ArticlesContainer from '../Articles/ArticlesContainer';


class UserInfo extends Component {

  renderUserInfo () {
    const { user } = this.props;
    if (!user) return null;

    return (
      <div>
        <div className={css.userRow}>First Name: {user.first_name}</div>
        <div className={css.userRow}>Last Name: {user.last_name}</div>
        <div className={css.userRow}>User Name: {user.username}</div>
        <div className={css.userRow}>Email: {user.email}</div>
        <Link to={`/users/${user.id}/edit`} className={css.userRow}>Edit</Link>
        <DeleteContainer />
        <h1>Articles</h1>
        <ArticlesContainer/>
        <Link to={`/users/${user.id}/new-article`} className={css.userRow}>New Article</Link>
      </div>
    );
  }

  render () {
    return (
      <div className={css.users}>
        {this.renderUserInfo()}
      </div>
    );
  }
}

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserInfo;
