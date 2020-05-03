import React, { Component } from 'react';

class UpdateReview extends Component {
  constructor(props){
    super(props);
    this.state = {
      img: this.props.contents.img,
      title: this.props.contents.title,
      description: this.props.contents.description,
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
      profile_preview = <img src={this.state.previewURL} alt="preview_image" />
    } else {
      profile_preview = <img src={this.state.img} alt="preview_image"/>
    }

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

                <input type='file'
                  accept='image/jpg,impge/png,image/jpeg,image/gif'
                  name='profile_img'
                  onChange={this.handleFileOnChange}
                  className="update_img"
                  />
                <span className="review_img"> {profile_preview} </span>

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
