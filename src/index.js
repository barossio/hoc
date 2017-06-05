import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import App from './components/app';
import Resources from './components/resources'
import Home from './components/home';
import Header from './components/header';
import requireAuth from './components/require_authentication';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const history = createHistory()

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <Router history={history} >
      <App>
      <Switch>
        <Route path="/resources" component={requireAuth(Resources)}/>
        <Route  path="/" component={Home}/>
      </Switch>
      </App>
  </Router>

  </Provider>
  , document.querySelector('.container'));
