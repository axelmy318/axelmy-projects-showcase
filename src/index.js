import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Components/AppV2'
import { BrowserRouter as Router } from 'react-router-dom/'
import 'bootstrap/dist/css/bootstrap.min.css'
import Spinner from './Spinner'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducers from './Components/redux/Reducers'

const store = createStore(Reducers)

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);