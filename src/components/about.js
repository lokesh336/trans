import "../styles/header.css";
import icon from "../images/icon.png";
import about from "../images/about.jpg";
import abouticon from "../images/about-icon.jpg";

function About() {
  return (
    <div className="about-page">
      <div className="about-left" data-aos="flip-left">
        <img src={about} alt="logo"></img>
      </div>
      <div className="about-right">
        <h6>
          <img src={icon} alt="logo" className="about-img" />
          <span>About the Company</span>
        </h6>
        <h2>Logistics Solutions That Deliver Excellence</h2>
        <p>
          Payment solution enablle bussiness to accept payments payment stions
          enable business to accept payments form city customers city securely
          stions enable busineses to accept payments from city customers city
          securely
        </p>
        <div className="about-track" data-aos="fade-right">
          <img src={abouticon} alt="logo" />
          <div className="about-track-text">
            <h3>Real-time Tracking</h3>
            <h5>
              There are many variations of passages of Lorem suffered alteration
              in some form,by injected
            </h5>
          </div>
        </div>
        <div className="about-button">
          <button>
            Explore More <i data-aos="fade-up" class="fa-solid fa-arrow-up"></i>
          </button>
          <div className="about-button-icon">
            <span>
              <i class="fa-solid fa-phone-volume fa-xl"></i>
            </span>
            <div className="about-button-text">
              <p>Emargency</p>
              <h2>+56 (201) 555-0124</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
