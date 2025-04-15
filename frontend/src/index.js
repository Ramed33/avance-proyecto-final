import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
//import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <App />
    </Provider>
)

//reportWebVitals();