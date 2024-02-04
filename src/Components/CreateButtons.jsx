
import React from 'react';

export const CreateButtons = ({ numbers, handleNumberClick }) => {
  return (
    <div className='row'>
      {numbers.map((number, index) => (
        <button
          key={index}
          className='col m-2 btn btn-outline-success'
          onClick={() => handleNumberClick(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};
