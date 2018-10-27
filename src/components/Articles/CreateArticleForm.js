import React, { Component } from 'react';
import { Field, propTypes as reduxFormPropTypes } from 'redux-form';
import SaveButton from '../Buttons/SaveButton';
import FormField from '../Forms/FormField';
import FormNotification from '../Notifications/FormNotification';
import { required } from '../../validators';
import css from '../Login/LoginForm.scss';

class CreateArticleForm extends Component {
  render () {
    // Redux form props
    const { error, articleError, submitting, submitFailed, handleSubmit } = this.props;
    const errorMessage = (submitFailed && error) || articleError;

    return (
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <Field
          name="title"
          label="Title"
          type="text"
          component={FormField}
          validate={required}
        />
        <Field
          name="tagline"
          label="Tagline"
          type="text"
          component={FormField}
          validate={required}
        />
        <Field
          name="body"
          label="Body"
          type="text"
          component={FormField}
          validate={required}
        />

        {errorMessage && <FormNotification error={errorMessage} />}

        <SaveButton text="Submit" disabled={submitting}/>
      </form>
    );
  }
}

CreateArticleForm.propTypes = {
  ...reduxFormPropTypes
};

export default CreateArticleForm;
