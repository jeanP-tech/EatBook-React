import React, { Component } from 'react';
import DetailInfo from './DetailInfo';
import '../../css/DetailEdit.css';

class UpdateSentences extends Component {
  constructor(props){
    super(props);
    this.state = {
      sentence1: this.props.sentences.sentence1,
      sentence2: this.props.sentences.sentence2,
      sentence3: this.props.sentences.sentence3,
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
        <DetailInfo content={this.props.content} />
        <div className="edit_container">
          <div className="edit_info">
            <div className="edit_list">
              <form action="/library/목소리를 드릴게요" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(
                    this.state.sentence1,
                    this.state.sentence2,
                    this.state.sentence3,
                  )
                }.bind(this)}>

                  <textarea
                    name="sentence1"
                    value={this.state.sentence1}
                    onChange={this.handleChange}
                    className="sentence"
                  />
                  <textarea
                    name="sentence2"
                    value={this.state.sentence2}
                    onChange={this.handleChange}
                    className="sentence"
                  />
                  <textarea
                    name="sentence3"
                    value={this.state.sentence3}
                    onChange={this.handleChange}
                    className="sentence"
                  />

                <button type="submit">완료</button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default UpdateSentences;
