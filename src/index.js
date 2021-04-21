import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,Route,Switch} from 'react-router-dom';
import './index.css';
import Aircraft from './pages/aircraft';
import Save from './pages/save';

ReactDOM.render(
  <HashRouter>
  <Switch>
      <Route path="/save" component={Save} exact />
      <Route path="/" component={Aircraft} />
  </Switch>
</HashRouter>,
  document.getElementById('root')
);

