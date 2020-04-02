import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Library, Review, SearchPage, SearchDetail } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main}/>
                <Route path="/library" component={Library}/>
                <Route path="/search" component={SearchPage}/>
                <Route path="/search_detail/:book" component={SearchDetail}/>
                <Route path="/review" component={Review}/>
            </div>
        );
    }
}

export default App;
