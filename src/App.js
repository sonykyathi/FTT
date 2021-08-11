import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Fragment } from "react";

import HomePage from "./components/home";
import AboutusPage from "./components/pages/aboutus";
import galleryPage from "./components/pages/gallery";
import faqPage from "./components/pages/faq";
import RoadMap from "./components/RoadMap";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/aboutus" component={AboutusPage} />
          <Route exact path="/gallery" component={galleryPage} />
          <Route exact path="/faq" component={faqPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
