import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class EditBtn extends Component {
  render() {
    return (
      <React.Fragment>
         <button onClick={function(e){
           e.preventDefault();
           this.props.onChangeMode('update');
         }.bind(this)}
          className="edit_btn">
            <FontAwesomeIcon icon={faEdit} size="2x" />
          </button>
      </React.Fragment>
    );
  }
}

export default EditBtn;
