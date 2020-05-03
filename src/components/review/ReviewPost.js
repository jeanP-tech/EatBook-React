import React, { Component } from 'react';

class ReviewPost extends Component {

  render () {

    return (
      <React.Fragment>
        <div className="review_detail_container">
          <div className="review_detail">
            <h3>{this.props.contents.title}</h3>
            <div className="review_img"> <img src={this.props.contents.img} alt="review image"/> </div>
            <div className="description">{this.props.contents.description}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ReviewPost;
