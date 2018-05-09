import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import FontAwesome from 'react-fontawesome';
import css from './Notification.scss';

class Notification extends Component {
  render () {
    const { error, clearError } = this.props;
    if (error) {
      return (
        <div className={css.alert} role="alert">
          <div className={css.iconContainer} onClick={clearError} >
            <FontAwesome name="rocket" className={css.icon}/>
          </div>
          <div className={css.text}>{error}</div>
        </div>
      );
    } else return null;
  }
}

Notification.propTypes = {
  error: PropTypes.string,
  clearError: PropTypes.func.isRequired
};

export default Notification;
