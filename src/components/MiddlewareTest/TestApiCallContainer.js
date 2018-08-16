import { connect } from 'react-redux';

import { clearAPIError } from '../../actions/apiActions';
import { retrieveUsers } from '../../actions/userActions';
import TestApiCall from './TestApiCall';

const mapDispatchToProps = dispatch => {
  return {
    retrieveUsers: () => dispatch(retrieveUsers()),
    clearError: () => dispatch(clearAPIError()),
  };
};

const mapStateToProps = state => {
  const results = state.users.results;
  return {
    results: results,
    error: state.users.error,
    isLoading: state.users.isLoading
  };
};

const TestApiCallContainer = connect(mapStateToProps, mapDispatchToProps)(TestApiCall);

export default TestApiCallContainer;
