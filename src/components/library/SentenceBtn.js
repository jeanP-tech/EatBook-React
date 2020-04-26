import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class SentenceBtn extends Component {
  render() {
    return (
      <div>
        <Link to={`/library/목소리를 드릴게요/edit_sentence`}>
           <button onClick={function(e){
             e.preventDefault();
             this.props.onChangeMode('update-sentence');
           }.bind(this)}
            className="sentence_btn">
              <FontAwesomeIcon icon={faEdit} />
            </button>
        </Link>
      </div>
    );
  }
}

export default SentenceBtn;
