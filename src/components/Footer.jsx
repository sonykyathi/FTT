import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        // Footer Code Start 
        <footer className="footer-wrapper footer-bg">
          <div className="container" id="aboutLink">
            {/* Newsletter Code Start  */}
            <div className="newsletter-section">
              <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                  <div className="newsletter-content wow fadeInLeft" data-wow-delay="0.10s">
                    <h3>Join us today!</h3>
                    <p>Buy your cryptocurrency today to begin using the future of money.</p>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                  <form className="newsletter-field wow fadeInRight" data-wow-delay="0.10s">
                    <input type="type" className="form-control" placeholder="Enter your email"/>
                    <button type="button" className="btn-style-sm btn-orange">Subscribe Now</button>
                  </form>
                </div>
              </div>
            </div>
            {/* Newsletter Code End  */}
      
            {/* Footer Links Code Start  */}
            <div className="footer-content">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="footer-about wow fadeInUp" data-wow-delay="0.10s">
                    <div className="footer-logo">
                      <img src="theme-assets/images/logo-white.png" className="img-fluid" alt=""/>
                    </div>
                    <p>Despite being volatile, decentralised token like DEFItt has turned investors, millionaires, to billionaires ‘overnight, creating these opportunities, due to its volatility and the ability for traders to look for opportunities in the market.</p>
                    <a href="javascript:void(0);" className="footer-support-link">support.ftt.com</a>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div className="row">
                    <div className="useful-links">
                      <ul className="footer-links-card wow fadeInUp" data-wow-delay="0.10s">
                        <li className="footer-links-title">Company</li>
                        <li><a href="javascript:void(0);">Home</a></li>
                        <li><a href="javascript:void(0);">Products</a></li>
                        <li><a href="javascript:void(0);">Our Services</a></li>
                        <li><a href="javascript:void(0);">Technology</a></li>
                        <li><a href="javascript:void(0);">Roadmap</a></li>
                        <li><a href="javascript:void(0);">About us</a></li>
                      </ul>
                      <ul className="footer-links-card wow fadeInUp" data-wow-delay="0.10s">
                        <li className="footer-links-title">Informations</li>
                        <li><a href="javascript:void(0);">Terms of use</a></li>
                        <li><a href="javascript:void(0);">Privacy policy</a></li>
                        <li><a href="javascript:void(0);">Supported country</a></li>
                        <li><a href="javascript:void(0);">Developer Platform</a></li>
                        <li><a href="javascript:void(0);">Blog</a></li>
                      </ul>
                      <ul className="footer-links-card wow fadeInUp" data-wow-delay="0.10s">
                        <li className="footer-links-title">Learn</li>
                        <li><a href="javascript:void(0);">Buy Bitcoin</a></li>
                        <li><a href="javascript:void(0);">Buy Bitcoin Cash</a></li>
                        <li><a href="javascript:void(0);">Buy Ethereum</a></li>
                        <li><a href="javascript:void(0);">Buy Litecoin</a></li>
                        <li><a href="javascript:void(0);">Supported countries</a></li>
                        <li><a href="javascript:void(0);">Status</a></li>
                      </ul>
                      <ul className="footer-links-card social-links-ul wow fadeInUp" data-wow-delay="0.10s">
                        <li className="footer-links-title">Contact & Follow</li>
                        <li><a href="javascript:void(0);">Help Center</a></li>
                        <li><a href="javascript:void(0);">Contact us</a></li>
                        <li>
                          <ol className="footer-social-media">
                            <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="javascript:void(0);"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          </ol>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Links Code End  */}
          </div>
          {/* Copyright Code Start  */}
          <div className="copyright-bar wow fadeInDown" data-wow-delay="0.10s">
            <p>Copyright © 2021 FTT. All rights reserved.</p>
          </div>
          {/* Copyright Code End  */}
        </footer>
        // Footer Code End         
    )
}

Footer.propTypes = {

}

export default Footer
