import React from 'react';
import "../css/BookList.css";
import { Link } from 'react-router-dom';

const ReadList = () => {
  const books = [...Array(30).keys()].map(i  => ({
    id: i,
    title: '목소리를 드릴게요',
    author: '정세랑',
    img: 'https://lh3.googleusercontent.com/proxy/nYQztoDnDgRJ8plqx9U1pQmJ2Wh3FpZMfbz4P2iGbPwPIX3MCyk_2Xi2L-cAbS7bu4QFJNh9A8uTVufPB_jLJgkKVg',
    date: '2020.3.8 - 3.11',
    rating: '🌟🌟🌟🌟',
  }));

  const BookList = books.map((book) => (
    <div key={book['id']} className="book">
      <Link to={`/library/목소리를 드릴게요`}>
        <img src={book['img']} />
      </Link>
      <div className="book_info">
        <li>
          <Link to={`/library/목소리를 드릴게요`}>
            {book['title']}
          </Link>
        </li>
        <li>{book['author']}</li>
        <li>{book['date']}</li>
        <li>{book['rating']}</li>
      </div>
    </div>
  ));

  return (
    <div className="book_container">
      <div className="book_list">
        {BookList}
      </div>
    </div>
  );
};

export default ReadList;
