import React from 'react'
import PropTypes from 'prop-types'
import ProductsModal from './layout/modal';

const Products = props => {
    return (
      <React.Fragment>
        <section className="our-products-wrapper section-gap-140" id="productsLink">
          <div className="container">
            <div className="our-product-content">
              <div className="section-title-md text-center wow fadeInUp" data-wow-delay="0.10s">
                <h3>Our Products</h3>
                <p>FTT is a cryptocurrency asset that unlocks access into a wide array of blockchain-based platforms and services. Welcome to a new era of financial freedom.</p>
              </div>
              <div className="product-cards-wrapper">
                <ol id="productCard">
                  <li id="proDefistartup">
                    <div className="product-card-block wow fadeInRight" data-wow-delay="0.10s">
                      <div className="product-head">
                        <div className="product-icon">
                          <img src="theme-assets/images/product-icon.svg" className="img-fluid" alt=""/>
                        </div>
                        <div className="product-name-salogan">
                          <h4 className="product-name">DeFi Startup </h4>
                          <p className="product-salogan">Bridge between investors and entrepreneurs</p>
                        </div>
                      </div>
                      <p className="product-description">DeFi Startup provides a digital platform that connects investors with aspiring entrepreneurs seeking financing for their blockchain company. </p>
                      <a href="javascript:void(0);" className="findmore-link"data-toggle="modal" data-target="#defiStartUpModal">Find Out More<i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                    </div>
                  </li>
                  <li id="proDefiplay">
                    <div className="product-card-block wow fadeInLeft" data-wow-delay="0.10s">
                      <div className="product-head">
                        <div className="product-icon">
                          <img src="theme-assets/images/product-icon.svg" className="img-fluid" alt=""/>
                        </div>
                        <div className="product-name-salogan">
                          <h4 className="product-name">DFItt Play</h4>
                          <p className="product-salogan">Play and earn with FTT</p>
                        </div>
                      </div>
                      <p className="product-description">DFItt Play is a gaming platform that offers blockchain-based games with well-designed token economics. FTT is used for sign-ups and play-to-earn.</p>
                      <a href="javascript:void(0);" className="findmore-link" data-toggle="modal" data-target="#defiPlayModal">Find Out More<i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                    </div>
                  </li>
                  <li id="proDeficard">
                    <div className="product-card-block wow fadeInDown" data-wow-delay="0.10s">
                      <div className="product-head">
                        <div className="product-icon">
                          <img src="theme-assets/images/product-icon.svg" className="img-fluid" alt=""/>
                        </div>
                        <div className="product-name-salogan">
                          <h4 className="product-name"> DeFi Swipecard</h4>
                          <p className="product-salogan">Spend your FTT conveniently</p>
                        </div>
                      </div>
                      <p className="product-description">DeFi Swipecard is a Visa debit card, allowing users to make daily purchases with a higher spending limit at reduced transaction fees.
                        </p>
                      <a href="javascript:void(0);" className="findmore-link"data-toggle="modal" data-target="#defiCardModal">Find Out More<i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                    </div>
                  </li>
                  <li id="proDefitradx">
                    <div className="product-card-block wow fadeInRight" data-wow-delay="0.10s">
                      <div className="product-head">
                        <div className="product-icon">
                          <img src="theme-assets/images/product-icon.svg" className="img-fluid" alt=""/>
                        </div>
                        <div className="product-name-salogan">
                          <h4 className="product-name">DeFi TradX</h4>
                          <p className="product-salogan">A revolutionary crypto exchange</p>
                        </div>
                      </div>
                      <p className="product-description">DeFi TradX is a cryptocurrency exchange that provides an outstanding trading experience with low fees, high trading volume, and fast liquidity.</p>
                      <a href="javascript:void(0);" className="findmore-link" data-toggle="modal" data-target="#defiTradXModal">Find Out More<i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                    </div>
                  </li>
                  <li id="proDefibuzaar">
                    <div className="product-card-block wow fadeInLeft" data-wow-delay="0.10s">
                      <div className="product-head">
                        <div className="product-icon">
                          <img src="theme-assets/images/product-icon.svg" className="img-fluid" alt=""/>
                        </div>
                        <div className="product-name-salogan">
                          <h4 className="product-name">DeFi Buzaar</h4>
                          <p className="product-salogan">Fast and secure online shopping</p>
                        </div>
                      </div>
                      <p className="product-description">DeFi Buzaar is an e-commerce platform that allows consumers to purchase items from partner merchants using FTT tokens as payment.</p>
                      <a href="javascript:void(0);" className="findmore-link" data-toggle="modal" data-target="#defiBuzaarModal">Find Out More<i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                    </div>
                  </li>
                  <li id="proDefinirvana">
                    <div className="product-card-block wow fadeInDown" data-wow-delay="0.10s">
                      <div className="product-head">
                        <div className="product-icon">
                          <img src="theme-assets/images/product-icon.svg" className="img-fluid" alt=""/>
                        </div>
                        <div className="product-name-salogan">
                          <h4 className="product-name">DeFi Nirvaana</h4>
                          <p className="product-salogan">Revolutionizing healthcare</p>
                        </div>
                      </div>
                      <p className="product-description">DeFi Nirvaana partners with healthcare institutions to enable clients to use cryptocurrency as payment and protect their data.</p>
                      <a href="javascript:void(0);" className="findmore-link" data-toggle="modal" data-target="#defiNirvaanaModal">Find Out More<i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                    </div>
                  </li>
                  <li id="proDefikampus">
                    <div className="product-card-block wow fadeInRight" data-wow-delay="0.10s">
                      <div className="product-head">
                        <div className="product-icon">
                          <img src="theme-assets/images/product-icon.svg" className="img-fluid" alt=""/>
                        </div>
                        <div className="product-name-salogan">
                          <h4 className="product-name">DeFi Kampus</h4>
                          <p className="product-salogan">A new approach to education</p>
                        </div>
                      </div>
                      <p className="product-description">DeFi Kampus partners with education institutions around the globe to use crypto for tuition costs and allow learners to obtain a degree. </p>
                      <a href="javascript:void(0);" className="findmore-link" data-toggle="modal" data-target="#defiKampusModal">Find Out More<i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                    </div>
                  </li>
                  <li id="proDefiland">
                    <div className="product-card-block wow fadeInRight" data-wow-delay="0.10s">
                      <div className="product-head">
                        <div className="product-icon">
                          <img src="theme-assets/images/product-icon.svg" className="img-fluid" alt=""/>
                        </div>
                        <div className="product-name-salogan">
                          <h4 className="product-name">DeFi Landscapes</h4>
                          <p className="product-salogan">Secure real estate purchases</p>
                        </div>
                      </div>
                      <p className="product-description">DeFi Landscapes is a digital platform that provides seamless and secure real estate purchases using FTT token from anywhere in the world.</p>
                      <a href="javascript:void(0);" className="findmore-link" data-toggle="modal" data-target="#defiLandscapeModal">Find Out More<i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                    </div>
                  </li>
                </ol>
                <div className="timeline-arrows product-arrows text-center">
                  <button className="arrow arrow__prev2 btn-arrow"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                  <button className="arrow arrow__next2 btn-arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductsModal/>
      </React.Fragment>
    )
}

Products.propTypes = {

}

export default Products
