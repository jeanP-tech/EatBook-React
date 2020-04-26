import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sentences from './Sentences';
import DetailInfo from './DetailInfo';

class ReadContent extends Component {

  render () {

    return (
      <React.Fragment>
        <DetailInfo content={this.props.content} />
        <Sentences mode = {this.props.mode} sentences={this.props.content.sentences} />
      </React.Fragment>
    );
  }
}

export default ReadContent;
