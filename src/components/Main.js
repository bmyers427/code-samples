import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import MiddlewareTest from './MiddlewareTest/MiddlewareTest';
import UpdateUserPage from './Users/UpdateUserPage';
import UsersPage from './Users/UsersPage';
import CreateUserPage from './CreateUser/CreateUserPage';
import CreateUserSuccessPage from './CreateUser/CreateUserSuccessPage';
import UserInfoPage from './Users/UserInfoPage';
import CreateArticlePage from './Articles/CreateArticlePage';

class Main extends Component {
  render () {
    return(
      <div>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/api-middleware' component={MiddlewareTest}/>
          <Route exact path='/users/:userId/edit' component={UpdateUserPage}/>
          <Route exact path='/users/:userId/user-info' component={UserInfoPage}/>
          <Route exact path='/users' component={UsersPage}/>
          <Route exact path='/sign-up' component={CreateUserPage}/>
          <Route exact path='/sign-up/:userId/success' component={CreateUserSuccessPage}/>
          <Route exact path='/users/:userId/new-article' component={CreateArticlePage}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
