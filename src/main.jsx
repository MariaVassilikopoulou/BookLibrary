import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux';
import store from './store/store.js';

/**
  * Store - Our state, it wants to save in Redux
  * Reducer - The actual logic for updating our store
  * Actions - Triggers an update in a reducer
  * Dispatch - Triggers an action in a component
  */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)
