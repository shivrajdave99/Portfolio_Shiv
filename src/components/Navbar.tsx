import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    // Note: Assuming `smoother.paused(false)` is called in your Loading/initialFX script!
    smoother.paused(true); 

    const handleResize = () => {
      ScrollSmoother.refresh(true);
    };

    window.addEventListener("resize", handleResize);

    // CLEANUP: Prevent memory leaks and duplicate GSAP instances
    return () => {
      window.removeEventListener("resize", handleResize);
      if (smoother) smoother.kill();
    };
  }, []);

  // React-idiomatic way to handle the click routing
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (window.innerWidth > 1024 && smoother) {
      e.preventDefault();
      smoother.scrollTo(target, true, "top top");
    }
  };

  return (
    <>
      <div className="header">
        {/* Updated Initials */}
        <a href="/#" className="navbar-title" data-cursor="disable">
          SD
        </a>
        {/* Updated LinkedIn info */}
        <a
          href="https://www.linkedin.com/in/shivrajdave/"
          className="navbar-connect"
          data-cursor="disable"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/shivrajdave
        </a>
        <ul>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, "#about")}
            >
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a 
              href="#work" 
              onClick={(e) => handleSmoothScroll(e, "#work")}
            >
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;