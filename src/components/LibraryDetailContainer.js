import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../css/DetailPage.css';
import ReadContent from './ReadContent';
import UpdateContent from './UpdateContent';
import Control from './Control';

class LibraryDetailContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      mode:'read',
      contents: {
        title: '목소리를 드릴게요',
        img: 'http://static.news.zumst.com/images/1/2019/12/27/b50851f9784645f7bde58324e1146bfe.jpg',
        author: '정세랑',
        rating: '🌟🌟🌟🌟',
        date: '2020.3.8 - 3.11',
        comment: '정세랑 작가의 신작 SF 단편소설집이다.',
        hashtag: '#한국소설#정세랑#SF#단편소설'
      }
    }
  }

  getContent(){
    let _article = null;

    if (this.state.mode === 'read') {
      _article = <ReadContent mode={this.state.mode} content={this.state.contents} />
    } else if (this.state.mode === 'update') {
      _article = <UpdateContent data={this.state.contents}
        onSubmit={function(_img, _title, _author, _rating, _date, _comment){
          this.setState({
              title: _title,
              author: _author,
              rating: _rating,
              comment: _comment,
              date: _date,
              mode: 'read'
            });
        }.bind(this)}/>
    }

    return _article
  }

  render() {
    let button;
    if (this.state.mode === 'read') {
      button = <Control onChangeMode={function(_mode){
        this.setState({
          mode: _mode
        });
      }.bind(this)} />
    }

    return (
      <React.Fragment>
        { button }
        { this.getContent() }
      </React.Fragment>
    );
  }
}

export default LibraryDetailContainer;
