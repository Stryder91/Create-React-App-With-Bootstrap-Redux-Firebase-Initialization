import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore } from 'redux';
import { Provider }    from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReducerRoot from './ReducerRoot'

const store = createStore(ReducerRoot);

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
        </Switch>
    </BrowserRouter>
);
store.subscribe(() => {
    console.log("state updated", store.getState());
})

ReactDOM.render(
<Provider store={store} >
    <Root />
</Provider>, document.getElementById('root'));

