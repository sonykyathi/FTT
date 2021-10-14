import React from 'react'
import PropTypes from 'prop-types'

const ContactUs = props => {
    return (
        // Contact Us Code Start
        <section className="contact-wrapper graph-bg section-gap-120" id="contactUsLink">
          <div className="container">
            <div className="section-title-md text-center wow fadeInUp" data-wow-delay="0.10s">
              <h3>Contact Us</h3>
              <p>Have any questions or suggestions? Get in touch with us! Leave a comment and feedback on FTT and DEFItt as well.</p>
            </div>
            <div className="contact-card">
              <div className="contact-details wow fadeInRight" data-wow-delay="0.10s">
                <ul>
                  <li>
                    <div className="cd-content">
                      <h4>Call Us</h4>
                      <p>0800 041 8812</p>
                    </div>
                    <div className="cd-icon">
                      <img src="theme-assets/images/cd-01.svg" className="img-fluid" alt=""/>
                    </div>
                  </li>
                  <li>
                    <div className="cd-content">
                      <h4>Email Us</h4>
                      <p>info@ftttoken.com</p>
                    </div>
                    <div className="cd-icon">
                      <img src="theme-assets/images/cd-02.svg" className="img-fluid" alt=""/>
                    </div>
                  </li>
                  <li>
                    <div className="cd-content">
                      <h4>Address</h4>
                      <p>67 Camp Road, Buckinghamshire, SL9 7PF, United Kingdom</p>
                    </div>
                    <div className="cd-icon">
                      <img src="theme-assets/images/cd-03.svg" className="img-fluid" alt=""/>
                    </div>
                  </li>
                  <li>
                    <div className="cd-content">
                      <h4>Open Hours</h4>
                      <p>Sunday - Saturday</p><p>Open 24 hours</p>
                      {/* <p>Monday - Friday,<br/>9:00AM - 05:00PM</p> */}
                    </div>
                    <div className="cd-icon">
                      <img src="theme-assets/images/cd-04.svg" className="img-fluid" alt=""/>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="contact-form wow fadeInLeft" data-wow-delay="0.10s">
                <h3 className="text-center">Write to Us</h3>
                <form>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="form-group">
                        <input type="name" className="form-control" placeholder="Your name"/>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Your email"/>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject"/>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <textarea className="form-control textarea" placeholder="Write your message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="form-group form-button text-center">
                        <button type="button" className="btn-style-lg btn-blue">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        // Contact Us Code End
    )
}

ContactUs.propTypes = {

}

export default ContactUs
