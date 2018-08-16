import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { deleteUser } from '../../actions/userActions';
import { getUser, userError } from '../../selectors/userSelectors';
import UserInfo from './UserInfo';

// mapStatetoProps gets state and ownProps
const mapStateToProps = (state, ownProps) => {
  const user = getUser(state, ownProps.match.params.userId);
  return {
    user,
    userError: userError(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteUser: () => dispatch(deleteUser(ownProps.match.params.userId))
    .then(() => {
      ownProps.history.push('/users');
    })
  };
};

const UserInfoContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(UserInfo);

export default UserInfoContainer;
