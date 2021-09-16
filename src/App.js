
import React, { useState, useEffect } from "react";
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import history from './history';
import { configureStore } from './redux/store';
import Routes from './Routes'
// import './styles/main.scss';
import './styles/tailwind.css';

const store = configureStore();

export default function App() {

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container-fluid p-0">
          <Routes />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}