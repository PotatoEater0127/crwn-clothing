import React from "react";
import HomePage from "./pages/homepage.component";
import { Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";

const HatsPage = (props) => {
  return <div>HATS PAGE</div>;
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
