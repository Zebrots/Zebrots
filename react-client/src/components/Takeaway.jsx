import React from 'react';

const Takeaway = ({takeaway}) => (
  <div className="takeaway mdl-list__item mdl-list__item--three-line" >
    <span className="mdl-list__item-primary-content">
      <i className="material-icons mdl-list__item-avatar">Collaborators:</i>
      <span> {takeaway.usernameQ + ', ' + takeaway.usernameA}</span>
      <span className="mdl-list__item-text-body">
        <div><strong>Date:</strong>                 {takeaway.date}</div>
        <div><strong>What we investigated:</strong> {takeaway.topic}</div>
        <div><strong>What we learned:</strong>      {takeaway.takeaway}</div>
      </span>

    </span>
  </div>
);

export default Takeaway;
