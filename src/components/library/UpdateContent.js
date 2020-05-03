import React, { Component } from 'react';
import Sentences from './Sentences';
import '../../css/DetailEdit.css';

class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      img: this.props.data.img,
      title: this.props.data.title,
      author: this.props.data.author,
      rating: this.props.data.rating,
      date: this.props.data.date,
      comment: this.props.data.comment,
      file : '',
      previewURL : ''
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

  handleFileOnChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file : file,
        previewURL : reader.result
      })
    }
    reader.readAsDataURL(file);
  }

  render(){

    let profile_preview = null;
    if(this.state.file !== ''){
      profile_preview = <img src={this.state.previewURL}></img>
    } else {
      profile_preview = <img src={this.state.img}></img>
    }

    return (
      <React.Fragment>
        <div className="edit_container">
              <form action="/library/목소리를 드릴게요" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(
                    this.state.title,
                    this.state.author,
                    this.state.comment
                  )
                }.bind(this)}>
                  <div className="edit_info">
                    <div className="update_book_img">
                      <input type='file'
                        accept='image/jpg,impge/png,image/jpeg,image/gif'
                        name='profile_img'
                        onChange={this.handleFileOnChange}
                        className="update_img"
                        />
                      <div className="book_cover">{profile_preview}</div>
                    </div>

                    <div className="edit_list">
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
                </div>
                </div>
              </form>

          </div>

          <Sentences sentences={this.props.data.sentences} />
      </React.Fragment>
    )
  }
}

export default UpdateContent;
