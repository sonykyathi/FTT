import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';


export default function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        state: '',
        email: '',
        countryCode: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const {
        firstName,
        lastName,
        country,
        state,
        email,
        countryCode,
        phone,
        password,
        confirmPassword,
    } = formData;

    const [isRegister, setIsRegister] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordMatch(false);
            setTimeout(() => {
                setPasswordMatch(true);
            }, 3000);
            return;
        }
        axios
            .post(`${process.env.REACT_APP_API}/api/v1/auth/register`, formData)
            .then((response) => {
                setIsRegister('passed');
                setTimeout(() => {
                    setIsRegister('');
                }, 3000);
            })
            .catch((err) => {
                console.log(err.response.data.error);
                setIsRegister('failed');
                setTimeout(() => {
                    setIsRegister('');
                }, 3000);
            });
    };

    return (
        <React.Fragment>
            <div className="head-hero-wrapper header-navbar-bg inner-header login-header">
                <header id="fttHead" className="herd-wrap wow fadeInDown" data-wow-delay="0.10s">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar ftt-navbar navbar-expand-lg">
                                <a className="navbar-brand" href="/">
                                    <img src="theme-assets/images/logo-white.png" className="img-fluid logo-white" alt="" />
                                    <img src="theme-assets/images/logo.png" className="img-fluid logo-color" alt="" />
                                </a>
                                <div className="head-btn ml-auto wow fadeInUp" data-wow-delay="0.65s">
                                    <a href="/login" className="btn-style-md btn-white-outline text-center">Sign in</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
            <div className="entry-page card-justify-center section-gap-140">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <div className="col-md-5 col-sm-12 col-12">
                            <div className="entry-card-img">
                                <img src="theme-assets/images/hero-coin.png" className="img-fluid" alt=""/>
                            </div>
                        </div> */}
                        <div className="col-md-12 col-sm-12 col-12">
                            <div className="entry-card">
                                {/* <div className="login-logo">
                                    <a href="/" ><img src="theme-assets/images/logo.png" className="img-fluid" alt=""/></a>
                                </div> */}
                                <h2>Create your account</h2>
                                <form onSubmit={onSubmit}>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>First Name</label>
                                                <input type="text" className="form-control" placeholder="Your First Name"
                                                    name='firstName'
                                                    value={firstName}
                                                    onChange={onChange}
                                                    placeholder='Enter your first name.'
                                                    required

                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>Last Name</label>
                                                <input type="text" className="form-control" placeholder="Your Last Name"
                                                    name='lastName'
                                                    value={lastName}
                                                    onChange={onChange}
                                                    required

                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>Email</label>
                                                <input type="email" className="form-control" placeholder="Your Email"
                                                    name='email'
                                                    onChange={onChange}
                                                    value={email}
                                                    required

                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>Phone No.</label>
                                                <input type="phone" className="form-control" placeholder="Your Phone"
                                                   name="phone"
                                                   onChange={onChange}
                                                    value={phone}
                                                    placeholder='Enter Your Contact Number.'
                                                    required

                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>Country</label>
                                                <select className="form-control" Size=""
                                                    onChange={onChange}
                                                    name='country'
                                                    value={country}
                                                >
                                                    <option value='' selected disabled hidden>
                                                        Select
                                                    </option>
                                                    <option value='Afghanistan'>Afghanistan</option>
                                                    <option value='Åland Islands'>Åland Islands</option>
                                                    <option value='Albania'>Albania</option>
                                                    <option value='Algeria'>Algeria</option>
                                                    <option value='American Samoa'>American Samoa</option>
                                                    <option value='Andorra'>Andorra</option>
                                                    <option value='Angola'>Angola</option>
                                                    <option value='Anguilla'>Anguilla</option>
                                                    <option value='Antarctica'>Antarctica</option>
                                                    <option value='Antigua and Barbuda'>Antigua and Barbuda</option>
                                                    <option value='Argentina'>Argentina</option>
                                                    <option value='Armenia'>Armenia</option>
                                                    <option value='Aruba'>Aruba</option>
                                                    <option value='Australia'>Australia</option>
                                                    <option value='Austria'>Austria</option>
                                                    <option value='Azerbaijan'>Azerbaijan</option>
                                                    <option value='Bahamas'>Bahamas</option>
                                                    <option value='Bahrain'>Bahrain</option>
                                                    <option value='Bangladesh'>Bangladesh</option>
                                                    <option value='Barbados'>Barbados</option>
                                                    <option value='Belarus'>Belarus</option>
                                                    <option value='Belgium'>Belgium</option>
                                                    <option value='Belize'>Belize</option>
                                                    <option value='Benin'>Benin</option>
                                                    <option value='Bermuda'>Bermuda</option>
                                                    <option value='Bhutan'>Bhutan</option>
                                                    <option value='Bolivia'>Bolivia</option>
                                                    <option value='Bosnia and Herzegovina'>
                                                        Bosnia and Herzegovina
                                                    </option>
                                                    <option value='Botswana'>Botswana</option>
                                                    <option value='Bouvet Island'>Bouvet Island</option>
                                                    <option value='Brazil'>Brazil</option>
                                                    <option value='British Indian Ocean Territory'>
                                                        British Indian Ocean Territory
                                                    </option>
                                                    <option value='Brunei Darussalam'>Brunei Darussalam</option>
                                                    <option value='Bulgaria'>Bulgaria</option>
                                                    <option value='Burkina Faso'>Burkina Faso</option>
                                                    <option value='Burundi'>Burundi</option>
                                                    <option value='Cambodia'>Cambodia</option>
                                                    <option value='Cameroon'>Cameroon</option>
                                                    <option value='Canada'>Canada</option>
                                                    <option value='Cape Verde'>Cape Verde</option>
                                                    <option value='Cayman Islands'>Cayman Islands</option>
                                                    <option value='Central African Republic'>
                                                        Central African Republic
                                                    </option>
                                                    <option value='Chad'>Chad</option>
                                                    <option value='Chile'>Chile</option>
                                                    <option value='China'>China</option>
                                                    <option value='Christmas Island'>Christmas Island</option>
                                                    <option value='Cocos (Keeling) Islands'>
                                                        Cocos (Keeling) Islands
                                                    </option>
                                                    <option value='Colombia'>Colombia</option>
                                                    <option value='Comoros'>Comoros</option>
                                                    <option value='Congo'>Congo</option>
                                                    <option value='Congo, The Democratic Republic of The'>
                                                        Congo, The Democratic Republic of The
                                                    </option>
                                                    <option value='Cook Islands'>Cook Islands</option>
                                                    <option value='Costa Rica'>Costa Rica</option>
                                                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                    <option value='Croatia'>Croatia</option>
                                                    <option value='Cuba'>Cuba</option>
                                                    <option value='Cyprus'>Cyprus</option>
                                                    <option value='Czech Republic'>Czech Republic</option>
                                                    <option value='Denmark'>Denmark</option>
                                                    <option value='Djibouti'>Djibouti</option>
                                                    <option value='Dominica'>Dominica</option>
                                                    <option value='Dominican Republic'>Dominican Republic</option>
                                                    <option value='Ecuador'>Ecuador</option>
                                                    <option value='Egypt'>Egypt</option>
                                                    <option value='El Salvador'>El Salvador</option>
                                                    <option value='Equatorial Guinea'>Equatorial Guinea</option>
                                                    <option value='Eritrea'>Eritrea</option>
                                                    <option value='Estonia'>Estonia</option>
                                                    <option value='Ethiopia'>Ethiopia</option>
                                                    <option value='Falkland Islands (Malvinas)'>
                                                        Falkland Islands (Malvinas)
                                                    </option>
                                                    <option value='Faroe Islands'>Faroe Islands</option>
                                                    <option value='Fiji'>Fiji</option>
                                                    <option value='Finland'>Finland</option>
                                                    <option value='France'>France</option>
                                                    <option value='French Guiana'>French Guiana</option>
                                                    <option value='French Polynesia'>French Polynesia</option>
                                                    <option value='French Southern Territories'>
                                                        French Southern Territories
                                                    </option>
                                                    <option value='Gabon'>Gabon</option>
                                                    <option value='Gambia'>Gambia</option>
                                                    <option value='Georgia'>Georgia</option>
                                                    <option value='Germany'>Germany</option>
                                                    <option value='Ghana'>Ghana</option>
                                                    <option value='Gibraltar'>Gibraltar</option>
                                                    <option value='Greece'>Greece</option>
                                                    <option value='Greenland'>Greenland</option>
                                                    <option value='Grenada'>Grenada</option>
                                                    <option value='Guadeloupe'>Guadeloupe</option>
                                                    <option value='Guam'>Guam</option>
                                                    <option value='Guatemala'>Guatemala</option>
                                                    <option value='Guernsey'>Guernsey</option>
                                                    <option value='Guinea'>Guinea</option>
                                                    <option value='Guinea-bissau'>Guinea-bissau</option>
                                                    <option value='Guyana'>Guyana</option>
                                                    <option value='Haiti'>Haiti</option>
                                                    <option value='Heard Island and Mcdonald Islands'>
                                                        Heard Island and Mcdonald Islands
                                                    </option>
                                                    <option value='Holy See (Vatican City State)'>
                                                        Holy See (Vatican City State)
                                                    </option>
                                                    <option value='Honduras'>Honduras</option>
                                                    <option value='Hong Kong'>Hong Kong</option>
                                                    <option value='Hungary'>Hungary</option>
                                                    <option value='Iceland'>Iceland</option>
                                                    <option value='India'>India</option>
                                                    <option value='Indonesia'>Indonesia</option>
                                                    <option value='Iran, Islamic Republic of'>
                                                        Iran, Islamic Republic of
                                                    </option>
                                                    <option value='Iraq'>Iraq</option>
                                                    <option value='Ireland'>Ireland</option>
                                                    <option value='Isle of Man'>Isle of Man</option>
                                                    <option value='Israel'>Israel</option>
                                                    <option value='Italy'>Italy</option>
                                                    <option value='Jamaica'>Jamaica</option>
                                                    <option value='Japan'>Japan</option>
                                                    <option value='Jersey'>Jersey</option>
                                                    <option value='Jordan'>Jordan</option>
                                                    <option value='Kazakhstan'>Kazakhstan</option>
                                                    <option value='Kenya'>Kenya</option>
                                                    <option value='Kiribati'>Kiribati</option>
                                                    <option value="Korea, Democratic People's Republic of">
                                                        Korea, Democratic People's Republic of
                                                    </option>
                                                    <option value='Korea, Republic of'>Korea, Republic of</option>
                                                    <option value='Kuwait'>Kuwait</option>
                                                    <option value='Kyrgyzstan'>Kyrgyzstan</option>
                                                    <option value="Lao People's Democratic Republic">
                                                        Lao People's Democratic Republic
                                                    </option>
                                                    <option value='Latvia'>Latvia</option>
                                                    <option value='Lebanon'>Lebanon</option>
                                                    <option value='Lesotho'>Lesotho</option>
                                                    <option value='Liberia'>Liberia</option>
                                                    <option value='Libyan Arab Jamahiriya'>
                                                        Libyan Arab Jamahiriya
                                                    </option>
                                                    <option value='Liechtenstein'>Liechtenstein</option>
                                                    <option value='Lithuania'>Lithuania</option>
                                                    <option value='Luxembourg'>Luxembourg</option>
                                                    <option value='Macao'>Macao</option>
                                                    <option value='Macedonia, The Former Yugoslav Republic of'>
                                                        Macedonia, The Former Yugoslav Republic of
                                                    </option>
                                                    <option value='Madagascar'>Madagascar</option>
                                                    <option value='Malawi'>Malawi</option>
                                                    <option value='Malaysia'>Malaysia</option>
                                                    <option value='Maldives'>Maldives</option>
                                                    <option value='Mali'>Mali</option>
                                                    <option value='Malta'>Malta</option>
                                                    <option value='Marshall Islands'>Marshall Islands</option>
                                                    <option value='Martinique'>Martinique</option>
                                                    <option value='Mauritania'>Mauritania</option>
                                                    <option value='Mauritius'>Mauritius</option>
                                                    <option value='Mayotte'>Mayotte</option>
                                                    <option value='Mexico'>Mexico</option>
                                                    <option value='Micronesia, Federated States of'>
                                                        Micronesia, Federated States of
                                                    </option>
                                                    <option value='Moldova, Republic of'>
                                                        Moldova, Republic of
                                                    </option>
                                                    <option value='Monaco'>Monaco</option>
                                                    <option value='Mongolia'>Mongolia</option>
                                                    <option value='Montenegro'>Montenegro</option>
                                                    <option value='Montserrat'>Montserrat</option>
                                                    <option value='Morocco'>Morocco</option>
                                                    <option value='Mozambique'>Mozambique</option>
                                                    <option value='Myanmar'>Myanmar</option>
                                                    <option value='Namibia'>Namibia</option>
                                                    <option value='Nauru'>Nauru</option>
                                                    <option value='Nepal'>Nepal</option>
                                                    <option value='Netherlands'>Netherlands</option>
                                                    <option value='Netherlands Antilles'>
                                                        Netherlands Antilles
                                                    </option>
                                                    <option value='New Caledonia'>New Caledonia</option>
                                                    <option value='New Zealand'>New Zealand</option>
                                                    <option value='Nicaragua'>Nicaragua</option>
                                                    <option value='Niger'>Niger</option>
                                                    <option value='Nigeria'>Nigeria</option>
                                                    <option value='Niue'>Niue</option>
                                                    <option value='Norfolk Island'>Norfolk Island</option>
                                                    <option value='Northern Mariana Islands'>
                                                        Northern Mariana Islands
                                                    </option>
                                                    <option value='Norway'>Norway</option>
                                                    <option value='Oman'>Oman</option>
                                                    <option value='Pakistan'>Pakistan</option>
                                                    <option value='Palau'>Palau</option>
                                                    <option value='Palestinian Territory, Occupied'>
                                                        Palestinian Territory, Occupied
                                                    </option>
                                                    <option value='Panama'>Panama</option>
                                                    <option value='Papua New Guinea'>Papua New Guinea</option>
                                                    <option value='Paraguay'>Paraguay</option>
                                                    <option value='Peru'>Peru</option>
                                                    <option value='Philippines'>Philippines</option>
                                                    <option value='Pitcairn'>Pitcairn</option>
                                                    <option value='Poland'>Poland</option>
                                                    <option value='Portugal'>Portugal</option>
                                                    <option value='Puerto Rico'>Puerto Rico</option>
                                                    <option value='Qatar'>Qatar</option>
                                                    <option value='Reunion'>Reunion</option>
                                                    <option value='Romania'>Romania</option>
                                                    <option value='Russian Federation'>Russian Federation</option>
                                                    <option value='Rwanda'>Rwanda</option>
                                                    <option value='Saint Helena'>Saint Helena</option>
                                                    <option value='Saint Kitts and Nevis'>
                                                        Saint Kitts and Nevis
                                                    </option>
                                                    <option value='Saint Lucia'>Saint Lucia</option>
                                                    <option value='Saint Pierre and Miquelon'>
                                                        Saint Pierre and Miquelon
                                                    </option>
                                                    <option value='Saint Vincent and The Grenadines'>
                                                        Saint Vincent and The Grenadines
                                                    </option>
                                                    <option value='Samoa'>Samoa</option>
                                                    <option value='San Marino'>San Marino</option>
                                                    <option value='Sao Tome and Principe'>
                                                        Sao Tome and Principe
                                                    </option>
                                                    <option value='Saudi Arabia'>Saudi Arabia</option>
                                                    <option value='Senegal'>Senegal</option>
                                                    <option value='Serbia'>Serbia</option>
                                                    <option value='Seychelles'>Seychelles</option>
                                                    <option value='Sierra Leone'>Sierra Leone</option>
                                                    <option value='Singapore'>Singapore</option>
                                                    <option value='Slovakia'>Slovakia</option>
                                                    <option value='Slovenia'>Slovenia</option>
                                                    <option value='Solomon Islands'>Solomon Islands</option>
                                                    <option value='Somalia'>Somalia</option>
                                                    <option value='South Africa'>South Africa</option>
                                                    <option value='South Georgia and The South Sandwich Islands'>
                                                        South Georgia and The South Sandwich Islands
                                                    </option>
                                                    <option value='Spain'>Spain</option>
                                                    <option value='Sri Lanka'>Sri Lanka</option>
                                                    <option value='Sudan'>Sudan</option>
                                                    <option value='Suriname'>Suriname</option>
                                                    <option value='Svalbard and Jan Mayen'>
                                                        Svalbard and Jan Mayen
                                                    </option>
                                                    <option value='Swaziland'>Swaziland</option>
                                                    <option value='Sweden'>Sweden</option>
                                                    <option value='Switzerland'>Switzerland</option>
                                                    <option value='Syrian Arab Republic'>
                                                        Syrian Arab Republic
                                                    </option>
                                                    <option value='Taiwan, Province of China'>
                                                        Taiwan, Province of China
                                                    </option>
                                                    <option value='Tajikistan'>Tajikistan</option>
                                                    <option value='Tanzania, United Republic of'>
                                                        Tanzania, United Republic of
                                                    </option>
                                                    <option value='Thailand'>Thailand</option>
                                                    <option value='Timor-leste'>Timor-leste</option>
                                                    <option value='Togo'>Togo</option>
                                                    <option value='Tokelau'>Tokelau</option>
                                                    <option value='Tonga'>Tonga</option>
                                                    <option value='Trinidad and Tobago'>Trinidad and Tobago</option>
                                                    <option value='Tunisia'>Tunisia</option>
                                                    <option value='Turkey'>Turkey</option>
                                                    <option value='Turkmenistan'>Turkmenistan</option>
                                                    <option value='Turks and Caicos Islands'>
                                                        Turks and Caicos Islands
                                                    </option>
                                                    <option value='Tuvalu'>Tuvalu</option>
                                                    <option value='Uganda'>Uganda</option>
                                                    <option value='Ukraine'>Ukraine</option>
                                                    <option value='United Arab Emirates'>
                                                        United Arab Emirates
                                                    </option>
                                                    <option value='United Kingdom'>United Kingdom</option>
                                                    <option value='United States'>United States</option>
                                                    <option value='United States Minor Outlying Islands'>
                                                        United States Minor Outlying Islands
                                                    </option>
                                                    <option value='Uruguay'>Uruguay</option>
                                                    <option value='Uzbekistan'>Uzbekistan</option>
                                                    <option value='Vanuatu'>Vanuatu</option>
                                                    <option value='Venezuela'>Venezuela</option>
                                                    <option value='Viet Nam'>Viet Nam</option>
                                                    <option value='Virgin Islands, British'>
                                                        Virgin Islands, British
                                                    </option>
                                                    <option value='Virgin Islands, U.S.'>
                                                        Virgin Islands, U.S.
                                                    </option>
                                                    <option value='Wallis and Futuna'>Wallis and Futuna</option>
                                                    <option value='Western Sahara'>Western Sahara</option>
                                                    <option value='Yemen'>Yemen</option>
                                                    <option value='Zambia'>Zambia</option>
                                                    <option value='Zimbabwe'>Zimbabwe</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>State</label>
                                                <input
                                                    type='address'
                                                    name='state'
                                                    onChange={onChange}
                                                    value={state}
                                                    required
                                                    className="form-control" placeholder="Your State" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>Password</label>
                                                <input 
                                                 type='Password'
                                                 name='password'
                                                 value={password}
                                                 onChange={onChange}
                                                 className='form-control'
                                                 id='pass'
                                                 placeholder='Enter your password.'
                                                    required
                                                 />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12">
                                            <div className="inputBox">
                                                <label>Confirm Password</label>
                                                <input 
                                                    type='Password'
                                               name='confirmPassword'
                                               value={confirmPassword}
                                               onChange={onChange}
                                               className='form-control'
                                               id='pass2'
                                               placeholder='Re-enter your password.'
                                               required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 col-12">
                                            <div className="login-input-options">
                                                <label className="custom-checkbox login-remember">I accept all terms and conditions.
                                                    <input type="checkbox" required />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="login-button text-center">
                                        <button type="submit" className="btn-style-lg btn-orange">Register</button>
                                    </div>
                                </form>
                                <div className="entry-form-swap text-center">
                                    <span>Already have an account?<a href="/login">Login here</a>.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright Code Start  */}
            <div className="cms-short-footer wow fadeInDown" data-wow-delay="0.10s">
                <div className="copyright-bar">
                    <p>Copyright © 2021 FTT. All rights reserved.</p>
                </div>
            </div>
        </React.Fragment>
    )
}
