import React from "react";
import {Provider} from "react-redux";
import DevTools from "./DevTools";
import {Route} from "react-router-dom";
import App from "./App.jsx";

const Root = ({store}) => (
  <Provider store={store}>
    <div>
      <Route path="/" component={App} />
      <DevTools />
    </div>
  </Provider>
);

export default Root;