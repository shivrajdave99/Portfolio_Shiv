import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Production Engineering Support</h4>
                <h5>Linamar Corporation · Windsor, ON</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Operated high-precision automated manufacturing systems and collaborated with cross-functional teams to resolve quality issues in automotive components. Conducted precision leak testing, failure analysis, and supported continuous improvement initiatives.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MEng Researcher</h4>
                <h5>University of Windsor · Windsor, ON</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Designed adaptive Battery Management System (BMS) control algorithms using a co-simulation approach. Developed MATLAB/Simulink models and Python scripts for real-time battery dynamics, model validation, and performance metric analysis.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Service Engineer</h4>
                <h5>Malvern Panalytical · Gujarat, India</h5>
              </div>
              <h3>2021–24</h3>
            </div>
            <p>
              Executed commissioning and validation protocols for analytical equipment across 270+ sites. Ensured FDA, ISO, and 21 CFR Part 11 compliance, and worked extensively with CAN bus communication protocols and embedded firmware updates.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>EV R&D Capstone</h4>
                <h5>Charotar University · India</h5>
              </div>
              <h3>2020–21</h3>
            </div>
            <p>
              Designed battery pack architecture with thermal and electrical integration for an EV platform. Developed a Hardware-in-the-Loop (HIL) test framework and configured CAN bus communication between battery management and motor controllers.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;