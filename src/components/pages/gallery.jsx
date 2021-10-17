import React, { Fragment, useEffect, useState } from 'react';

import HeaderNavbar from "../layout/headerNavbar";
import Footer from "../layout/Footer";
import axios from 'axios';
export default function AboutusPage() {
    const [state, setstate] = useState({ youtube: [], page:0, disabled:false })

    useEffect(() => {
      fetchVideos()
    }, [])
  
  
    const map = (data) => {
      return 'https://www.youtube.com/embed/' + data.id.videoId
    }
  
    const fetchVideos = async () => {
      if (state.disabled) {
        return false
      }
      let page = state.page + 10;
      console.log(page, "===page")
      setstate((prevState) => ({
        ...prevState,
        page,
      }));
  
      const options = {
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCacQWll1bsha_0ivuzM8nThhvDK4EH6Mk&channelId=UC16kabwz_ayjbCX-ktl5-dQ&part=snippet,id&order=date&maxResults=${page}`
      };
      const result = await axios(options)
      let data = result?.data?.items.map(map)
      if (data.length < page) {
        setstate((prevState) => ({
          ...prevState,
          disabled: true,
        }));
      }
      setstate((prevState) => ({
        ...prevState,
        youtube: data
      }));
    }
    return (
        <React.Fragment>
            <HeaderNavbar/>
            <div className="cms-content-area gallery-page-wrapper">
                <div className="container">
                    <div className="gallery-content cms-content">
                        <div className="cms-heading text-center wow fadeInUp" data-wow-delay="0.10s">
                            <h3>Social Gallery</h3>
                        </div>
                        <div className="gallery-post-list">
              <div className="row text-center">
                {
                  state.youtube.length > 0 &&
                  state.youtube.map((val, key) => {
                    return (
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp"  key={key}>
                        <a href="javascript:void(0);" className="gallery-thumbnail-card">
                          <iframe className="gt-tag" src={val} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </a>
                      </div>
                    )
                  })
                }

               

              </div>
              <div className="about-btn" style={{textAlign:"center"}}>
                <button class="btn btn-lg btn-gradient-purple btn-glow animated" disabled={state.disabled} onClick={fetchVideos}>Load More</button>
                </div>
            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
