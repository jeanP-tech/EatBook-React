import React from 'react';
import '../css/DetailPage.css';

const LibraryDetailInfo = () => {
  const book = {
    title: '목소리를 드릴게요',
    img: 'https://lh3.googleusercontent.com/proxy/nYQztoDnDgRJ8plqx9U1pQmJ2Wh3FpZMfbz4P2iGbPwPIX3MCyk_2Xi2L-cAbS7bu4QFJNh9A8uTVufPB_jLJgkKVg',
    author: '정세랑',
    rating: '🌟🌟🌟🌟',
    date: '2020.3.8 - 3.11',
    comment: '정세랑 작가의 신작 SF 단편소설집이다.',
    hashtag: '#한국소설#정세랑#SF#단편소설'
  };

  return (
    <>
      <div className="detail_info">
        <img src={book['img']} />
        <div className="info_list">
          <ul>
            <li className="title">{book['title']}</li>
            <li>{book['author']}</li>
            <li>{book['rating']}</li>
            <li>{book['date']}</li>
            <li className="comment">{book['comment']}</li>
          </ul>
        </div>
      </div>
      <p className="hashtag">{book['hashtag']}</p>
    </>
  );
}

export default LibraryDetailInfo;
