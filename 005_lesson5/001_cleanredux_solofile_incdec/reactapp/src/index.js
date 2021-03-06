import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import App from './App';
import reduxXx from "./reduxXx";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={reduxXx()}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
