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
import GlobalStyle from '../../global-styles';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/users" component={Users} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
