import React from 'react';

const book = (props) => {
  return (
    <div className="Book">
      <p>Author: <b>{props.author}</b></p>
      <button onClick={props.click}>Show books</button> <button onClick={props.addBook}>+</button> <br/><br/>
      <input type="text" value={props.book} onChange={props.changeBook} id=""/> <br/><br/>
    </div>
  )
}

export default book;