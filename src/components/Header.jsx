import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Header = props => {
    return (
        <div className="head-hero-wrapper banner-bg">
        <header id="fttHead" className="herd-wrap wow fadeInDown" data-wow-delay="0.10s">
          <div className="container">
            <div className="row">
              <nav className="navbar ftt-navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                  <img src="theme-assets/images/logo-white.png" className="img-fluid logo-white" alt=""/>
                  <img src="theme-assets/images/logo.png" className="img-fluid logo-color" alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#homeLink">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#productsLink">Products</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#serviceLink">Our Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#techLink">Technology</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#roadmapLink">Roadmap</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#aboutLink">About Us</a>
                    </li>
                  </ul>
                  <div className="head-btn wow fadeInUp" data-wow-delay="0.65s">
                    <button type="button" className="btn-style-md btn-white-outline">Contact Us</button>
                  </div>
                </div>
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link to="home" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/products" className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/features" className="nav-link">Our Services</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#techLink">Technology</a>
                    </li>
                    <li className="nav-item">
                      <Link to="/roadmap" className="nav-link">Roadmap</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link">About Us</Link>
                    </li>
                  </ul>
                  <div className="head-btn wow fadeInUp" data-wow-delay="0.65s">
                    <button type="button" className="btn-style-md btn-white-outline">Contact Us</button>
                  </div>
                </div> */}
              </nav>
            </div>
          </div>
        </header>

        <section className="banner-wrapper banner-gap" id="homeLink">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="banner-caption wow fadeInRight" data-wow-delay="0.10s">
                  <h2>Financial Tech Token</h2>
                  <p>Realise the rewards of digital money</p>
                  <p>Buy, sell, store, trade, transfer, earn & invest</p>
                  <div className="banner-buttons btn-inline">
                    <button type="button" className="btn-style-md btn-blue">Buy Token</button>
                    <button type="button" className="btn-style-md btn-white">White Paper</button>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                <div className="banner-img text-center wow fadeInLeft" data-wow-delay="0.10s">
                  <img src="theme-assets/images/hero-coin.png" className="img-fluid" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>        
    )
}

Header.propTypes = {

}

export default Header
