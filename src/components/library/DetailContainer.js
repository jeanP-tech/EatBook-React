import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../css/DetailPage.css';
import ReadContent from './ReadContent';
import UpdateContent from './UpdateContent';
import EditBtn from './EditBtn';
import UpdateSentences from './UpdateSentences';

class DetailContainer extends Component {
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
        sentences: {
          sentence1: '우리가 다시 만나 점심을 먹을 수 있으면 좋겠습니다.  p.40',
          sentence2: '대개 사랑이 바래는 것은 소중한 순간들을 잊고 서로를 함부로 대하기 시작하기 때문이므로, 이제 잊히지 않는 기억들로 사랑은 유지되었다.  p.135',
          sentence3: '하필이면 사랑이 일목 대상인 일목인처럼. 물거품이 될 각오가 선 인어처럼. “목소리를 드릴게요.”  p.215'
        }
      },
    }
  }

  getInfo(){
    let bookInfo = null;

    if (this.state.mode === 'read') {
      bookInfo = <ReadContent mode={this.state.mode} content={this.state.contents} />
    } else if (this.state.mode === 'update') {
      bookInfo = <UpdateContent data={this.state.contents}
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
    return bookInfo
  }

  getSentence(){
    let sentenceInfo = null;

    if (this.state.mode === 'read') {
    } else if (this.state.mode === 'update-sentence') {
      sentenceInfo = <UpdateSentences sentences={this.state.contents.sentences}
        onSubmit={function(_sentence1, _sentence2, _sentence3){
          this.setState({
              sentence1: _sentence1,
              sentence2: _sentence2,
              sentence3: _sentence3,
              mode: 'read'
            });
        }.bind(this)}/>
    }

    return sentenceInfo
  }

  render() {
    let edit_button;
    if (this.state.mode === 'read') {
      edit_button = <EditBtn onChangeMode={function(_mode){
        this.setState({
          mode: _mode
        });
      }.bind(this)} />
    }

    return (
      <React.Fragment>
        { edit_button }
        { this.getInfo() }
        { this.getSentence() }
      </React.Fragment>
    );
  }
}

export default DetailContainer;
