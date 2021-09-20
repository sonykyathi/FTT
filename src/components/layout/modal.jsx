import React from 'react'
import PropTypes from 'prop-types'

const ProductsModal = props => {
    return (
        <React.Fragment>
              <div class="modal feature-modal" id="defiStartupModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <section className="feature-wrapper gredient-bg section-gap-120">
                                <div className="container" id="serviceLink">
                                    <div className="row">
                                    <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-content-center">
                                        <div className="feature-headings focus-arrow section-title-lg white wow fadeInRight" data-wow-delay="0.10s">
                                        <h3>Our Features</h3>
                                        <p>One of the topmost online trading exchanges in the cryptocurrency industry</p>
                                        <button type="button" className="btn-style-sm btn-blue">Find out More</button>
                                        <img src="theme-assets/images/focus-arrow.png" className="img-fluid focus-arrow-img" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="feature-points-list">
                                        <ul>
                                            <li className="feature-point wow fadeInLeft" data-wow-delay="0.15s">
                                            <div className="feature-icon">
                                                <img src="theme-assets/images/feature-icon-01.svg" className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-point-content">
                                                <h2 className="fp-count montserrat-font">01</h2>
                                                <h4 className="fp-title">Integrated Wallet</h4>
                                                <p className="fp-description">Have a wallet already skip this<br/>step. or<a href="javascript:void(0);">Create an account here</a>.</p>
                                            </div>
                                            </li>
                                            <li className="feature-point wow fadeInLeft" data-wow-delay="0.30s">
                                            <div className="feature-icon">
                                                <img src="theme-assets/images/feature-icon-02.svg" className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-point-content">
                                                <h2 className="fp-count montserrat-font">02</h2>
                                                <h4 className="fp-title">Mobile App</h4>
                                                <p className="fp-description">Simply<a href="javascript:void(0);">Download </a>the mobile App to<br/>start selling and buying crypto assets</p>
                                            </div>
                                            </li>
                                            <li className="feature-point wow fadeInLeft" data-wow-delay="0.45s">
                                            <div className="feature-icon">
                                                <img src="theme-assets/images/feature-icon-03.svg" className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-point-content">
                                                <h2 className="fp-count montserrat-font">03</h2>
                                                <h4 className="fp-title">Two-factor Authentication</h4>
                                                <p className="fp-description">Security with<a href="javascript:void(0);">Two-Factor Authentication</a><br/>to verify themselves.</p>
                                            </div>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

ProductsModal.propTypes = {

}

export default ProductsModal
