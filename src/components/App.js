import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./../css/App.css";
import Nav from "./Nav";
import Footer from "./Footer";
// import Home from "./Home";
// import News from "./News";
// import NewDetail from "./NewDetail";
// import Contact from "./Contact";
import URL from "./../router/url";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <URL />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
