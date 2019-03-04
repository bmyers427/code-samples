import React, { Component } from 'react';
import ArticleFormContainer from './ArticleFormContainer';
import DeleteArticleContainer from './DeleteArticleContainer';


class EditArticlePage extends Component {
  render () {
    return(
      <div>
        <h3>Edit/Delete Article</h3>
        <ArticleFormContainer />
        <DeleteArticleContainer/>
      </div>
    );
  }
}

export default EditArticlePage;
