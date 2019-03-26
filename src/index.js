import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Root from "./js/containers/Root";
import configureStore from "./js/store/configureStore";

const store = configureStore();

render (
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById("root")
);