import React, { Component } from 'react';
import CreateArticleFormContainer from './CreateArticleFormContainer';

class CreateArticlePage extends Component {
  render () {
    return(
      <div>
        <h3>Create New Article</h3>
        <CreateArticleFormContainer />
      </div>
    );
  }
}

export default CreateArticlePage;
