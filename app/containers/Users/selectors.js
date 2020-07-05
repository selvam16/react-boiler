/**
 * UsersList selectors
 */

import { createSelector } from 'reselect';

export const usersStateSelector = ({ users }) => users;

export const makeSelectUsers = () =>
  createSelector(
    usersStateSelector,
    ({ data }) => data,
  );

export const makeSelectLoading = () =>
  createSelector(
    usersStateSelector,
    ({ loading }) => loading,
  );

export const makeSelectError = () =>
  createSelector(
    usersStateSelector,
    ({ error }) => error,
  );
