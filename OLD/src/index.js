import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

// the main app component
import AppScreen from './screens/AppScreen';

// higher order render function to support hot module replacement
const renderDom = () => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <AppScreen />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  );
};

// render first even if no hot module is there (production)
renderDom();

// apply hot module replacement if available
if (module.hot) module.hot.accept('./screens/AppScreen', () => { renderDom(); });
