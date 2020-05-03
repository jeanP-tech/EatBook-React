import React, { Component } from 'react';

class DetailInfo extends Component {

  render () {

    return (
      <React.Fragment>
        <div className="info_container">
          <div className="detail_info">
            <div className="book_img">
              <img src={this.props.content.img} alt="cover image" className="library_cover"/>
            </div>
            <div className="info_list">
              <ul>
                <li className="title">{this.props.content.title}</li>
                <li>{this.props.content.author}</li>
                <li>{this.props.content.rating}</li>
                <li>{this.props.content.date}</li>
                <li className="comment">{this.props.content.comment}</li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailInfo;
