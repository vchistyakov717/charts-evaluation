import React from 'react';
import { Switch, Router } from 'react-router-dom';
import history from './utils/history';
import Main from './components/Main';

import { PropsRoute } from './utils/helpers';

function App(props) {
  return (
    <Router history={history}>
      <Switch>
        <PropsRoute path="/evaluation" component={Main} {...props} />
      </Switch>
    </Router>
  );
}

export default App;
