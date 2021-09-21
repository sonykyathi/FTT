import React from 'react'
import PropTypes from 'prop-types'

const ProductsModal = props => {
    return (
        <React.Fragment>
            {/* Product Feature Modal */}
              <div class="modal feature-modal" id="defiPlayModal">
                <div class="modal-dialog">
                    <div class="modal-content gredient-bg">
                        <button type="button" class="close" data-dismiss="modal">×</button>
                        <div class="feature-wrapper">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-content-center">
                                    <div className="feature-headings focus-arrow section-title-lg white ">
                                    <h3>DfittPlay Features</h3>
                                    <p>One of the topmost online trading exchanges in the cryptocurrency industry</p>
                                    <button type="button" className="btn-style-sm btn-blue">Find out More</button>
                                    <img src="theme-assets/images/focus-arrow.png" className="img-fluid focus-arrow-img" alt=""/>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                                    <div className="feature-points-list">
                                    <ul>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-01.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">01</h2>
                                            <h4 className="fp-title">Integrated Wallet</h4>
                                            <p className="fp-description">Have a wallet already skip this<br/>step. or<a href="javascript:void(0);">Create an account here</a>.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-02.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">02</h2>
                                            <h4 className="fp-title">Mobile App</h4>
                                            <p className="fp-description">Simply<a href="javascript:void(0);">Download </a>the mobile App to<br/>start selling and buying crypto assets</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
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
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

ProductsModal.propTypes = {

}

export default ProductsModal
