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
                <p>FTT leads a new era of financial freedom.</p>
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
                          <h4 className="product-name">Defistartup </h4>
                          <p className="product-salogan">Creating a bridge between investors and entrepreneurs.</p>
                        </div>
                      </div>
                      <p className="product-description">Defistartup platform creates a match between investors and entrepreneurs seeking financing.  Entrepreneurs will upload their ideas and projects on the platform, we would validate and choose and hand them over to interested investors and create a bridge between them.</p>
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
                          <h4 className="product-name">DfittPlay</h4>
                          <p className="product-salogan">Play & Earn with FTT</p>
                        </div>
                      </div>
                      <p className="product-description">DfittPlay is a prominent game site offering blockchain games with welldesigned token economics. FTT is used for sign-ups, play, & earn.</p>
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
                          <h4 className="product-name">Defiswipecard</h4>
                          <p className="product-salogan">Spend your FTT at your convenience</p>
                        </div>
                      </div>
                      <p className="product-description">The Defiswipecard enables you to make everyday purchases while also
                        enjoying higher spending limits at reduced transaction fees.
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
                          <h4 className="product-name">Defitradx</h4>
                          <p className="product-salogan">A trusted exchange on the marketplace</p>
                        </div>
                      </div>
                      <p className="product-description">Defitradx Exchange provides the best execution prices, exceptional
                        customer service, attractive trading volumes, and outstanding liquidity.</p>
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
                          <h4 className="product-name">Defibuzaar</h4>
                          <p className="product-salogan">Quicker, secure & more direct online shopping</p>
                        </div>
                      </div>
                      <p className="product-description">Defibuzaar is an e-commerce platform where consumers can make a purchase and pay with FTT.</p>
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
                          <h4 className="product-name">Definirvaana</h4>
                          <p className="product-salogan">Reviving the healthcare industry’s capabilities</p>
                        </div>
                      </div>
                      <p className="product-description">Healthcare payment on Definirvaana platform is helping to alleviate stress by deflating the existing expenditure, protecting patient data, and improving the overall experience.</p>
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
                          <h4 className="product-name">Defikampus</h4>
                          <p className="product-salogan">A new payment solution for Schools</p>
                        </div>
                      </div>
                      <p className="product-description">FTT is partnering with educational institutions to enable payment of tuition, administrative costs, educational investment, offer scholarships in FTT, make school donations, with FTT instead of cash, all on the Defikampus portal. </p>
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
                          <h4 className="product-name">Defilandscapes</h4>
                          <p className="product-salogan">Real-estate transactions have never been easier</p>
                        </div>
                      </div>
                      <p className="product-description">Avoid any government intervention, forgery, or duplication during real-estate transactions. Buyers can even save on commissions. The process is extremely smooth at every step.</p>
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
