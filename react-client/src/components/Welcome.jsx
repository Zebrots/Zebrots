import React from 'react';

const Welcome = ({session}) => (
  <div>
    <h3>Welcome {session.handle}</h3>
  </div>
);
export default Welcome;
