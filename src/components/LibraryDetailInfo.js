import React from 'react';
import '../css/DetailPage.css';

const LibraryDetailInfo = () => {
  const book = {
    title: '목소리를 드릴게요',
    img: 'http://static.news.zumst.com/images/1/2019/12/27/b50851f9784645f7bde58324e1146bfe.jpg',
    author: '정세랑',
    rating: '🌟🌟🌟🌟',
    date: '2020.3.8 - 3.11',
    comment: '정세랑 작가의 신작 SF 단편소설집이다.',
    hashtag: '#한국소설#정세랑#SF#단편소설'
  };

  return (
    <div className="info_container">
      <div className="detail_info">
        <img src={book['img']} className="library_cover"/>
        <div className="info_list">
          <ul>
            <li className="title">{book['title']}</li>
            <li>{book['author']}</li>
            <li>{book['rating']}</li>
            <li>{book['date']}</li>
            <li className="comment">{book['comment']}</li>
          </ul>
        </div>
        <p className="hashtag">{book['hashtag']}</p>
      </div>
    </div>
  );
};

export default LibraryDetailInfo;
