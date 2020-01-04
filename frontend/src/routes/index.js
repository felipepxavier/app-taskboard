import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Forgot from '../pages/Forgot';

import Dashboard from '../pages/Dashboard';
import EditTask from '../pages/Dashboard/EditTask';

import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/forgot" component={Forgot} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path='/edit-task/:id' component={EditTask} isPrivate />

      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={() => <h1>Error 404</h1>} />
    </Switch>
  );
}
