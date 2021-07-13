import React, { Component } from "react";
import Front from "./pages/front";

class App extends Component {
  state = {
    lang: "bd",
  };
  render() {
    return <Front lang={this.state.lang} />;
  }
}

export default App;
