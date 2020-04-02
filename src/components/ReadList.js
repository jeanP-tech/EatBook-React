import React from 'react';
import "../css/Main.css";

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
      <img src={book['img']} />
      <div className="book_info">
        <li>{book['title']}</li>
        <li>{book['author']}</li>
        <li>{book['date']}</li>
        <li>{book['rating']}</li>
      </div>
    </div>
    // <div key={book['id']}>{book['title']}</div>
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
