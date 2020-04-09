import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../css/DetailPage.css';
import Control from './Control';
import ReadContent from './ReadContent';
import UpdateContent from './UpdateContent';

class LibraryDetailContainer extends Component {
  constructor(props){
    super(props);
    this.state = { mode:'read' }
  }

  render() {

    let _article = null;

    if (this.state.mode === 'read') {
      _article = <ReadContent />
    } else if (this.state.mode === 'update') {
      _article = <UpdateContent />
    }

    return (
      <>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>

        {_article}
      </>
    );
  }
}

export default LibraryDetailContainer;
