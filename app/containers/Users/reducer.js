import * as usersConst from './constants';

// initial state
const initialState = {
  users: {
    loading: false,
    error: null,
    data: [],
  },
  user: {
    loading: false,
    error: null,
    data: {
      login: 'tes',
      following: 6,
      followers: 10,
    },
  },
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case usersConst.LOAD_USERS:
      return Object.assign({}, state, {
        ...state,
        users: {
          loading: true,
        },
      });
    case usersConst.LOAD_USERS_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        users: {
          loading: false,
          data: payload,
        },
      });
    case usersConst.LOAD_USERS_ERROR:
      return Object.assign({}, state, {
        ...state,
        users: {
          loading: false,
          error: payload,
        },
      });
    case usersConst.LOAD_USER:
      return Object.assign({}, state, {
        ...state,
        user: {
          loading: true,
          id: payload,
        },
      });
    case usersConst.LOAD_USER_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        user: {
          loading: false,
          data: payload,
        },
      });
    case usersConst.LOAD_USER_ERROR:
      return Object.assign({}, state, {
        ...state,
        user: {
          loading: false,
          error: payload,
        },
      });
    default:
      return state;
  }
}

export default reducer;
