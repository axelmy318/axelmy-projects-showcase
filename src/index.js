import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './github-markdown.css';
import App from './Components/App';
import { BrowserRouter as Router, Switch } from 'react-router-dom/';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);