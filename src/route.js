import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Cart from './containers/cartcontainer'
export default function routes() {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/cart" exact component={Cart} />
        </Switch>
    )
} 