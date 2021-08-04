import React from 'react'
import PropTypes from 'prop-types'

const Team = props => {
    return (
        // Team Code Start
        <section className="team-wrapper gredient-bg poly-bg">
          <div className="container">
            <div className="team-content section-gap-140">
              <div className="section-title-md white text-center wow fadeInUp" data-wow-delay="0.10s">
                <h3>Our Team</h3>
                <p>Board Members</p>
              </div>
              <div className="team-card-holder">
                <div className="team-card wow fadeInDown" data-wow-delay="0.20s">
                  <div className="team-picture">
                    <img src="theme-assets/images/team-img-01.png" className="img-fluid" alt=""/>
                  </div>
                  <h3 className="team-name">H.E Mohamed Khalid Mohamed Al Ali</h3>
                  <p className="team-salogan">Co-Chairman</p>
                  <div className="team-social-bar">
                    <ul>
                      <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-card wow fadeInDown" data-wow-delay="0.30s">
                  <div className="team-picture">
                    <img src="theme-assets/images/team-img-02.png" className="img-fluid" alt=""/>
                  </div>
                  <h3 className="team-name">Ajit Singh Chaddha</h3>
                  <p className="team-salogan">Founder & Co-Chairman</p>
                  <div className="team-social-bar">
                    <ul>
                      <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-card wow fadeInDown" data-wow-delay="0.40s">
                  <div className="team-picture">
                    <img src="theme-assets/images/team-img-03.png" className="img-fluid" alt=""/>
                  </div>
                  <h3 className="team-name">Dalia MukerJee</h3>
                  <p className="team-salogan">CEO</p>
                  <div className="team-social-bar">
                    <ul>
                      <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        // Team Code End
    )
}

Team.propTypes = {

}

export default Team
