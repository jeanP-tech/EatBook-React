import React from 'react';
import '../css/Review.css';

const ReviewPost = () => {
  const review = {
    img: 'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/e35/65609028_1505823949557205_2887562207296034126_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=9cdR0Ce9TD0AX_KY9in&oh=a0978f8576a8b6ba5ec559c29c6b2017&oe=5E9AA58E',
    title: '<목소리를 드릴게요>를 읽고 적는 감상평',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };

  return (
    <>
      <div className="review_detail_container">
        <div className="review_detail">
          <h3>{review['title']}</h3>
          <img src={review['img']} />
          <div>{review['description']}</div>
        </div>
      </div>
    </>
  );
}

export default ReviewPost;
