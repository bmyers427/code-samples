import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { deleteUser } from '../../actions/userActions';
import { getUser, userError } from '../../selectors/userSelectors';
import DeleteButton from './DeleteButton';

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

const DeleteContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(DeleteButton);

export default DeleteContainer;
