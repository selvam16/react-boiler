import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaUserCheck, FaWalking } from 'react-icons/fa';

const UserDetails = ({ match, user, loadUser }) => {
  useEffect(() => {
    loadUser(match.params.id);
  }, []);
  return (
    <div>
      <h1>User Details</h1>
      {user && (
        <div className="card">
          <img src={user.avatar_url} alt={user.avatar_url} />
          <div className="container">
            <h4>
              <b>{user.name}</b>
            </h4>
            <p>{user.login}</p>
            <p>{user.location}</p>
            <p>{user.blog}</p>
            <p>{user.company}</p>
            <span>
              <span>
                <FaUserCheck size={48} style={{ color: '#007bff' }} />
                <span className="badge badge-primary">{user.followers}</span>
              </span>
              <span>
                <FaWalking size={40} style={{ color: '#28a745' }} />
                <span className="badge badge-success">{user.following}</span>
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

UserDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  loadUser: PropTypes.func.isRequired,
};

export default UserDetails;
