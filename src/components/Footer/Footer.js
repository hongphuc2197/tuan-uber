import React from 'react';
import './Footer.scss';
import logoFB from './../../assets/img/logo-fb.png'
import logoIn from './../../assets/img/logo-in.png'
import logoYT from './../../assets/img/logo-youtube.png'
const  footer = (props) => (
    <footer className= "Footer">
                        <div className="group1"> 
                                <p className="text"> © 2019 Uber Technologies Inc. All Rights Reserved. </p>
                                <p className="text">Terms of Use | Legal Notices | Privacy & Security</p>
                        </div>
                        <div className= "group2"> 
                                <img className="mr-1" src={logoFB} alt= "logofb"/>
                                <img className="mr-1" src={logoIn} alt= "logoin"/>
                                <img src={logoYT} alt="logoyt"/>
                        </div>
    </footer>
)

export default footer;