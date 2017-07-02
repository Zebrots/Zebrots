import React from 'react';

const User = ({user}) => (
  <div className="user">
    <div><strong>Name:</strong>  {user.handle}</div>
    <div><strong>Email:</strong>  {user.email}</div>
    <div><strong>Avatar</strong></div>
    <div><img src={user.avatar_url} className="mdl-cell mdl-cell--1-col"/></div>
  </div>
);
export default User;
