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
                        <div className="about-details wow fadeInRight" data-wow-delay="0.10s">
                            <h3>Financial Tech Token-FTT </h3>
                            <p>Creating reliability & trust in digital money </p>
                            <span>Financial Tech Token-FTT is a buy, sell, store, trade, transfer, and earn enabler. It’s a  BEP-20 token pegged 1:1 to the U.S. dollar, designed to be readily redeemed, and  serves as a tool for holders to use to minimize volatility when partaking in the  cryptocurrency market. FTT is issued by FIT TECHNOLOGIES UK LIMITED and fully  backed by the dollar, as such it is secure and attested, and to ensure that complete  backing is maintained, audits are conducted by an independent firm. Deployed on the  Binance Smart Chain network, with high degrees of decentralisation and security, FTT  is safe and reliable.</span>
                            
                            <h3 className="text-title">Why Choose FTT:</h3>
                            <p className="text-pera">Blockchain technology has enabled  remarkable advances such as  distributed ledgers, decentralized trust,  smart contracts, and so on. It has not,  however, improved on the underlying  principles that comprise money, nor has  it built the public trust necessary to  attain universal adoption. </p>

                            <h4 className="text-title-md">Enhancing the  effectiveness of  money</h4>
                            <p className="text-pera">FTT is a new and improved payments system for the world – one that promotes more  secure transactions, transparent, decentralised, immutable, rapid, and easy to use by  combining the reliability and stability that the US dollar provides with the effectiveness  of blockchain technology. FTT is designed to leverage new blockchain technologies to  improve money's efficacy while being supported by a traditional infrastructure that  assures its integrity. </p>

                            <h3 className="text-title">FTT: Building trust in digital money</h3>
                            <p className="text-pera">FTT allows individuals, traders, and exchanges to transact seamlessly</p>
                            <h4 className="text-list-head">For individuals:</h4>
                            <ul className="cms-list-points">
                                <li>✔  FTT has cryptocurrency characteristics and may serve the same purpose.</li>
                                <li>✔  There is no need to open a fiat bank account to store monetary assets.</li>
                                <li>✔  Avoid the risk of retaining fiat on exchanges. Transfer crypto-fiat into and out  of exchanges as quickly as possible.</li>
                                <li>✔  Able to trading in USD/fiat currency without the use of a middleman.</li>
                            </ul>
                            <h4 className="text-list-head">For traders & exchanges:</h4>
                            <ul className="cms-list-points">
                                <li>✔  Improving transaction fees that are ineffective and undesired.</li>
                                <li>✔  Able to choose the best payment providers for an exchange.</li>
                                <li>✔  Reduce the extremely costly prices of value transfers.</li>
                                <li>✔  Improve exceptionally low and unfavorable currency conversion costs.</li>
                                <li>✔  Rather than a typical bank or payment provider, exchanges can take FTT as a  deposit, withdrawal, or storage option.</li>
                                <li>✔  Avoid chargebacks, save money, and have more privacy.</li>
                                <li>✔  Since items are priced in USD/Fiat value, there are no changing purchasing windows.</li>
                            </ul>

                            <h3 className="text-title">What you get</h3>
                            <h4 className="text-title-md">Reliability</h4>
                            <p className="text-pera">Get a 100% of overall service satisfaction & quick execution.</p>
                            <h4 className="text-title-md">#1 customer satisfaction</h4>
                            <p className="text-pera">Impeccable customer service.</p>
                            <h4 className="text-title-md">Transparency</h4>
                            <p className="text-pera">We're highly regulated so you can invest in our products in confidence.</p>

                            <br/>
                            <br/>

                            <h3 className="text-title">FTT holds its place as a reliable partner in the digital asset space</h3>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
