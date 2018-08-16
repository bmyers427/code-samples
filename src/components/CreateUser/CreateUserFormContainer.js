import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import { signUpUser } from '../../actions/userActions';
import { userError } from '../../selectors/userSelectors';
import CreateUserForm from './CreateUserForm';

const form = 'Create';

const validate = values => {
  const errors = {};
  // Password length is configured with devise on backend
  const isCorrectLength = values.password ? values.password.length >= 6 : false;
  const valuesPresent = values.password && values.password_confirmation;
  const passwordsMatch = values.password === values.password_confirmation;

  if (!valuesPresent) errors._error = 'Password and password confirmation are required.';
  if (valuesPresent && !passwordsMatch) errors._error = 'Passwords must match.';
  if (valuesPresent && passwordsMatch && !isCorrectLength) errors._error = 'Password must be 6 characters or greater.';

  return errors;
};


// mapStatetoProps gets state and ownProps
const mapStateToProps = (state) => {
  return {
    userError: userError(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: values => {
      dispatch(signUpUser(values))
      .then(user => ownProps.history.push(`/sign-up/${user.id}/success`));
    }

  };
};

const CreateUserFormContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps ),
  reduxForm({ form, validate })
)(CreateUserForm);

export default CreateUserFormContainer;
