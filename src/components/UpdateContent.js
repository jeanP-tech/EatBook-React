import React, { Component } from 'react';
import '../css/DetailEdit.css';

class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      img: this.props.data.img,
      title: this.props.data.title,
      author: this.props.data.author,
      rating: this.props.data.rating,
      date: this.props.data.date,
      comment: this.props.data.comment
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
      <div>
        <div className="edit_container">
          <div className="edit_info">
            <img src={this.state.img} />
            <div className="edit_list">
              <form action="/library/목소리를 드릴게요" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(
                    this.state.img,
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
                    className="title"
                  />
                  <input
                    name="author"
                    placeholder="작가"
                    value={this.state.author}
                    onChange={this.handleChange}
                    className="author"
                  />
                  <select value={this.state.rating} onChange={this.handleChangeValue}>
                    <option value="five">🌟🌟🌟🌟🌟</option>
                    <option value="four">🌟🌟🌟🌟</option>
                    <option value="three">🌟🌟🌟</option>
                    <option value="two">🌟🌟</option>
                    <option value="one">🌟</option>
                  </select>
                  <input
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                    className="date"
                  />
                  <textarea
                    name="comment"
                    placeholder="한줄평"
                    value={this.state.comment}
                    onChange={this.handleChange}
                    className="comment"
                  />
                <button type="submit">완료</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UpdateContent;
