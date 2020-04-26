import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class EditBtn extends Component {
  render() {
    return (
      <div>
        <Link to={`/library/목소리를 드릴게요/edit`}>
           <button onClick={function(e){
             e.preventDefault();
             this.props.onChangeMode('update');
           }.bind(this)}
            className="edit_btn">
              <FontAwesomeIcon icon={faEdit} size="2x" />
            </button>
        </Link>
      </div>
    );
  }
}

export default EditBtn;
