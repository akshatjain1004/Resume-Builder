import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      
    </div>
  );
}

export default App;
