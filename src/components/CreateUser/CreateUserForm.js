import React, { Component } from 'react';
import { Field, propTypes as reduxFormPropTypes } from 'redux-form';
import SaveButton from '../Buttons/SaveButton';
import FormField from '../Forms/FormField';
import FormNotification from '../Notifications/FormNotification';
import { required } from '../../validators';
import css from '../Login/LoginForm.scss';

class CreateUserForm extends Component {
  render () {
    // Redux form props
    const { error, userError, submitting, submitFailed, handleSubmit } = this.props;
    // Props from mapState and mapDispatch in ChangeFormContainer
    const errorMessage = (submitFailed && error) || userError;

    return (
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <Field
          name="first_name"
          label="First Name"
          type="text"
          component={FormField}
          validate={required}
        />

        <Field
          name="last_name"
          label="Last Name"
          type="text"
          component={FormField}
          validate={required}
        />

        <Field
          name="username"
          label="Username"
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

        <Field
          name="password"
          label="Password"
          type="password"
          component={FormField}
          validate={required}
        />

        <Field
          name="password_confirmation"
          label="Confirm Password"
          type="password"
          component={FormField}
          validate={required}
        />
        {errorMessage && <FormNotification error={errorMessage} />}

        <SaveButton text="Submit" disabled={submitting}/>
      </form>
    );
  }
}

CreateUserForm.propTypes = {
  ...reduxFormPropTypes
};

export default CreateUserForm;
