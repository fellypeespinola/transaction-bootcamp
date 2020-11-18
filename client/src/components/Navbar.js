import React, { Component } from "react";
import css from "./navbar.module.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className={css.navbarContainer}>
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">
            Transaction
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
