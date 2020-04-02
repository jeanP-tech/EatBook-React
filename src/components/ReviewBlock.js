import React from "react";
import { Link } from 'react-router-dom';
import '../css/Review.css';

const Block = () => {
  const reviews = [...Array(3).keys()].map(i  => ({
    id: i,
    img: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/e35/65609028_1505823949557205_2887562207296034126_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=9cdR0Ce9TD0AX_KY9in&oh=a0978f8576a8b6ba5ec559c29c6b2017&oe=5E9AA58E',
    title: '<목소리를 드릴게요>를 읽고 적는 감상평',
  }));

  const ReviewList = reviews.map((review) => (
    <div key={review['id']} className="post">
      <img src={review['img']} />
      <Link to={`/review/목소리를 드릴게요`}>
        <h4 className="title">{review['title']}</h4>
      </Link>
    </div>
  ));

  return (
    <>
    <div className="review_container">
      <div className="review_block">
        <h3>재미있게 읽은 #목소리를드릴게요 의 다른 감상들</h3>
        <div className="three_posts">
          {ReviewList}
        </div>
      </div>
    </div>
    </>
  );
};

export default Block;
