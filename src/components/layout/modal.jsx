import React from 'react'
import PropTypes from 'prop-types'

const ProductsModal = props => {
    return (
        <React.Fragment>
            {/* Product Feature Modal */}
            {/* Feature 01 Pop up */}
            <div class="modal feature-modal" id="defiStartUpModal">
                <div class="modal-dialog">
                    <div class="modal-content gredient-bg">
                        <button type="button" class="close" data-dismiss="modal">×</button>
                        <div class="feature-wrapper">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-content-center">
                                    <div className="feature-headings focus-arrow section-title-lg white ">
                                    <h3> DeFi Startup Features</h3>
                                    <p>Bridge between investors and entrepreneurs </p>
                                    <button type="button" className="btn-style-sm btn-blue">Read More</button>
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
                                            <p className="fp-description"><a href="javascript:void(0);">Create an FTT account here</a><br/>If you have a wallet already, you can skip this step.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-02.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">02</h2>
                                            <h4 className="fp-title">Mobile App</h4>
                                            <p className="fp-description">Simply<a href="javascript:void(0);">download  </a>the DeFi Startup mobile app <br/>to start buying and selling crypto.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-03.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">03</h2>
                                            <h4 className="fp-title">Two-factor Authentication</h4>
                                            <p className="fp-description">For added security, enable two-factor authentication on your mobile.</p>
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
            {/* Feature 02 Pop up */}
            <div class="modal feature-modal" id="defiPlayModal">
                <div class="modal-dialog">
                    <div class="modal-content gredient-bg">
                        <button type="button" class="close" data-dismiss="modal">×</button>
                        <div class="feature-wrapper">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-content-center">
                                    <div className="feature-headings focus-arrow section-title-lg white ">
                                    <h3>DFItt Play Features</h3>
                                    <p>Play and earn with FTT</p>
                                    <button type="button" className="btn-style-sm btn-blue">Read More</button>
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
                                            <p className="fp-description"><a href="javascript:void(0);">Create an FTT account here</a><br/>If you have a wallet already, you can skip this step.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-02.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">02</h2>
                                            <h4 className="fp-title">Mobile App</h4>
                                            <p className="fp-description">Simply<a href="javascript:void(0);">download  </a>the DeFi Startup mobile app <br/>to start buying and selling crypto.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-03.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">03</h2>
                                            <h4 className="fp-title">Two-factor Authentication</h4>
                                            <p className="fp-description">For added security, enable two-factor authentication on your mobile.</p>
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
            {/* Feature 03 Pop up */}
            <div class="modal feature-modal" id="defiCardModal">
                <div class="modal-dialog">
                    <div class="modal-content gredient-bg">
                        <button type="button" class="close" data-dismiss="modal">×</button>
                        <div class="feature-wrapper">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-content-center">
                                    <div className="feature-headings focus-arrow section-title-lg white ">
                                    <h3> DeFi Swipecard Features</h3>
                                    <p>Spend your FTT conveniently</p>
                                    <button type="button" className="btn-style-sm btn-blue">Read More</button>
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
                                            <p className="fp-description"><a href="javascript:void(0);">Create an FTT account here</a><br/>If you have a wallet already, you can skip this step.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-02.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">02</h2>
                                            <h4 className="fp-title">Mobile App</h4>
                                            <p className="fp-description">Simply<a href="javascript:void(0);">download  </a>the DeFi Startup mobile app <br/>to start buying and selling crypto.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-03.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">03</h2>
                                            <h4 className="fp-title">Two-factor Authentication</h4>
                                            <p className="fp-description">For added security, enable two-factor authentication on your mobile.</p>
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
            {/* Feature 04 Pop up */}
            <div class="modal feature-modal" id="defiTradXModal">
                <div class="modal-dialog">
                    <div class="modal-content gredient-bg">
                        <button type="button" class="close" data-dismiss="modal">×</button>
                        <div class="feature-wrapper">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-content-center">
                                    <div className="feature-headings focus-arrow section-title-lg white ">
                                    <h3>DeFi TradX Features</h3>
                                    <p>A revolutionary crypto exchange</p>
                                    <button type="button" className="btn-style-sm btn-blue">Read More</button>
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
                                            <p className="fp-description"><a href="javascript:void(0);">Create an FTT account here</a><br/>If you have a wallet already, you can skip this step.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-02.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">02</h2>
                                            <h4 className="fp-title">Mobile App</h4>
                                            <p className="fp-description">Simply<a href="javascript:void(0);">download  </a>the DeFi Startup mobile app <br/>to start buying and selling crypto.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-03.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">03</h2>
                                            <h4 className="fp-title">Two-factor Authentication</h4>
                                            <p className="fp-description">For added security, enable two-factor authentication on your mobile.</p>
                                        </div>
                                        </li>
                                    </ul>
                                    </div>
                                </div><div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                                    <div className="feature-points-list">
                                    <ul>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-01.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">01</h2>
                                            <h4 className="fp-title">Integrated Wallet</h4>
                                            <p className="fp-description"><a href="javascript:void(0);">Create an FTT account here</a><br/>If you have a wallet already, you can skip this step.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-02.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">02</h2>
                                            <h4 className="fp-title">Mobile App</h4>
                                            <p className="fp-description">Simply<a href="javascript:void(0);">download  </a>the DeFi Startup mobile app <br/>to start buying and selling crypto.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-03.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">03</h2>
                                            <h4 className="fp-title">Two-factor Authentication</h4>
                                            <p className="fp-description">For added security, enable two-factor authentication on your mobile.</p>
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
            {/* Feature 05 Pop up */}
            <div class="modal feature-modal" id="defiBuzaarModal">
                <div class="modal-dialog">
                    <div class="modal-content gredient-bg">
                        <button type="button" class="close" data-dismiss="modal">×</button>
                        <div class="feature-wrapper">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-content-center">
                                    <div className="feature-headings focus-arrow section-title-lg white ">
                                    <h3>DeFi Buzaar Features</h3>
                                    <p>Fast and secure online shopping</p>
                                    <button type="button" className="btn-style-sm btn-blue">Read More</button>
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
                                            <p className="fp-description"><a href="javascript:void(0);">Create an FTT account here</a><br/>If you have a wallet already, you can skip this step.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-02.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">02</h2>
                                            <h4 className="fp-title">Mobile App</h4>
                                            <p className="fp-description">Simply<a href="javascript:void(0);">download  </a>the DeFi Startup mobile app <br/>to start buying and selling crypto.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-03.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">03</h2>
                                            <h4 className="fp-title">Two-factor Authentication</h4>
                                            <p className="fp-description">For added security, enable two-factor authentication on your mobile.</p>
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
            {/* Feature 06 Pop up */}
            <div class="modal feature-modal" id="defiNirvaanaModal">
                <div class="modal-dialog">
                    <div class="modal-content gredient-bg">
                        <button type="button" class="close" data-dismiss="modal">×</button>
                        <div class="feature-wrapper">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-content-center">
                                    <div className="feature-headings focus-arrow section-title-lg white ">
                                    <h3>DeFi Nirvaana Features</h3>
                                    <p>Revolutionizing healthcare</p>
                                    <button type="button" className="btn-style-sm btn-blue">Read More</button>
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
                                            <p className="fp-description"><a href="javascript:void(0);">Create an FTT account here</a><br/>If you have a wallet already, you can skip this step.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-02.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">02</h2>
                                            <h4 className="fp-title">Mobile App</h4>
                                            <p className="fp-description">Simply<a href="javascript:void(0);">download  </a>the DeFi Startup mobile app <br/>to start buying and selling crypto.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-03.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">03</h2>
                                            <h4 className="fp-title">Two-factor Authentication</h4>
                                            <p className="fp-description">For added security, enable two-factor authentication on your mobile.</p>
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
            {/* Feature 07 Pop up */}
            <div class="modal feature-modal" id="defiKampusModal">
                <div class="modal-dialog">
                    <div class="modal-content gredient-bg">
                        <button type="button" class="close" data-dismiss="modal">×</button>
                        <div class="feature-wrapper">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-content-center">
                                    <div className="feature-headings focus-arrow section-title-lg white ">
                                    <h3>DeFi Kampus Features</h3>
                                    <p>A new approach to education</p>
                                    <button type="button" className="btn-style-sm btn-blue">Read More</button>
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
                                            <p className="fp-description"><a href="javascript:void(0);">Create an FTT account here</a><br/>If you have a wallet already, you can skip this step.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-02.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">02</h2>
                                            <h4 className="fp-title">Mobile App</h4>
                                            <p className="fp-description">Simply<a href="javascript:void(0);">download  </a>the DeFi Startup mobile app <br/>to start buying and selling crypto.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-03.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">03</h2>
                                            <h4 className="fp-title">Two-factor Authentication</h4>
                                            <p className="fp-description">For added security, enable two-factor authentication on your mobile.</p>
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
            {/* Feature 08 Pop up */}
            <div class="modal feature-modal" id="defiLandscapeModal">
                <div class="modal-dialog">
                    <div class="modal-content gredient-bg">
                        <button type="button" class="close" data-dismiss="modal">×</button>
                        <div class="feature-wrapper">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 d-flex align-content-center">
                                    <div className="feature-headings focus-arrow section-title-lg white ">
                                    <h3>DeFi Landscapes Features</h3>
                                    <p>Secure real estate purchases</p>
                                    <button type="button" className="btn-style-sm btn-blue">Read More</button>
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
                                            <p className="fp-description"><a href="javascript:void(0);">Create an FTT account here</a><br/>If you have a wallet already, you can skip this step.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-02.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">02</h2>
                                            <h4 className="fp-title">Mobile App</h4>
                                            <p className="fp-description">Simply<a href="javascript:void(0);">download  </a>the DeFi Startup mobile app <br/>to start buying and selling crypto.</p>
                                        </div>
                                        </li>
                                        <li className="feature-point">
                                        <div className="feature-icon">
                                            <img src="theme-assets/images/feature-icon-03.svg" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="feature-point-content">
                                            <h2 className="fp-count montserrat-font">03</h2>
                                            <h4 className="fp-title">Two-factor Authentication</h4>
                                            <p className="fp-description">For added security, enable two-factor authentication on your mobile.</p>
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
