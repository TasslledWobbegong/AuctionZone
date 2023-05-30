import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App tab="home" />
    </BrowserRouter>
  </Provider>
);