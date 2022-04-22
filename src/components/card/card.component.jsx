import React from 'react';
import './card.styles.css';
export const Card = (props) => {
  const {name,email,id} = props.monster;
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=210x210`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
