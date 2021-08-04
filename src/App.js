import "./App.css";
import Header from "./components/Header";
import Benifits from "./components/Benifits";
import Products from "./components/Products";
import Features from "./components/Features";
import RoadMap from "./components/RoadMap";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    // <Router>
    //   <Fragment>
    //     <Header />
    //     <Switch>
    //       <Route path="/benifits">
    //         <Benifits />
    //       </Route>
    //       <Route path="/products">
    //         <Products />
    //       </Route>
    //       <Route path="/features">
    //         <Features />
    //       </Route>
    //       <Route path="/roadmap">
    //         <RoadMap />
    //       </Route>
    //       <Route path="/team">
    //         <Team />
    //       </Route>
    //       <Route path="/contact">
    //         <ContactUs />
    //       </Route>
    //     </Switch>
    //     <Footer />
    //   </Fragment>
    // </Router>
    <Fragment>
      <Header />
      <Benifits />
      <Products />
      <Features />
      <RoadMap />
      <Team />
      <ContactUs />
      <Footer />
    </Fragment>
  );
}

export default App;
