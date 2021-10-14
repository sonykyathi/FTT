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
                    <h3>Invest Now</h3> 
                    <p>Invest in the future of digital money today.</p>
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
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="footer-about wow fadeInUp" data-wow-delay="0.10s">
                    <div className="footer-logo">
                      <img src="theme-assets/images/logo-white.png" className="img-fluid" alt=""/>
                    </div>
                    <p>Financial Tech Token (FTT) is a stablecoin pegged 1:1 to the US dollar. It runs on the Binance Smart Chain as a BEP-20 standard token. Through Fit Technologies Limited UK as custodian, FTT ensures that each token is backed by US dollar reserves. FTT provides fast and secure transactions since all data is stored on the Binance blockchain.</p>
          
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="row">
                    <div className="useful-links">
                      <ul className="footer-links-card wow fadeInUp" data-wow-delay="0.10s">
                        <li className="footer-links-title">Company</li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/#productsLink">Products</a></li>
                        {/* <li><a href="/">Our Services</a></li>
                        <li><a href="/">Technology</a></li> */}
                        <li><a href="/#roadmapLink">Roadmap</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                      </ul>
                      <ul className="footer-links-card wow fadeInUp" data-wow-delay="0.10s">
                        <li className="footer-links-title">Information</li>
                        <li><a href="/faq" target="_blank">FAQ</a></li>
                        <li><a href="javascript:void(0);">Privacy Policy</a></li>
                        <li><a href="javascript:void(0);">Supported Countries</a></li>
                        <li><a href="javascript:void(0);">Blog</a></li>
                        <li><a href="javascript:void(0);">Help Center</a></li>
                        <li><a href="/#contactUsLink">Contact Us</a></li>
                      </ul>
                      <ul className="footer-links-card social-links-ul wow fadeInUp" data-wow-delay="0.10s">
                        <li className="footer-links-title">Follow us</li>
                        <li>
                          <ol className="footer-social-media">
                            <li>
                              <i className="fa fa-facebook" aria-hidden="true"></i>
                              <span>
                                <a target="_blank" href="https://www.facebook.com/de.fitt.1">Follow Us</a>
                                <a  target="_blank"href="https://www.facebook.com/DEFIttFTT-107704684841618">Follow Us</a>
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-twitter" aria-hidden="true"></i>
                              <span>
                                <a  target="_blank"href="https://twitter.com/Defitt_ftt ">Twitter</a>
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-linkedin" aria-hidden="true"></i>
                              <span>
                                <a target="_blank" href="https://www.linkedin.com/company/defitt-ftt/">Linkedin</a>
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-instagram" aria-hidden="true"></i>
                              <span>
                              <a target="_blank"href="https://www.instagram.com/defi.tt/">Instagram</a>
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-youtube" aria-hidden="true"></i>
                              <span><a target="_blank" href="https://www.youtube.com/channel/UC16kabwz_ayjbCX-ktl5-dQ">YouTube</a></span>
                            </li>
                            <li>
                              <i className="fa fa-quora" aria-hidden="true"></i>
                              <span><a target="_blank" href="https://defitt.quora.com/">Quora</a></span>
                            </li>
                            <li>
                              <i className="fa fa-reddit" aria-hidden="true"></i>
                              <span><a target="_blank" href="https://www.reddit.com/user/Defitt/">Reddit</a></span>
                            </li>
                            <li>
                              <i className="fa fa-medium" aria-hidden="true"></i>
                              <span><a target="_blank" href="https://medium.com/@defitt">Medium</a></span>
                            </li>
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
