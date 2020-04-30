import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// component to render the page heading
function Banner() {
  return (
    <div className="banner text-center">
      <h3>Your Employee Directory</h3>
      <p className="message">Click on column headers to revise your search, or use search box to narrow your results</p>
    </div>
  );
}

export default Banner;
