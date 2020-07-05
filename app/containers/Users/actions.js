import * as usersConst from './constants';

export const loadUsers = () => ({
  type: usersConst.LOAD_USERS,
});

export const loadUsersSuccess = payload => ({
  type: usersConst.LOAD_USERS_SUCCESS,
  payload,
});

export const loadUsersError = payload => ({
  type: usersConst.LOAD_USERS_ERROR,
  payload,
});
