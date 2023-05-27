import React from "react";
import { createRoot } from "react-dom";
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab="home"/>
  </Provider>
);