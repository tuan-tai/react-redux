import React, {Component} from "react";
import {connect} from "react-redux";
import List from "../components/List.jsx";
import Form from "../components/Form.jsx";

import {POSTS_REQUEST} from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    postRequest: () => dispatch(POSTS_REQUEST())
  }
}

class ConnectedApp extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.postRequest();
  }

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <List />
        </div>
    
        <div className="col-md-4 offset-md-1">
          <h2>Add a new article</h2>
          <Form />
        </div>
      </div>
    )
  }
}

const App = connect(null, mapDispatchToProps)(ConnectedApp);

export default App;