import React, { Component } from 'react';
import SentenceBtn from './SentenceBtn';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class Sentences extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: this.props.mode
    }
  }

  render () {

    let sentence_button;
    if (this.props.mode === 'read') {
      sentence_button = <button onClick={function(e){
        e.preventDefault();
        this.props.onChangeMode('update-sentence');
      }.bind(this)}
       className="sentence_btn">
         <FontAwesomeIcon icon={faEdit} />
       </button>

    }

    return (
      <React.Fragment>

        <div className="sentences_container">
          <div className="sentences">
            <h2>문장들</h2>
            <div>
              <Link to={`/library/목소리를 드릴게요/edit_sentence`}>
                 { sentence_button }
              </Link>
            </div>
            <ul>
              <li>{this.props.sentences.sentence1}</li>
              <li>{this.props.sentences.sentence2}</li>
              <li>{this.props.sentences.sentence3}</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Sentences;
