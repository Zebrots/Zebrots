import React from 'react';

const Takeaway = ({takeaway}) => (
  <div className="takeaway mdl-list__item mdl-list__item--three-line" >
    <span className="mdl-list__item-primary-content">
      <span> <strong>We investigated:</strong> {takeaway.topic}</span>
      <span className="mdl-list__item-text-body">
        <div><strong>What we learned:</strong>      {takeaway.takeaway}</div>
        <div><strong>Collaborators:</strong> {takeaway.inviter + ', ' + takeaway["collaborator"]}</div>
        <div><strong>Date:</strong>                 {takeaway.date}</div>
      </span>
    </span>
  </div>
);

export default Takeaway;
