import React from "react";
import "./index.css";

import LandingPage from "../components/LandingPage/LandingPage";

const searchIndices = [{ name: `Pages`, title: `Pages` }];

function index() {
  return (
    <div className="body">
      <title>S-Mart - The S-Marter way to shop!</title>
      <LandingPage />
    </div>
  );
}

export default index;
