import React, { Component } from 'react';
import ArticleFormContainer from './ArticleFormContainer';

class CreateArticlePage extends Component {
  render () {
    return(
      <div>
        <h3>Create New Article</h3>
        <ArticleFormContainer />
      </div>
    );
  }
}

export default CreateArticlePage;
