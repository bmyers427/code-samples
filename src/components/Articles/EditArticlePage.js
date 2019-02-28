import React, { Component } from 'react';
import ArticleFormContainer from './ArticleFormContainer';

class EditArticlePage extends Component {
  render () {
    return(
      <div>
        <h3>Edit/Delete Article</h3>
        <ArticleFormContainer />
      </div>
    );
  }
}

export default EditArticlePage;
