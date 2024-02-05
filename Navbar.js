import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div className="abcd">
      <ul>
        <li>
          <a href="default.asp">{props.title}</a>
        </li>
        <li>
          <a href="news.asp">News</a>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about.asp">{props.aboutText}</a>
        </li>
      </ul>
      Hello this is a navbar.
    </div>
  );
}

Navbar.prototype = { title: PropTypes.string.isRequired, aboutText: PropTypes.string };
Navbar.defaultProps={title:'set title here',aboutText:'set aboutText here'};
