import React, { Component } from 'react';
import SentenceBtn from './SentenceBtn';

class Sentences extends Component {

  render () {
    let sentence_button;
    if (this.props.mode === 'read') {
      sentence_button = <SentenceBtn onChangeMode={function(_mode){
        this.setState({
          mode: _mode
        });
      }.bind(this)} />
    }

    return (
      <React.Fragment>
        <div className="sentences_container">
          <div className="sentences">
            <h2>문장들</h2>
            { sentence_button }
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
