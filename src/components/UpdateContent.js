import React, { Component } from 'react';

class UpdateContent extends Component {
  state = {
    title: '',
    author: '',
    comment: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            placeholder="제목"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="author"
            placeholder="작가"
            value={this.state.author}
            onChange={this.handleChange}
          />
          <textarea
            name="comment"
            placeholder="한줄평"
            value={this.state.comment}
            onChange={this.handleChange}
          />
        <button type="submit">완료</button>
      </form>
    )
  }
}

export default UpdateContent;
