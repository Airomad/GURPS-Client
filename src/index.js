import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducer from 'reducers';

import AppScreen from 'screens/AppScreen';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={syncHistoryWithStore(createBrowserHistory(), store)}>
			<Route path="/" component={AppScreen}/>
		</Router>
	</Provider>,
	document.getElementById('app')
);
