import React from 'react'
import PropTypes from 'prop-types'

const RoadMap = props => {
    return (
        // Roadmap Code Start
        <section className="roadmap-wrapper gredient-bg poly-bg section-gap-140">
          <div className="container" id="roadmapLink">
            <div className="roadmap-content">
              <div className="section-title-md white text-center wow fadeInUp" data-wow-delay="0.10s">
                <h3>Roadmap</h3>
                <p>sed do eiusmod tempor incididunt ut labore</p>
              </div>
              <div className="timeline-area">
                <ol id="fttTimeline">
                  <li className="timeline-bullets"></li>
                  <li className="active">
                    <h4 className="timeline-date">5 June, 2021</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-play.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title">Defittplay</h3>
                      <p className="timeline-card-detail">Lets make some noise together.</p>
                    </div>
                  </li>
                  <li>
                    <h4 className="timeline-date">5 Aug, 2021</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-startup.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title">Defistartup</h3>
                      <p className="timeline-card-detail">Lets Bridge the gap.</p>
                    </div>
                  </li>
                  <li>
                    <h4 className="timeline-date">5 Sep, 2021</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-tradx.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title">Defitradx</h3>
                      <p className="timeline-card-detail">Lets trade with the wise asset - FIT.</p>
                    </div>
                  </li>
                  <li>
                    <h4 className="timeline-date">20 Sep, 2021</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-kampus.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title">Defi Kampus</h3>
                      <p className="timeline-card-detail">Let the future educate you with the technology.</p>
                    </div>
                  </li>
                  <li>
                    <h4 className="timeline-date">13 Oct, 2021</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-nirvaana.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title">Defi Nirvaana</h3>
                      <p className="timeline-card-detail">Your health is your wealth, use it wise with FTT.</p>
                    </div>
                  </li>
                  <li>
                    <h4 className="timeline-date">5 June, 2021</h4>
                    <div className="timeline-check-circle"><i className="fa fa-check" aria-hidden="true"></i></div>
                    <div className="timeline-card">
                      <div className="timeline-card-logo"><img src="theme-assets/images/timeline/defi-play.png" className="img-fluid" alt=""/></div>
                      <h3 className="timeline-card-title">Defittplay</h3>
                      <p className="timeline-card-detail">Lets make some noise together.</p>
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
