import React from 'react';

const book = (props) => {
  return (
    <div className="Book">
      <p>Author: <b>{props.author}</b></p>
      <button onClick={props.click}>Show books</button>
    </div>
  )
}

export default book;