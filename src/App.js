import React from "react";
import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
