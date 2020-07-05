/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Users from 'containers/Users';
import UserDetails from 'containers/Users/UserDetails';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/user/:id" component={UserDetails} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
