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
                            <h3>About Us</h3>
                        </div>
                        <div className="about-details wow fadeInRight" data-wow-delay="0.10s">
                            <h3>Financial Tech Token-FTT </h3>
                            < br />
                            <p>Creating reliability and trust in digital money </p>
                            <span>Financial Tech Token (FTT) is a stablecoin pegged 1:1 to the US dollar. It runs on the Binance Smart Chain as a BEP-20 standard token. Through Fit Technologies Limited UK as custodian, FTT ensures that each token is backed by US dollar reserves. FTT provides fast and secure transactions since all data is stored on the Binance blockchain.</span>
                            
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <h3 className="text-title">Why Choose FTT?</h3>
                                    < br />
                                    <p className="text-pera">Blockchain technology has enabled remarkable technological innovations such as distributed ledgers, decentralized trust, smart contracts, and cryptocurrencies. With FTT, we will revolutionize money to improve our global economic system.</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <h3 className="text-title">Revolutionizing Money</h3>
                                    < br />
                                    <p className="text-pera">More than a stablecoin, FTT is a new and improved payments system that promotes transparent, decentralized, immutable, and scalable transactions by combining the security of blockchain and the stability of the US dollar. </p>
                                </div>
                            </div>

                            <div className="about-points-card">
                                <h3 className="text-title m-0">Building trust in digital money</h3>
                                <br />
                                <p className="text-pera">FTT provides seamless transactions to individuals, traders, and exchanges</p>
                                <div className="row mt-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="">
                                            <h4 className="text-list-head">For users:</h4>
                                            <ul className="cms-list-points">
                                                <li>●  FTT provides the same level of security as other cryptocurrencies.</li>
                                                <li>●  Users do not need to open a fiat bank account to store their money.</li>
                                                <li> ● Assets can be easily deposited and withdrawn on crypto exchanges.</li>
                                                <li>  ●	Users can swap between crypto and fiat without any middlemen.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="">
                                            <h4 className="text-list-head">For traders and exchanges:</h4>
                                            <ul className="cms-list-points">
                                                <li>●	FTT offers minimal to zero transaction fees to crypto traders.</li>
                                                <li>●	Traders have a more scalable option to place trade positions.</li>
                                                <li>●	FTT can be used as a fast deposit and withdrawal option.</li>
                                                <li>●	All FTT tokens are guaranteed to have US dollar reserves.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 col-12">
                                    <h3 className="text-title">Our Guarantee
</h3>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <h4 className="text-title-md">Reliability</h4>
                                    <p className="text-pera">FTT transactions are stored and secured through powerful cryptography</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <h4 className="text-title-md">Customer Satisfaction</h4>
                                    <p className="text-pera">FTT offers attractive staking rewards and customer-friendly DeFi products</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <h4 className="text-title-md">Transparency</h4>
                                    <p className="text-pera">All types of transaction data are publicly available anywhere in the world</p>
                                </div>
                            </div>

                            <br/>
                            <br/>

                            <h4 className="text-title-md">FTT holds its place as a reliable partner in the digital asset space</h4>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
