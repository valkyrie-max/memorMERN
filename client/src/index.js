import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';

// going to keep track of the global store, allows us to access to access the store anywhere inside of the app 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; 

import reducers from './reducers'

import App from './App';

const store = configureStore({reducer: reducers}, compose(applyMiddleware(thunk))); 

// ReactDOM.render(<App />, document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
   <Provider store={store}>
      <App tab="home" />
   </Provider>
);