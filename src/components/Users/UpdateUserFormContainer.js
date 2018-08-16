import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import { updateUser, retrieveUsers } from '../../actions/userActions';
import { getUser, userError } from '../../selectors/userSelectors';
import UpdateUserForm from './UpdateUserForm';

const form = 'Update';

const submit = (dispatch, history) => (values) => {
  dispatch(updateUser(values.id, values))
  .then(() => {
    history.push('/users');
  });
};
// mapStatetoProps gets state and ownProps
const mapStateToProps = (state, ownProps) => {
  const user = getUser(state, ownProps.match.params.userId);
  return {
    initialValues: user,
    userError: userError(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    retrieveUsers: () => dispatch(retrieveUsers()),
    onSubmit: submit(dispatch, ownProps.history)
  };
};

const UpdateUserFormContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form })
)(UpdateUserForm);

export default UpdateUserFormContainer;
