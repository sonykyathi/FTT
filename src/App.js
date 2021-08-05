import "./App.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Fragment } from "react";

import HomePage from "./components/home";
import AboutusPage from "./components/pages/aboutus";
import galleryPage from "./components/pages/gallery";
import faqPage from "./components/pages/faq";

function App() {
  return (
    <React.Fragment>
      
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/aboutus' component={AboutusPage} />
        <Route exact path='/gallery' component={galleryPage} />
        <Route exact path='/faq' component={faqPage} />

        
      </Router>
    </React.Fragment>
  );
}

export default App;
