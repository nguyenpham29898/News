import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import News from "./../components/News";
import Home from "./../components/Home";
import NewDetail from "./../components/NewDetail";
import Contact from "./../components/Contact";

export default class url extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/news-detail/:slug.:id.html" component={NewDetail} />
        <Route exact path="/contact" component={Contact} />
      </div>
    );
  }
}
