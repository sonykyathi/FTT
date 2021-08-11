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
                    <h3>Today’s investment</h3> 
                    <p>in FTT is the future towards stability of your digital money.</p>
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
                    <p>Financial Tech Token-FTT is a buy, sell, store and earn enabler. It is run on Binance Smart Chain, which adheres to the BEP-20 standard, being pegged to real-world assets the US dollar, FTT avoids the price volatility of cryptocurrency trading markets. It maintains price stability with an advantageous transactional speed. FTT provides prompt processing, anonymity, and protection since it runs on the Binance blockchain.</p>
                    <a href="mailto:info@ftttoken.com" className="footer-support-link">info@ftttoken.com</a>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="row">
                    <div className="useful-links">
                      <ul className="footer-links-card wow fadeInUp" data-wow-delay="0.10s">
                        <li className="footer-links-title">Company</li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Our Services</a></li>
                        <li><a href="/">Technology</a></li>
                        <li><a href="/">Roadmap</a></li>
                        <li><a href="/aboutus">About us</a></li>
                      </ul>
                      <ul className="footer-links-card wow fadeInUp" data-wow-delay="0.10s">
                        <li className="footer-links-title">Informations</li>
                        <li><a href="/faq" target="_blank">FAQ</a></li>
                        <li><a href="javascript:void(0);">Privacy policy</a></li>
                        <li><a href="javascript:void(0);">Supported country</a></li>
                        <li><a href="javascript:void(0);">Blog</a></li>
                        <li><a href="javascript:void(0);">Help Center</a></li>
                        <li><a href="javascript:void(0);">Contact us</a></li>
                      </ul>
                      {/* <ul className="footer-links-card wow fadeInUp" data-wow-delay="0.10s">
                        <li className="footer-links-title">Learn</li>
                        <li><a href="javascript:void(0);">Buy Bitcoin</a></li>
                        <li><a href="javascript:void(0);">Buy Bitcoin Cash</a></li>
                        <li><a href="javascript:void(0);">Buy Ethereum</a></li>
                        <li><a href="javascript:void(0);">Buy Litecoin</a></li>
                        <li><a href="javascript:void(0);">Status</a></li>
                      </ul> */}
                      <ul className="footer-links-card social-links-ul wow fadeInUp" data-wow-delay="0.10s">
                        <li className="footer-links-title">Follow us</li>
                        <li>
                          <ol className="footer-social-media">
                            <li>
                              <i className="fa fa-facebook" aria-hidden="true"></i>
                              <span>
                                <a href="https://www.facebook.com/de.fitt.1">Facebook 1</a>
                                <a href="https://www.facebook.com/groups/defitt">Facebook 2</a>
                                <a href="https://www.facebook.com/defittfirefly">Facebook 3</a>
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-twitter" aria-hidden="true"></i>
                              <span>
                                <a href="https://twitter.com/Defitt_ftt ">Twitter</a>
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-linkedin" aria-hidden="true"></i>
                              <span>
                                <a href="https://www.linkedin.com/in/defitt-financial-services/">Linkedin 1</a>
                                <a href="https://www.linkedin.com/company/defitt-ftt/">Linkedin 2</a>
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-instagram" aria-hidden="true"></i>
                              <span>
                              <a href="https://www.instagram.com/defi.tt/">Instagram</a>
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-youtube" aria-hidden="true"></i>
                              <span><a href="https://www.youtube.com/channel/UCyO9CUPft6N_xpnAl4pZONg">YouTube</a></span>
                            </li>
                            <li>
                              <i className="fa fa-quora" aria-hidden="true"></i>
                              <span><a href="https://defitt.quora.com/">Quora</a></span>
                            </li>
                            <li>
                              <i className="fa fa-reddit" aria-hidden="true"></i>
                              <span><a href="https://www.reddit.com/user/Defitt/">Reddit</a></span>
                            </li>
                            <li>
                              <i className="fa fa-medium" aria-hidden="true"></i>
                              <span><a href="https://medium.com/@defitt">Medium</a></span>
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
