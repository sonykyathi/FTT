import React from 'react'
import PropTypes from 'prop-types'

const Products = props => {
    return (
        //  Our Products Code Start 
  <section className="our-products-wrapper section-gap-140">
    <div className="container" id="productsLink">
      <div className="our-product-content">
        <div className="section-title-md text-center wow fadeInUp" data-wow-delay="0.10s">
          <h3>Our Products</h3>
          <p>FTT leads a new era of financial freedom.</p>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
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
              <a href="javascript:void(0);" className="findmore-link">Find Out More<i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
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
              <a href="javascript:void(0);" className="findmore-link">Find Out More<i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
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
              <a href="javascript:void(0);" className="findmore-link">Find Out More<i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
//   Our Products Code End 
    )
}

Products.propTypes = {

}

export default Products
