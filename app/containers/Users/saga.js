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

export default function* saga() {
  yield takeLatest(usersConst.LOAD_USERS, loadUsers);
}
