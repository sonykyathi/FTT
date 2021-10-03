import React from "react";
import {downloadWhitePaper} from '../../utils';

export default function Header() {
  return (
    <React.Fragment>
      <div className="head-hero-wrapper banner-bg">
        <header
          id="fttHead"
          className="herd-wrap wow fadeInDown"
          data-wow-delay="0.10s"
        >
          <div className="container">
            <div className="row">
              <nav className="navbar ftt-navbar navbar-expand-lg">
                <a
                  className="navbar-brand"
                  href="theme-assets/images/FTTpng200x200.png"
                  target="_blank"
                >
                  <img
                    src="theme-assets/images/logo-white.png"
                    className="img-fluid logo-white"
                    alt=""
                  />
                  <img
                    src="theme-assets/images/logo.png"
                    className="img-fluid logo-color"
                    alt=""
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/aboutus">
                        About us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/gallery">
                        Gallery
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="javascript:void(0);"
                        id="productDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Products{" "}
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </a>
                      <div
                        class="dropdown-menu custom-dropdown-menu"
                        aria-labelledby="productDropdown"
                      >
                        <a class="dropdown-item" href="#proDefistartup">defistartup</a>
                        <a class="dropdown-item" href="#proDefiplay">defiplay</a>
                        <a class="dropdown-item" href="#proDeficard">defiswipecard</a>
                        <a class="dropdown-item" href="#proDefitradx">defitradx</a>
                        <a class="dropdown-item" href="#proDefibuzaar">defibuzaar</a>
                        <a class="dropdown-item" href="#proDefinirvana">definirvaana</a>
                        <a class="dropdown-item" href="#proDefikampus">defikampus</a>
                        <a class="dropdown-item" href="#proDefiland">defilandscapes</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="javascript:void(0);"
                        id="coinDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Our Coin{" "}
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </a>
                      <div
                        class="dropdown-menu custom-dropdown-menu"
                        aria-labelledby="coinDropdown"
                      >
                        <a class="dropdown-item" target="_blank" href="https://www.defitt.org/">
                          DEFITT
                        </a>
                        <a class="dropdown-item" href="javascript:void(0);">
                          FTT
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#roadmapLink">
                        Roadmap
                      </a>
                    </li>
                  </ul>
                  <div className="head-btn wow fadeInUp" data-wow-delay="0.65s">
                    <a href="/login" className="btn-style-md btn-white-outline text-center">Sign in</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <section className="banner-wrapper banner-gap" id="homeLink">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div
                  className="banner-caption wow fadeInRight"
                  data-wow-delay="0.10s"
                >
                  <h2>Financial Tech Token</h2>
                  <p>Realise the rewards of digital money</p>
                  <p>Buy, sell, store, trade, transfer, earn & invest</p>
                  <div className="banner-buttons btn-inline">
                    <button type="button" className="btn-style-md btn-blue">
                      Buy Token
                    </button>
                    <button type="button" className="btn-style-md btn-white" onClick={downloadWhitePaper}>
                      White Paper
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                <div
                  className="banner-img text-center wow fadeInLeft"
                  data-wow-delay="0.10s"
                >
                  <img
                    src="theme-assets/images/hero-coin.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
