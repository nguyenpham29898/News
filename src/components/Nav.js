import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link to="/" className="navbar-brand js-scroll-trigger">
            React Router
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link js-scroll-trigger">
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/news" className="nav-link js-scroll-trigger">
                  Tin tức
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/news-detail"
                  className="nav-link js-scroll-trigger"
                >
                  Chi tiết tin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link js-scroll-trigger">
                  Liên hệ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
