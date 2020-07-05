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

export const loadUser = payload => ({
  type: usersConst.LOAD_USER,
  payload,
});

export const loadUserSuccess = payload => ({
  type: usersConst.LOAD_USER_SUCCESS,
  payload,
});

export const loadUserError = payload => ({
  type: usersConst.LOAD_USER_ERROR,
  payload,
});
