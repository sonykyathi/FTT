import React from 'react'
import HeaderNavbar from "../layout/headerNavbar";


export default function LoginPage() {
    return (
        <React.Fragment>
            <HeaderNavbar/>
            <div className="entry-page card-justify-center section-gap-140">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="entry-card-img">
                                <img src="theme-assets/images/hero-coin.png" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="entry-card">
                                <div className="login-logo">
                                    <a href="/" ><img src="theme-assets/images/logo.png" className="img-fluid" alt=""/></a>
                                </div>
                                <h2>Login to your Account</h2>
                                <form action="">
                                    <div className="inputBox">
                                        <label for="name">Username</label>
                                        <input type="text" id="name" placeholder="Enter Your Username"/>
                                    </div>
                                    <div className="inputBox">
                                        <label for="password">Password</label>
                                        <input type="password" id="password" placeholder="Enter Your Password"/>
                                    </div>
                                    <div className="login-input-options">
                                        <label className="custom-checkbox login-remember">Remember me
                                            <input type="checkbox"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="login-forget"><a href="javascrip:void(0);">Forget Password?</a></div>
                                    </div>
                                    <div className="login-button text-center">
                                        <button type="button" className="btn-style-lg btn-blue">Login</button>
                                    </div>
                                </form>
                                <div className="entry-form-swap text-center">
                                    <span>Don't have an account?<a href="javascrip:void(0);">Register</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* Copyright Code Start  */}
            <div className="cms-short-footer">
                <div className="copyright-bar wow fadeInDown" data-wow-delay="0.10s">
                    <p>Copyright © 2021 FTT. All rights reserved.</p>
                </div>
            </div>
        </React.Fragment>
    )
}
