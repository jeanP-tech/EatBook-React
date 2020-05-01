import React, { Component } from 'react';

class UpdateReview extends Component {
  constructor(props){
    super(props);
    this.state = {
      img: this.props.contents.img,
      title: this.props.contents.title,
      description: this.props.contents.description
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChangeValue = (e) => {
    this.setState({rating: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
  }

  render(){
    return (
      <React.Fragment>
        <div className="review_detail_container">
          <div className="review_detail">
            <form action="/review/목소리를 드릴게요" method="post"
              onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(
                  this.state.title,
                  this.state.author,
                  this.state.comment
                )
              }.bind(this)}>
                <input
                  name="title"
                  placeholder="제목"
                  value={this.state.title}
                  onChange={this.handleChange}
                  className="update_title"
                />
                <img src={this.state.img} />
                <textarea
                  name="description"
                  placeholder="내용"
                  value={this.state.description}
                  onChange={this.handleChange}
                  className="update_description"
                />
              <button type="submit" className="submit_btn">완료</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default UpdateReview;
