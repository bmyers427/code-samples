import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Notification from '../Notifications/Notification';
import PrimaryButton from '../Buttons/PrimaryButton';

class TestApiCall extends Component {
  handleCallApi = () => {
    const { retrieveUsers } = this.props;
    retrieveUsers()
    .then(() => {})
    .catch(() => {});
  }

  render () {
    const { isLoading, error, clearError, results } = this.props; // shorthand so you don't have to do this.isLoading

    return(
      <div>
        <Notification isLoading={isLoading} error={error} clearError={clearError}/>
      {/* above passes in to Notification component */}
        <PrimaryButton
          color="blue"
          disabled={isLoading}
          text="Test Api Call"
          onClick={() => this.handleCallApi()}
        />

      {results && results[0] &&
        <div>
          <h1>{results[0].first_name}</h1>
          <h1>{results[0].last_name}</h1>
          <h1>{results[0].email}</h1>
        </div>
      }

      </div>
    );
  }
}

TestApiCall.propTypes = {
  error: PropTypes.string,
  results: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  clearError: PropTypes.func.isRequired,
  retrieveUsers: PropTypes.func.isRequired
};

export default TestApiCall;
