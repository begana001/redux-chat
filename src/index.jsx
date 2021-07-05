// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import channelsReducer from './reducers/channels_reducer';
import currentUserReducer from './reducers/current_user_reducer';
import messagesReducer from './reducers/messages_reducer';

// initialState
const initialState = {
  channels: ['general', 'react', 'berlin'],
  // currentUser: prompt('what is your name?'),
  currentUser: 'Begana',
  messages: []
};

// State and reducers
const reducers = combineReducers({
  channels: channelsReducer,
  currentUser: currentUserReducer,
  messages: messagesReducer
});

// middlewares
const middlewares = applyMiddleware(logger, reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/general" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
