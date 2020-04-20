import React, { Component } from 'react';
import Control from './Control';
import LibraryBookReview from '../components/library/LibraryBookReview';
import { Link } from 'react-router-dom';

class ReadContent extends Component {

  render () {

    return (
      <React.Fragment>
        <div className="info_container">
          <div className="detail_info">
            <img src={this.props.content.img} className="library_cover"/>
            <div className="info_list">
              <ul>
                <li className="title">{this.props.content.title}</li>
                <li>{this.props.content.author}</li>
                <li>{this.props.content.rating}</li>
                <li>{this.props.content.date}</li>
                <li className="comment">{this.props.content.comment}</li>
              </ul>
            </div>
            <p className="hashtag">{this.props.content.hashtag}</p>
          </div>
        </div>
        <LibraryBookReview />
      </React.Fragment>
    );
  }
}

export default ReadContent;
