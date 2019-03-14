import React from "react";
import "./styles.css";
import NotFoundImage from './funny-404-pages.jpg';

export default () =>
  <div className="NotFound">
    <img src={NotFoundImage} alt="" />
    <h3>Sorry, page not found!</h3>
  </div>;