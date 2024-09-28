import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <>
      <div className="heroContainer">
        <div className="heroTextContainer">
            <span className="heroTextHeading">Distribute and manage insurance business in <span className="highlightRed">one platform</span></span>
            <p className="heroTextSub">Manage your insurance business seamlessly using Webomindapps assurance platform. Increase revenue, expand product offerings.</p>
            <button className="heroCTAButton">Schedule Demo &gt;</button>
        </div>
        <div className="heroImage"></div>
      </div>
    </>
  )
}

export default Hero
