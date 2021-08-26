import React from 'react'

import HeaderNavbar from "../layout/headerNavbar";
import Footer from "../layout/Footer";

export default function LoginPage() {
    return (
        <React.Fragment>
            {/* <HeaderNavbar/> */}
            <div className="entry-page card-justify-center">
                <div className="container">
                    <div className="entry-card">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-12">
                                <div className="entry-card-bg">
                                    <img src="theme-assets/images/hero-coin.png" className="img-fluid" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-12">
                                <div className="login-logo">
                                    <a href="/" >
                                        <img src="theme-assets/images/logo.png" className="img-fluid" alt=""/>
                                    </a>
                                </div>
                                <h2>Login to your Account</h2>
                                <form action="" autoComplete="off">
                                    <div className="inputBox">
                                        <input type="text" id="name" autoComplete="off"/>
                                        <label for="name">Username</label>
                                    </div>
                                    <div className="inputBox">
                                        <input type="password" id="password" autoComplete="off"/>
                                        <label for="password">Password</label>
                                    </div>
                                    <button type="button" className="btn-style-lg btn-blue">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </React.Fragment>
    )
}
