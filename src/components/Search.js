import React, { useEffect, useState } from "react";
import Item from "./Item";
import { searchBook } from "./SearchApi";
import { withRouter } from 'react-router-dom';
import "../css/Main.css";
import qs from 'qs';

const Search = ({ location }) => {
  const [books, setbooks] = useState([]);

  const query = Object.keys(qs.parse(location.search, {
    ignoreQueryPrefix: true
  }));

  useEffect(() => {
    SearchSubmit(query, true);
  }, []);

  const SearchSubmit = async (text, reset) => {
    const params = {
      query: text,
      sort: "recency",
    };

    const { data } = await searchBook(params);
    if (reset) {
      setbooks(data.documents);
    } else {
      setbooks(books.concat(data.documents));
    }
  };

  return (
    <div>
      <div className="book_container">
        <div className="book_list">
          {books.map((book, index) => (
            <Item
              key={index}
              thumbnail={book.thumbnail}
              title={book.title}
              authors={book.authors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Search);
