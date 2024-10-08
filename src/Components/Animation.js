import React, { useState, useEffect } from 'react';
import './Animation.css';

const Animation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [initialScrollY, setInitialScrollY] = useState(0);
  const [middleItemStyle, setMiddleItemStyle] = useState({ left: 560, top: 200, skewY: -10 });
  const [leftValues, setLeftValues] = useState([]);
  const [iconOpacity, setIconOpacity] = useState(0);
  const [divOpacity, setDivOpacity] = useState(0);
  const [prevDivOpacity, setPrevDivOpacity] = useState(1);
  const [icon1Top, setIcon1Top] = useState(0);
  const [loremMarginTop, setLoremMarginTop] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('/images/card6.jpeg');
  const STAY_SCROLL_START = 781;
  const STAY_SCROLL_END = 1500;
  const STYLE_SCROLL_END = 2200;
  const STYLE_SCROLL_TOPEND = 2800;
  const speeds = [0.55, 0.45, 0.35, 0.25, 0, 0.25, 0.35, 0.45, 0.55, 0.65];
  const originalLeftValues = [0, 140, 280, 420, 560, 700, 840, 980, 1120, 1260];
  const baseWidth = 1536; 
  const calculateLeftValues = (screenWidth) => {
    return originalLeftValues.map(value => (value / baseWidth) * screenWidth);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const proportionalLeftValues = calculateLeftValues(screenWidth);
    setLeftValues(proportionalLeftValues);
    setMiddleItemStyle({ left: proportionalLeftValues[4] });
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      const newLeftValues = calculateLeftValues(newScreenWidth);
      setLeftValues(newLeftValues);
      setMiddleItemStyle({ left: newLeftValues[4] });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setInitialScrollY(currentScrollY);

    if (currentScrollY > STAY_SCROLL_START && currentScrollY < STAY_SCROLL_END) {
      if (scrollY === 0) {
        setScrollY(currentScrollY);
        return;
      }

      const updatedLeftValues = leftValues.map((value, i) => {
        return i < 4
          ? value - (currentScrollY - scrollY) * speeds[i]
          : value + (currentScrollY - scrollY) * speeds[i];
      });

      setLeftValues(updatedLeftValues);
      setScrollY(currentScrollY);
    }
    else if (currentScrollY > STAY_SCROLL_END && currentScrollY < STYLE_SCROLL_END) {
      const leftShift = leftValues[4] - (currentScrollY - STAY_SCROLL_END) * 0.4;
      const topIncrease = 200 + (currentScrollY - STAY_SCROLL_END) * 1;
      const skewReduction = -10 + (currentScrollY - STAY_SCROLL_END) * 0.0135;
      setMiddleItemStyle({ left: Math.max(leftShift, 0), top: topIncrease, skewY: Math.min(skewReduction, 0) });
    }
    else if (currentScrollY > STYLE_SCROLL_END && currentScrollY < STYLE_SCROLL_TOPEND) {
      const topIncrease = 200 + (currentScrollY - STAY_SCROLL_END) * 1;
      const skewReduction = -10 + (currentScrollY - STAY_SCROLL_END) * 0.03;
      setMiddleItemStyle({ top: topIncrease, skewY: Math.min(skewReduction, 0) });
      console.log(middleItemStyle.left);
    }

    if (currentScrollY > 2200) {
      const newOpacity = Math.min((currentScrollY - 2200) / 50, 1);
      setIconOpacity(newOpacity);
      if (currentScrollY < STYLE_SCROLL_TOPEND) {
        setIcon1Top((currentScrollY - 2200 + 1000) * 1.2);
      }
      if (currentScrollY > 2400 && backgroundImage !== '/images/card3.jpeg') {
        setBackgroundImage('/images/card3.jpeg');
      } else {
        setBackgroundImage('/images/card6.jpeg');
      }

      const newLoremMarginTop = Math.min((currentScrollY - 2200) * 0.68, 400);
      setLoremMarginTop(newLoremMarginTop);

    } else {
      setIconOpacity(0);
      setIcon1Top(0);
      setLoremMarginTop(0);
      setPrevDivOpacity(1);
      setDivOpacity(0);
    }

    if (currentScrollY > 1900) {
      const newOpacity = Math.min((currentScrollY - 1900) / 500, 1);
      setDivOpacity(newOpacity);
    }
    if (currentScrollY > 2040) {
      const newOpacity = Math.max(100 / (currentScrollY - 2040), 0);
      console.log(newOpacity);
      setPrevDivOpacity(newOpacity);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY, leftValues]);

  return (
    <>
      {initialScrollY > 2150 && <div
        className="animationItem5"
        style={{
          position: initialScrollY < STYLE_SCROLL_TOPEND ? 'fixed' : 'absolute',
          left: '13.02vw',
          top: initialScrollY < STAY_SCROLL_START ? '1000px' : initialScrollY < STYLE_SCROLL_TOPEND ? '200px' : '3000px',
          backgroundImage: `url(${backgroundImage})`,
          opacity: `${divOpacity}`,
          width: '29.65vw'
        }}
      ></div>}
      <div
        className="animationContainer"
        style={{
          position: initialScrollY > STAY_SCROLL_START && initialScrollY < STAY_SCROLL_END ? 'fixed' : 'absolute',
          top: initialScrollY > STAY_SCROLL_END ? '1500px' : initialScrollY > STAY_SCROLL_START && initialScrollY < STAY_SCROLL_END ? '0px' : '786px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div className="AnimationTextHeading">
          Distribute and manage insurance business in <span className="AnimationHighlightRed">one platform</span>
        </div>
        <div className="animationItems">
          <div className="animationItem1" style={{ left: `${leftValues[0]}px` }}></div>
          <div className="animationItem2" style={{ left: `${leftValues[1]}px` }}></div>
          <div className="animationItem3" style={{ left: `${leftValues[2]}px` }}></div>
          <div className="animationItem4" style={{ left: `${leftValues[3]}px` }}></div>
          {initialScrollY < STYLE_SCROLL_END && <div
            className="animationItem5"
            style={{
              left: `${middleItemStyle.left}px`,
              position: initialScrollY > STYLE_SCROLL_END ? 'fixed' : 'absolute',
              top: `${middleItemStyle.top}px`,
              transform: `skewY(${middleItemStyle.skewY}deg)`,
              backgroundImage: `url(${backgroundImage})`,
              opacity: `${prevDivOpacity}`
            }}
          ></div>}
          <div className="animationItem6" style={{ left: `${leftValues[5]}px` }}></div>
          <div className="animationItem7" style={{ left: `${leftValues[6]}px` }}></div>
          <div className="animationItem8" style={{ left: `${leftValues[7]}px` }}></div>
          <div className="animationItem9" style={{ left: `${leftValues[8]}px` }}></div>
          <div className="animationItem10" style={{ left: `${leftValues[9]}px` }}></div>
        </div>
        <div className="animationFocusContainer">
          <div className="animationIcon1" style={{ opacity: iconOpacity, top: `${icon1Top}px`, position: 'absolute' }}></div>
          <div className="animationIcon2" style={{ opacity: iconOpacity }}></div>
        </div>

      </div>
      <div className="animationTextScrollEffect" style={{ opacity: iconOpacity, position: initialScrollY > STYLE_SCROLL_TOPEND ? 'absolute' : 'fixed', top: initialScrollY > STYLE_SCROLL_TOPEND ? '3100px' : '300px' }}>
        <span className="loremText" style={{ marginTop: `${-loremMarginTop}px` }}>
          Distribute and manage insurance business <span className="highlightRed">in one platform</span>
          <p className="loremSubText">Manage your insurance business seamlessly using Riskcovry's assurance platform. Increase revenue, expand product offerings.</p><button className="CTAButton">Schedule Demo</button>
          Lorem, ipsum dolor sit amet consectetur adipisici<span className="highlightRed">in one platform</span>
          <p className="loremSubText">Manage your insurance business seamlessly using Riskcovry's assurance platform. Increase revenue, expand product offerings.</p><button className="CTAButton">Schedule Demo</button>
        </span>
      </div>

    </>
  );
};

export default Animation;
