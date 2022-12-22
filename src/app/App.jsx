import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes, { renderRoutes } from './routes';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      {renderRoutes(routes)}
    </Router>
  );
}

export default App;
