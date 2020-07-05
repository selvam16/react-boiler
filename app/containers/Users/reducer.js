import * as usersConst from './constants';

// initial state
const initialState = {
  loading: false,
  error: null,
  data: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case usersConst.LOAD_USERS:
      return Object.assign({}, state, {
        loading: true,
      });
    case usersConst.LOAD_USERS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: payload,
      });
    case usersConst.LOAD_USERS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: payload,
      });
    default:
      return state;
  }
}

export default reducer;
