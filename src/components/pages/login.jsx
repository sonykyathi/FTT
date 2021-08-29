import React from 'react'


export default function LoginPage() {
    return (
        <React.Fragment>
            <div className="head-hero-wrapper header-navbar-bg inner-header login-header">
                <header id="fttHead" className="herd-wrap wow fadeInDown" data-wow-delay="0.10s">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar ftt-navbar navbar-expand-lg">
                                <a className="navbar-brand" href="/">
                                    <img src="theme-assets/images/logo-white.png" className="img-fluid logo-white" alt=""/>
                                    <img src="theme-assets/images/logo.png" className="img-fluid logo-color" alt=""/>
                                </a>
                                <div className="head-btn ml-auto wow fadeInUp" data-wow-delay="0.65s">
                                    <a href="/register" className="btn-style-md btn-white-outline text-center">Register</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
            <div className="entry-page card-justify-center section-gap-140">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-sm-12 col-12 d-lg-block d-md-none d-sm-none d-none">
                            <div className="entry-card-img">
                                <img src="theme-assets/images/hero-coin.png" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="entry-card">
                                {/* <div className="login-logo">
                                    <a href="/"><img src="theme-assets/images/logo.png" className="img-fluid" alt=""/></a>
                                </div> */}
                                <h2>Login to your Account</h2>
                                <form action="">
                                    <div className="inputBox">
                                        <label for="name">Username</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter Your Username"/>
                                    </div>
                                    <div className="inputBox">
                                        <label for="password">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Enter Your Password"/>
                                    </div>
                                    <div className="login-input-options">
                                        <label className="custom-checkbox login-remember">Remember me
                                            <input type="checkbox"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="login-forget"><a href="javascrip:void(0);">Forget Password?</a></div>
                                    </div>
                                    <div className="login-button text-center">
                                        <button type="button" className="btn-style-lg btn-orange">Login</button>
                                    </div>
                                </form>
                                <div className="entry-form-swap text-center">
                                    <span>Don't have an account?<a href="/register">Create new account</a>.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* Copyright Code Start  */}
            <div className="cms-short-footer wow fadeInDown" data-wow-delay="0.10s">
                <div className="copyright-bar">
                    <p>Copyright © 2021 FTT. All rights reserved.</p>
                </div>
            </div>
        </React.Fragment>
    )
}
