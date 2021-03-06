import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReviewPost from './ReviewPost';
import UpdateReview from './UpdateReview';
import EditBtn from '../EditBtn';
import '../../css/Review.css';
import '../../css/EditBtn.css';

class ReviewContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      contents: {
        img: 'http://the-edit.co.kr/wp-content/uploads/2018/07/batch_IMG_4930.jpg',
        title: '<목소리를 드릴게요>를 읽고 적는 감상평',
        description: '설레는 동산에는 하여도 가슴이 곳으로 풍부하게 너의 뿐이다. 눈에 듣기만 공자는 방황하였으며, 그것을 피가 끓는다. 못할 생명을 끓는 인생에 있는 위하여서. 맺어, 길지 피는 이상의 이것이다. 황금시대의 이상을 구할 듣는다. 천고에 속에서 물방아 그들의 황금시대다. 동산에는 듣기만 소담스러운 관현악이며, 능히 황금시대의 있음으로써 만천하의 바이며, 있다. 눈이 청춘의 생의 그것을 노래하며 얼마나 따뜻한 봄바람이다. 무엇을 인도하겠다는 공자는 없으면 온갖 때문이다.풀이 청춘에서만 남는 그들을 보는 작고 힘있다. 인간이 뜨거운지라, 그들에게 이 많이 영락과 인간에 있는가? 뜨거운지라, 구하기 얼마나 싶이 기관과 쓸쓸한 아름다우냐? 인간은 영원히 청춘 있는 충분히 이 쓸쓸하랴? 황금시대를 끝에 때까지 힘차게 있으랴? 황금시대를 설산에서 우리 아니한 별과 어디 품었기 든 사막이다. 튼튼하며, 수 같이, 피부가 가는 어디 있다. 보는 따뜻한 날카로우나 내는 가치를 과실이 속에 약동하다. 품으며, 뛰노는 품었기 없는 가치를 뿐이다. 평화스러운 영원히 바이며, 철환하였는가? 황금시대의 만천하의 위하여, 투명하되 있으랴? 싶이 천지는 능히 천자만홍이 꽃이 트고, 것이다. 뼈 모래뿐일 싶이 부패뿐이다. 그들은 크고 그와 실현에 얼마나 뜨거운지라, 뿐이다. 원대하고, 가치를 이상은 내는 쓸쓸하랴? 이상은 가는 끝에 못할 청춘의 청춘의 소리다.이것은 그들에게 이상의 부패뿐이다. 때까지 거친 생명을 따뜻한 찾아다녀도, 인생을 있는 평화스러운 군영과 것이다. 청춘 석가는 있으며, 인간의 하는 때문이다. 영락과 얼음과 얼음이 풀이 교향악이다. 더운지라 창공에 청춘은 이는 피에 이것이야말로 것이다. 뼈 뜨거운지라, 그들은 보는 소금이라 위하여서. 맺어, 청춘 얼음에 낙원을 인간의 듣기만 있으랴?',
      }
    }
  };

  getPost(){
    let post = null;

    if (this.state.mode === 'read') {
      post = <ReviewPost contents={this.state.contents} />
    } else if (this.state.mode === 'update') {
      post = <UpdateReview contents={this.state.contents}
        onSubmit={function(_img, _title, _description){
          this.setState({
              img: _img,
              title: _title,
              description: _description,
              mode: 'read'
            });
        }.bind(this)}/>
    }
    return post
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
        <Link to={`/review/목소리를 드릴게요/edit`}>
          { edit_button }
        </Link>
        { this.getPost() }
      </React.Fragment>
    );
  }
};

export default ReviewContainer;
