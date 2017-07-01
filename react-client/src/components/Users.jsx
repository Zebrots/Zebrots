import React from 'react';
import User from './User.jsx';

const Users = ({users}) => (
  <div className="mdl-cell mdl-cell--12-col">
    <h4>All Users</h4>
    <div>There are { users.length } users.</div>
    { users.map((userObj, index) => <User user={userObj} key={index} /> )}
  </div>
);

export default Users;
