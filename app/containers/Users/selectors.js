/**
 * UsersList selectors
 */

import { createSelector } from 'reselect';

export const usersStateSelector = ({ users }) => users;
export const userStateSelector = ({ user }) => user;

export const makeSelectUsers = () =>
  createSelector(
    usersStateSelector,
    ({ users }) => users.data,
  );

export const makeSelectLoading = () =>
  createSelector(
    usersStateSelector,
    ({ users }) => users.loading,
  );

export const makeSelectError = () =>
  createSelector(
    usersStateSelector,
    ({ users }) => users.error,
  );

export const makeSelectUser = () =>
  createSelector(
    userStateSelector,
    ({ user }) => user.data,
  );

export const makeSelectUserLoading = () =>
  createSelector(
    userStateSelector,
    ({ user }) => user.loading,
  );

export const makeSelectUserError = () =>
  createSelector(
    userStateSelector,
    ({ user }) => user.error,
  );
