import React, {Component, useEffect} from 'react';
import { Switch, withRouter } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Forgot from '../pages/Forgot';

import Dashboard from '../pages/Dashboard';
import TaskModalEdit from '../pages/Dashboard/TaskModalEdit';
import TaskModalDelete from '../pages/Dashboard/TaskModalDelete';

import DashProv from '../pages/DashProv';
import Doing from '../pages/DashProv/Doing';

import Profile from '../pages/Profile';

class Routes extends Component  {

  constructor(props) {
    // console.log(props)
    super(props);
    this.previousLocation = this.props.location;
  }

  UNSAFE_componentWillUpdate() {
    let { location } = this.props;

    if (!(location.state && location.state.modal)) {
      this.previousLocation = location;
    }
  }

  render() {
    const { previousLocation } = this.props;
    const { location } = this.props;

    // console.log(previousLocation);
    const isModal =
      location.state &&
      location.state.modal &&
      this.previousLocation !== location;

    // console.log(isModal);

  return (
    <>
    <Switch location={isModal ? this.previousLocation : location}>
      <Route path="/" exact component={SignIn} />
      <Route path="/forgot" component={Forgot} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      {/* <Route path="/waiting" component={Dashboard} isPrivate /> */}

      <Route path="/dash-prov" component={DashProv} isPrivateProv />
      <Route path="/doing" component={Doing} isPrivateProv />

      <Route path='/edit-task/:id' exact component={TaskModalEdit} isPrivate />
      <Route path='/delete-task/:id' exact component={TaskModalDelete} isPrivate />
      <Route path="/profile" component={Profile} isPrivate isPrivateProv />

      <Route path="/" component={() => <h1>Error 404</h1>} />
    </Switch>

      {isModal
        ? <Route exact path="/edit-task/:id" isPrivate>
            <TaskModalEdit isModal />
          </Route>
        : null
      }

      {isModal
        ? <Route exact path="/delete-task/:id" isPrivate>
            <TaskModalDelete isModal />
          </Route>
        : null
      }
    </>
  );
}
}

export default withRouter(Routes);
