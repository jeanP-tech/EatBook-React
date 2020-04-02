import React from "react";
import { Link } from 'react-router-dom';

const Item = props => {
  return (
    <div className="book">
      <img src={props.thumbnail} alt={props.thumbnail} />
      <div className="book_info">
        <li>{props.title}</li>
        <li>{props.authors}</li>
      </div>
    </div>
  );
};

export default Item;
