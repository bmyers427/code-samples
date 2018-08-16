import React, { Component } from 'react';
import { Field, propTypes as reduxFormPropTypes } from 'redux-form';
import SaveButton from '../Buttons/SaveButton';
import FormField from '../Forms/FormField';
import FormNotification from '../Notifications/FormNotification';
import { required } from '../../validators';
import css from '../Login/LoginForm.scss';

class UpdateUserForm extends Component {
  componentWillMount() {
    this.props.retrieveUsers();
  }

  render () {
    // Redux form props
    const { error, submitting, submitFailed, handleSubmit } = this.props;
    // Props from mapState and mapDispatch in ChangeFormContainer
    const { userError } = this.props;
    const errorMessage = (submitFailed && error) || userError;

    return (
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <Field
          name="first_name"
          label="First"
          type="text"
          component={FormField}
          validate={required}
        />
        <Field
          name="last_name"
          label="Last"
          type="text"
          component={FormField}
          validate={required}
        />

        <Field
          name="email"
          label="Email"
          type="email"
          component={FormField}
          validate={required}
        />

        {errorMessage && <FormNotification error={errorMessage} />}

        <SaveButton text="Submit" disabled={submitting}/>
      </form>
    );
  }
}

UpdateUserForm.propTypes = {
  ...reduxFormPropTypes
};

export default UpdateUserForm;
