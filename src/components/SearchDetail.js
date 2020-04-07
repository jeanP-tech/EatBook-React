import React from "react";
import { withRouter } from 'react-router-dom';
import '../css/DetailPage.css';

const SearchDetail = ({location}) => {
  const book = location.state

  return (
    <div className="info_container">
      <div className="detail_info">
        <img src={book.thumbnail} className="search_cover" />
        <div className="info_list">
          <ul>
            <li className="title">{book.title}</li>
            <li>{book.authors}</li>
            <li>{book.publisher}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchDetail);
