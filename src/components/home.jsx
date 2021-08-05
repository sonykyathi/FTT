import React from 'react'

import Header from "./layout/Header";
import Benifits from "./Benifits";
import Products from "./Products";
import Features from "./Features";
import RoadMap from "./RoadMap";
import Team from "./Team";
import ContactUs from "./ContactUs";
import Footer from "./layout/Footer";

export default function HomePage() {
    return (
        <React.Fragment>
            <Header />
            <Benifits />
            <Products />
            {/* <Features /> */}
            <RoadMap />
            {/* <Team /> */}
            <ContactUs />
            <Footer />
        </React.Fragment>
    )
}
