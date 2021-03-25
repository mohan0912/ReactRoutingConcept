import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import Header from "./Components/Header/Header";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import Footer from "./Components/Footer/Footer";

ReactDOM.render(
  <div className="app">
    <Header />
    <Router>
      <Switch>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </div>,
  document.getElementById("root")
);
