import React from 'react'

import HeaderNavbar from "../layout/headerNavbar";
import Footer from "../layout/Footer";

export default function AboutusPage() {
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
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp" data-wow-delay="0.10s">
                                    <a href="javascript:void(0);" className="gallery-thumbnail-card">
                                        <img className="img-fluid gt-tag" src="https://qph.fs.quoracdn.net/main-qimg-4079c882451673a969ea7167d61bc7e1" alt=""/>
                                    </a>
                                </div>
                               
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp" data-wow-delay="0.10s">
                                    <a href="javascript:void(0);" className="gallery-thumbnail-card">
                                        <iframe className="gt-tag" src="https://www.youtube.com/embed/Y94LNw5SUbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                    </a>
                                </div>
                               
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp" data-wow-delay="0.10s">
                                    <a href="javascript:void(0);" className="gallery-thumbnail-card">
                                        <iframe className="gt-tag" src="https://www.youtube.com/embed/LPyxG2uKGbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                    </a>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp" data-wow-delay="0.10s">
                                    <a href="javascript:void(0);" className="gallery-thumbnail-card">
                                        <iframe className="gt-tag" src="https://www.youtube.com/embed/SGkwNe6PHhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                    </a>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
