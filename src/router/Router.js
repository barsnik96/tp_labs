import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../views/components/App';
import SignIn from '../views/components/SignIn';
import ItemList from '../thunk/components/ItemList';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path='/main' component={App} />
                <Route path='/thunk' component={ ItemList } />
            </Switch>
        )
    }
}

export default Router;