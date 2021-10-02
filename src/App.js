import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Fragment } from "react";

import HomePage from "./components/home";
import AboutusPage from "./components/pages/aboutus";
import galleryPage from "./components/pages/gallery";
import faqPage from "./components/pages/faq";
import RoadMap from "./components/RoadMap";
import LoginPage from "./components/pages/login";
import Register from "./components/pages/register";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


function App() {
  return (
    <>
      <ReactNotification />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/aboutus" component={AboutusPage} />
          <Route exact path="/gallery" component={galleryPage} />
          <Route exact path="/faq" component={faqPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
