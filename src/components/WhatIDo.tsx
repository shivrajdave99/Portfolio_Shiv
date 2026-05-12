import { useEffect, useState } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const [isTouch, setIsTouch] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    // Safely check for touch devices once the component mounts
    if (ScrollTrigger.isTouch === 1 || "ontouchstart" in window) {
      setIsTouch(true);
    }
  }, []);

  const handleCardClick = (index: number) => {
    if (isTouch) {
      // Toggle the active card. If it's already active, close it (set to null)
      setActiveIndex((prev) => (prev === index ? null : index));
    }
  };

  // Helper function to dynamically assign classes based on React State
  const getCardClasses = (index: number) => {
    let classes = "what-content";
    if (!isTouch) classes += " what-noTouch";
    if (activeIndex === index) classes += " what-content-active";
    if (activeIndex !== null && activeIndex !== index) classes += " what-sibling";
    return classes;
  };

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* CARD 1: Hardware & Embedded Systems */}
          <div
            className={getCardClasses(0)}
            onClick={() => handleCardClick(0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>HARDWARE & CONTROLS</h3>
              <h4>Embedded Systems & Validation</h4>
              <p>
                I design, test, and validate complex physical systems. From Battery 
                Management Systems (BMS) for hybrid electric vehicles to precision 
                instrumentation calibration in FDA/ISO regulated environments.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">HIL Testing</div>
                <div className="what-tags">CAN Bus Protocols</div>
                <div className="what-tags">BMS Architecture</div>
                <div className="what-tags">PLC Programming</div>
                <div className="what-tags">Control Logic</div>
                <div className="what-tags">Manufacturing Ops</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 2: Software & Web */}
          <div
            className={getCardClasses(1)}
            onClick={() => handleCardClick(1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            
            <div className="what-content-in">
              <h3>SOFTWARE & SIMULATION</h3>
              <h4>Modeling to Full-Stack</h4>
              <p>
                I bridge the gap between engineering logic and user experiences. 
                Whether I am co-simulating real-time battery dynamics or building 
                responsive web applications, I take technical projects from data 
                analysis to production.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">MATLAB & Simulink</div>
                <div className="what-tags">Deep Learning (U-Net)</div>
                <div className="what-tags">Data Acquisition</div>
                <div className="what-tags">React.js</div>
                <div className="what-tags">Web Development</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;