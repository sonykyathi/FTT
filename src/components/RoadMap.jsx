import React from 'react'
import PropTypes from 'prop-types'

const RoadMap = props => {
    return (
        // Roadmap Code Start
        <section className="roadmap-wrapper gredient-bg poly-bg section-gap-140" id="roadmapLink">
          <div className="container">
            <div className="roadmap-content">
              <div className="section-title-md white text-center wow fadeInUp" data-wow-delay="0.10s">
                <h3>Roadmap</h3>
                <p>FTT token will be fully integrated into a number of DEFItt verticals, which will be launched one by one by the DEFItt team. Get to know each platform and use FTT to access all services.</p>
              </div>
              <div className="timeline-area">
                <ol id="fttTimeline">
                  <li className="timeline-bullets"></li>
                  <li className="active">
                    <h4 className="timeline-date">June 5, 2021</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-play.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title">DFItt Play</h3>
                      <p className="timeline-card-detail">Play and earn with FTT</p>
                    </div>
                  </li>
                  <li>
                    <h4 className="timeline-date">Oct 13, 2021</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-startup.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title">DeFi Startup </h3>
                      <p className="timeline-card-detail">Bridge between investors and entrepreneurs</p>
                    </div>
                  </li>
                  <li>
                    <h4 className="timeline-date">Dec 3, 2021</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-tradx.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title">DeFi TradX</h3>
                      <p className="timeline-card-detail">A revolutionary crypto exchange</p>
                    </div>
                  </li>
                  <li>
                    <h4 className="timeline-date">Dec 28, 2021</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-kampus.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title">DeFi Kampus</h3>
                      <p className="timeline-card-detail">A new approach to education</p>
                    </div>
                  </li>
                  <li>
                    <h4 className="timeline-date">Jan 22, 2022</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-nirvaana.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title">DeFi Nirvaana</h3>
                      <p className="timeline-card-detail">Revolutionizing healthcare</p>
                    </div>
                  </li>
                  <li>
                    <h4 className="timeline-date">Feb 16, 2022</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-landscape.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title">DeFi Landscapes</h3>
                      <p className="timeline-card-detail">Secure real estate purchases</p>
                    </div>
                  </li>
                  <li>
                    <h4 className="timeline-date">Mar 13, 2022</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-buzaar.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title">DeFi Buzaar</h3>
                      <p className="timeline-card-detail">Fast and secure online shopping</p>
                    </div>
                  </li>
                  <li>
                    <h4 className="timeline-date">April 7, 2022</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-swipecard.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title"> DeFi Swipecard</h3>
                      <p className="timeline-card-detail">Spend your FTT conveniently</p>
                    </div>
                  </li>
                  <li className="timeline-bullets with-line"></li>
                </ol>
                <div className="timeline-arrows text-center">
                    <button className="arrow arrow__prev btn-arrow"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                    <button className="arrow arrow__next btn-arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        // Roadmap Code End
    )
}

RoadMap.propTypes = {

}

export default RoadMap
