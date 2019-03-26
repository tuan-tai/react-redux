import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import App from "./App.jsx"

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/" component={App} />
    </div>
  </Provider>
);

export default Root;