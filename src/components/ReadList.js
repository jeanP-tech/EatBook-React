import React from 'react';
import "../css/BookList.css";
import { Link } from 'react-router-dom';

const ReadList = ()  => {
  const books = [...Array(12).keys()].map(i  => ({
    id: i + 1,
    title: '목소리를 드릴게요',
    author: '정세랑',
    img: 'http://static.news.zumst.com/images/1/2019/12/27/b50851f9784645f7bde58324e1146bfe.jpg',
    date: '2020.3.8 - 3.11',
    rating: '🌟🌟🌟🌟',
  }));

  const BookList = books.map((book) => (
    <div key={book['id']} className="book">
      <Link to={`/library/목소리를 드릴게요`}>
        <div className="readlist_cover">
          <img src={book['img']} alt="book list cover"/>
        </div>
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
