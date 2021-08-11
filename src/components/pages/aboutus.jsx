import React from 'react'

import HeaderNavbar from "../layout/headerNavbar";
import Footer from "../layout/Footer";

export default function AboutusPage() {
    return (
        <React.Fragment>
            <HeaderNavbar/>
            <div className="cms-content-area">
                <div className="container">
                    <div className="about-content cms-content">
                        <div className="cms-heading text-center wow fadeInUp" data-wow-delay="0.10s">
                            <h3>About us</h3>
                        </div>
                        <div className="about-details">
                            <h3>Financial Tech Token-FTT </h3>
                            <p>Creating reliability & trust in digital money </p>
                            <span>Financial Tech Token-FTT is a buy, sell, store, trade, transfer, and earn enabler. It’s a  BEP-20 token pegged 1:1 to the U.S. dollar, designed to be readily redeemed, and  serves as a tool for holders to use to minimize volatility when partaking in the  cryptocurrency market. FTT is issued by FIT TECHNOLOGIES UK LIMITED and fully  backed by the dollar, as such it is secure and attested, and to ensure that complete  backing is maintained, audits are conducted by an independent firm. Deployed on the  Binance Smart Chain network, with high degrees of decentralisation and security, FTT  is safe and reliable.</span>
                            <h3 className="text-title">Why Choose FTT:</h3>
                            <p className="text-pera">Blockchain technology has enabled  remarkable advances such as  distributed ledgers, decentralized trust,  smart contracts, and so on. It has not,  however, improved on the underlying  principles that comprise money, nor has  it built the public trust necessary to  attain universal adoption. </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
