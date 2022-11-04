import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Components/AppV2'
import { BrowserRouter as Router } from 'react-router-dom/'
import 'bootstrap/dist/css/bootstrap.min.css'
import Spinner from './Spinner'
import { legacy_createStore as createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import Reducers from './Components/redux/Reducers'

import { saveToLocalStorage } from './storage/localStorage'

let useReduxDevTools = false
let store

if(window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined)
  useReduxDevTools = true

if(useReduxDevTools){
    let composer = compose(window.__REDUX_DEVTOOLS_EXTENSION__())
     store = createStore(Reducers, composer)
}
else {
  store = createStore(Reducers)
}

store.subscribe(() => {
  console.log(store.getState().Customizer)
  let customizer = store.getState().Customizer

  saveToLocalStorage('apsv2_customizer', customizer)
})

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