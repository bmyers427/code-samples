import React, { Component } from 'react';

import MainNavigation from '../components/MainNavigation';
import Main from '../components/Main';

import css from './App.scss';

class App extends Component {
  render () {
    return(
      <div className={css.app}>
        <MainNavigation />
        <Main />
      </div>
    );
  }
}

export default App;
