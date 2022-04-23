import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/store';
import { Provider } from "react-redux";

import RouteSwitch from "./routes/RouteSwitch";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} >
          <RouteSwitch/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
