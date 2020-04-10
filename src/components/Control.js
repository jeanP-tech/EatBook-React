import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Control extends Component {
  render() {
    return (
      <div>
        <Link to={`/library/목소리를 드릴게요/edit`}>
          <button onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>Edit</button>
        </Link>
      </div>
    );
  }
}

export default Control;
