import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Articles.scss';

class Articles extends Component {
  componentWillMount() {
    const { user } = this.props;
    if (!user) return null;
    this.props.retrieveArticles(user.id);
  }

  renderArticlesList () {
    const { user } = this.props;
    if (!user) return null;
    const { articles } = this.props;
    if (!articles) return null;

    return articles.map(article => {
      return (
        <Link key={article.id} to={`/users/${user.id}/article/${article.id}`} className={css.articleRow}>{article.title}</Link>
      );
    });
  }

  render () {
    return (
      <div className={css.articles}>
        {this.renderArticlesList()}
      </div>
    );
  }
}

Articles.propTypes = {
  retrieveArticles: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
};

export default Articles;
