import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Review.css';

class Block extends Component {

  render(){
    const reviews = [...Array(3).keys()].map(i  => ({
      id: i,
      img: 'http://the-edit.co.kr/wp-content/uploads/2018/07/batch_IMG_4930.jpg',
      title: '<목소리를 드릴게요>를 읽고 적는 감상평',
    }));

    const ReviewList = reviews.map((review) => (
      <div key={review['id']} className="post">
        <Link to={`/review/목소리를 드릴게요`}>
          <img src={review['img']} />
        </Link>
        <Link to={`/review/목소리를 드릴게요`}>
          <h4 className="title">{review['title']}</h4>
        </Link>
      </div>
    ));

    return (
      <>
      <div className="review_block_container">
        <div className="review_block">
          <h3>재미있게 읽은 #목소리를드릴게요 의 다른 감상들</h3>
          <div className="three_posts">
            { ReviewList }
          </div>
        </div>
      </div>
      </>
    );
  }

};

export default Block;
