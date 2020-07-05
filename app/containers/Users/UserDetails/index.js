import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import User from './component';
import { loadUser } from '../actions';
import injectReducer from '../../../utils/injectReducer';
import injectSaga from '../../../utils/injectSaga';

import * as selectors from '../selectors';
import reducer from '../reducer';
import saga from '../saga';

const mapStateToProps = createStructuredSelector({
  user: selectors.makeSelectUser(),
  loading: selectors.makeSelectUserLoading(),
  error: selectors.makeSelectUserError(),
});

const mapDispatchToProps = dispatch => ({
  loadUser: id => dispatch(loadUser(id)),
});

const withSaga = injectSaga({ key: 'user', saga });
const withReducer = injectReducer({ key: 'user', reducer });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);

export default compose(
  withSaga,
  withReducer,
)(withConnect);
