import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";

import GuidelinesContent from "./GuidelinesContent";
import styles from "./index.module.scss";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<GuidelinesContent />} >
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM.render(<App />, document.getElementById("app"));