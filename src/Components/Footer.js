import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className="footerContainer">
      <div className="vector"></div>
      <div className="footerTextContainer">
        <span className="footerHeading">Leverage technology to streamline credit-linked insurance</span>
        <span className="footerSubHeading">Share a few quick details to understand how we can best help.</span>
        <button className="footerCTAButton">Let's Talk</button>
      </div>
      <div className="footerContactComponent">
        <div className="footerEndHeader">
            <div className="footerBrandLogo"></div>
            <div className="footerSocials"></div>
        </div>
        <hr className="thinLine"/>
        <div className="footerContactsOuterContainer">
        <div className="footerContactLinksContainer">
            <ul className="linkItemContainer">
                <li className="linkItemsHeading">Products</li>
                <li className="linkItems">Retail Insurance</li>
                <li className="linkItems">LendPro</li>
                <li className="linkItems">EmbedPro</li>
                <li className="linkItems">Console</li>
            </ul>
            <ul className="linkItemContainer">
                <li className="linkItemsHeading">Industries</li>
                <li className="linkItems">InsuranceBrokers</li>
                <li className="linkItems">Banks</li>
                <li className="linkItems">NBFCS</li>
                <li className="linkItems">Fintech</li>
                <li className="linkItems">Embedded Insurance</li>
            </ul>
            <ul className="linkItemContainer">
                <li className="linkItemsHeading">Other</li>
                <li className="linkItems">About Us</li>
                <li className="linkItems">Careers</li>
                <li className="linkItems">News & Media</li>
                <li className="linkItems">APIs</li>
                <li className="linkItems">Case Studies</li>
                <li className="linkItems">Blogs</li>
                <li className="linkItems">Faqs</li>
            </ul>
            <ul className="linkItemContainer">
                <li className="linkItemsHeading">Get in touch</li>
                <li className="linkItems"><input type="text" placeholder='info@youremailid'/></li>
                <li className="linkItems"><input type="text" placeholder='Phone no'/></li>
            </ul>
            </div>
        </div>
        <hr className="thinLine1"/>
        <div className="footerEndTrademark"> ⓒ2024 Webomindapps. Privacy Policy</div>
      </div>
    </div>
  )
}

export default Footer
