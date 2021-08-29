import React from 'react'

import HeaderNavbar from "../layout/headerNavbar";
import Footer from "../layout/Footer";

export default function faqPage() {
    return (
        <React.Fragment>
            <HeaderNavbar/>
            <div className="cms-content-area faq-page-wraper">
                <div className="container">
                    <div className="faq-content cms-content">
                        <div className="cms-heading text-center wow fadeInUp" data-wow-delay="0.10s">
                            <h3>FAQ's</h3>
                        </div>
                        <div className="ftt-accordian accordion" id="fttAccordian">
                            <div className="card wow fadeInLeft" data-wow-delay="0.10s">
                                <div className="card-header" id="headingOne">
                                <h2>
                                    <button className="btn-accordian" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How is FTT stablecoins different?</button>
                                </h2>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#fttAccordian">
                                    <div className="card-body">
                                        <p>FTT is a stablecoins backed 1:1 by USD and held in reserve by FIT Technologies Limited, UK. FTT has a track record of developing trusted solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card wow fadeInLeft" data-wow-delay="0.10s">
                                <div className="card-header" id="headingTwo">
                                <h2>
                                    <button className="btn-accordian collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How can Customers Create, redeem and transfer FTT?</button>
                                </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#fttAccordian">
                                    <div className="card-body">
                                        <p>This is achieved by having FTT clients generate and redeem FTT on the FTT platform. FTT is generated when people purchase FTT on the FTT platform. FTT customers can convert US dollars for FTT at a 1:1 conversion rate by completing a purchase order. At the point of purchase, the US dollar value of a buy order is taken from, and the corresponding FTT amount is deposited into, a customer's FTT account. Customers redeem FTT when they sell FTT on the FTT platform. The FTT may be transferred using the Binance Smart Chain network.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card wow fadeInLeft" data-wow-delay="0.10s">
                                <div className="card-header" id="headingThree">
                                <h2>
                                    <button className="btn-accordian collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Why does FTT use the Binance Smart Chain?</button>
                                </h2>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#fttAccordian">
                                    <div className="card-body">
                                        <p>Binance Smart Chain is the most frequently used digital asset platform, and it is a decentralised blockchain-based ledger that enables smart contracts. FTT stablecoins adhere to the BEP-20 protocol, which is a smart contract standard on the Binance Smart Chain blockchain.
                                        <br/>
                                        The BEP-20 standard defines a collection of standard functions for managing transactions and keeping track of account balances. The following are some of the benefits of FTT BEP-20tokens:
                                        <ul className="text-bullets">
                                            <h5>High utility</h5>
                                            <li>Wallet support and exchange integration are both seamless. Any provider that has implemented the BEP-20code can support the token on their platform.</li>
                                            <li>An open network allows use-cases that would be unfeasible on a closed network.</li>
                                            <li>Maximum end-user trust
                                                <ul>
                                                    <li>Users do not have to rely on a certain exchange to keep their tokens.</li>
                                                    <li>Lower liquidity risk - any user may redeem from our regulated trust, ensuring they have enough cash on hand.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card wow fadeInLeft" data-wow-delay="0.10s">
                                <div className="card-header" id="headingFour">
                                <h2>
                                    <button className="btn-accordian collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Where can I use my FTT stablecoins outside of the FTT platform?</button>
                                </h2>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#fttAccordian">
                                    <div className="card-body">
                                        <p>FTT is BEP-20 tokens that are built on the Binance Smart Chain blockchain. Because FTT adheres to the standard BEP-20 protocol, many Binance Smart Chain-compatible exchanges and wallet programs have built-in functionality for viewing and transferring any BEP-20token.
                                        <br/>
                                        FTT also maintains partnerships with several digital asset exchanges and renowned platforms, allowing clients to trade, loan, or keep their tokens. Check to discover where FTT tokens are supported.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card wow fadeInLeft" data-wow-delay="0.10s">
                                <div className="card-header" id="headingFive">
                                <h2>
                                    <button className="btn-accordian collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">How quickly can I create or redeem stablecoins?</button>
                                </h2>
                                </div>
                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#fttAccordian">
                                    <div className="card-body">
                                        <p>FTT is treated as USD in our system. That is, when you deposit stablecoins, you will receive USD immediately. You will then be able to withdraw your cash in USD.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card wow fadeInLeft" data-wow-delay="0.10s">
                                <div className="card-header" id="headingSix">
                                <h2>
                                    <button className="btn-accordian collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Why should I hold stablecoins?</button>
                                </h2>
                                </div>
                                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#fttAccordian">
                                    <div className="card-body">
                                        <p>The FTT stablecoin is backed 1:1 by the US dollar and is held by Financial Technologies Limited, UK. stablecoins, unlike dollars in a bank, maybe sent anywhere, at any time. Users' dollars are also safer and more secure when they hold stablecoins since they may exchange them for dollars at any moment with no fees or limitations. This is especially essential when individuals believe their assets are at risk.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card wow fadeInLeft" data-wow-delay="0.10s">
                                <div className="card-header" id="headingSeven">
                                <h2>
                                    <button className="btn-accordian collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">What does custody mean?</button>
                                </h2>
                                </div>
                                <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#fttAccordian">
                                    <div className="card-body">
                                        <p>Custody is a service in which a financial institution keeps assets on the user's behalf. FIT Technologies Limited UK, is the custodian of FTT.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card wow fadeInLeft" data-wow-delay="0.10s">
                                <div className="card-header" id="headingEight">
                                <h2>
                                    <button className="btn-accordian collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">What exactly is a competent custodian?</button>
                                </h2>
                                </div>
                                <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#fttAccordian">
                                    <div className="card-body">
                                        <p>A qualified custodian is a type of organisation that authorities have certified to retain assets on behalf of clients. A bank, for example, is a competent custodian. FIT Technology Limited, UK is also a qualified custodian, which means we are subject to strict government monitoring. You may be certain that your valuables are secure with us. FIT Technology Limited is a company based in the United Kingdom</p>
                                    </div>
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
