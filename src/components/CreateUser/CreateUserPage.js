import React, { Component } from 'react';
import CreateUserFormContainer from './CreateUserFormContainer';

class CreateUserPage extends Component {
  render () {
    return(
      <div>
        <h3>Sign Up New User </h3>
        <CreateUserFormContainer />
      </div>
    );
  }
}

export default CreateUserPage;
