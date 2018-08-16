import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { retrieveUsers } from '../../actions/userActions';
import { getUsers, userError } from '../../selectors/userSelectors';
import Users from './Users';


const mapStateToProps = (state) => {
  const users = getUsers(state);
  return {
    users,
    userError: userError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveUsers: () => dispatch(retrieveUsers()),
  };
};

const UsersContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps ),
)(Users);

export default UsersContainer;
