import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Library, Review, SearchPage, ReadDetail } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main}/>
                <Switch>
                  <Route path="/library/:book" component={ReadDetail}/>
                  <Route path="/library" component={Library}/>
                </Switch>
                <Route path="/search" component={SearchPage}/>
                <Route path="/review" component={Review}/>
            </div>
        );
    }
}

export default App;
