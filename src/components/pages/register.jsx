import React from 'react'


export default function Register() {
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
                                    <a href="/login" className="btn-style-md btn-white-outline text-center">Sign in</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
            <div className="entry-page card-justify-center section-gap-140">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <div className="col-md-5 col-sm-12 col-12">
                            <div className="entry-card-img">
                                <img src="theme-assets/images/hero-coin.png" className="img-fluid" alt=""/>
                            </div>
                        </div> */}
                        <div className="col-md-12 col-sm-12 col-12">
                            <div className="entry-card">
                                {/* <div className="login-logo">
                                    <a href="/" ><img src="theme-assets/images/logo.png" className="img-fluid" alt=""/></a>
                                </div> */}
                                <h2>Create your account</h2>
                                <form action="">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>First Name</label>
                                                <input type="text" className="form-control" placeholder="Your First Name"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>Last Name</label>
                                                <input type="text" className="form-control" placeholder="Your Last Name"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>Email</label>
                                                <input type="email" className="form-control" placeholder="Your Email"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>Phone No.</label>
                                                <input type="phone" className="form-control" placeholder="Your Phone"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>Country</label>
                                                <select className="form-control" Size="">
                                                    <option value="0">Select Country</option>
                                                    <option value="1">Country 01</option>
                                                    <option value="2">Country 02</option>
                                                    <option value="3">Country 03</option>
                                                    <option value="4">Country 04</option>
                                                    <option value="5">Country 05</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>State</label>
                                                <input type="text" className="form-control" placeholder="Your State"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>Password</label>
                                                <input type="password" className="form-control" placeholder="Your Password"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>Confirm Password</label>
                                                <input type="password" className="form-control" placeholder="Confirm Your Password"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 col-12">
                                            <div className="login-input-options">
                                                <label className="custom-checkbox login-remember">I accept all terms and conditions.
                                                    <input type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="login-button text-center">
                                        <button type="button" className="btn-style-lg btn-orange">Register</button>
                                    </div>
                                </form>
                                <div className="entry-form-swap text-center">
                                    <span>Already have an account?<a href="/login">Login here</a>.</span>
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
