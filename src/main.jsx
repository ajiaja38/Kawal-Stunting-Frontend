import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './apps/App.jsx'
import './style/index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { Provider } from 'react-redux'
import store from './apps/redux/store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
