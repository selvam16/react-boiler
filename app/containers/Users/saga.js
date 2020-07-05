import { put, call, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import * as usersConst from './constants';
import * as actions from './actions';

export function* loadUsers() {
  try {
    const response = yield call(request, 'https://api.github.com/users');
    yield put(actions.loadUsersSuccess(response));
  } catch (error) {
    yield put(actions.loadUsersError(error));
  }
}

export function* loadUser({ payload }) {
  try {
    const response = yield call(
      request,
      `https://api.github.com/user/${payload}`,
    );
    yield put(actions.loadUserSuccess(response));
  } catch (error) {
    yield put(actions.loadUserError(error));
  }
}

export default function* saga() {
  yield takeLatest(usersConst.LOAD_USERS, loadUsers);
  yield takeLatest(usersConst.LOAD_USER, loadUser);
}
