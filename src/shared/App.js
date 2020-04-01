import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Library, Review, SearchPage } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main}/>
                <Route path="/library" component={Library}/>
                <Route path="/search" component={Library}/>
                <Route path="/review" component={Review}/>
            </div>
        );
    }
}

export default App;
