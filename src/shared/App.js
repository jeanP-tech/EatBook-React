import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Library, Review, SearchPage, LibraryDetail, ReviewDetail, SearchDetailPage, LibraryEdit, LibraryEditSentence } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main}/>
                <Switch>
                  <Route path="/library/:book/edit" component={LibraryEdit}/>
                  <Route path="/library/:book/edit_sentence" component={LibraryEditSentence}/>
                  <Route path="/library/:book" component={LibraryDetail}/>
                  <Route path="/library" component={Library}/>
                </Switch>
                <Switch>
                  <Route path="/search/:book" component={SearchDetailPage}/>
                  <Route path="/search" component={SearchPage}/>
                </Switch>
                <Switch>
                  <Route path="/review/:post" component={ReviewDetail}/>
                  <Route path="/review" component={Review}/>
                </Switch>
            </div>
        );
    }
}

export default App;
