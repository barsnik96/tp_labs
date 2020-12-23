import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../views/components/App';
import SignIn from '../views/components/SignIn';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path='/main' component={App} />
            </Switch>
        )
    }
}

export default Router;