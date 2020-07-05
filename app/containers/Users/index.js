import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import Users from './component';
import { loadUsers } from './actions';

import reducer from './reducer';
import saga from './saga';
import {
  makeSelectLoading,
  makeSelectUsers,
  makeSelectError,
} from './selectors';

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  loadUsers: () => dispatch(loadUsers()),
});

const withSaga = injectSaga({ key: 'users', saga });
const withReducer = injectReducer({ key: 'users', reducer });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);

export default compose(
  withSaga,
  withReducer,
)(withConnect);
