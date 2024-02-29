import "../styles/service.css";
import icon from "../images/icon.png";
import ser1 from "./image/service.png";
import ser2 from "./image/service2.png";
import ser3 from "./image/service3.png";

function Service() {
  return (
    <div className="service">
      <h3>
        <span>
          <img src={icon} alt="logo" />
        </span>
        Type of Logistics
        <span>
          <img src={icon} alt="logo" />
        </span>
      </h3>
      <h5>Popular Logistics Services</h5>
      <div className="service-box">
        <div className="service-img1" data-aos="zoom-out-down">
          <img src={ser1} alt="logo" />
        </div>
        <div className="service-img2" data-aos="zoom-out-down">
          <img src={ser2} alt="logo" />
        </div>
        <div className="service-img3" data-aos="zoom-out-down">
          <img src={ser3} alt="logo" />
        </div>
      </div>

      <div className="service-text">
        <div className="service-text1" data-aos="zoom-out-down">
          <div className="service-hr">
            <span>
              <hr />
            </span>{" "}
            <p>Tracking</p>
          </div>
          <h6>Transport by Road</h6>
          <button>
            <i class="fa-solid fa-arrow-right fa-xl"></i>
          </button>
        </div>
        <div className="service-text2" data-aos="zoom-out-down">
          <div className="service-hr">
            <span>
              <hr />
            </span>{" "}
            <p>Tracking</p>
          </div>
          <h6>Safety Garunteed</h6>
          <button>
            <i class="fa-solid fa-arrow-right fa-xl"></i>
          </button>
        </div>
        <div className="service-text3" data-aos="zoom-out-down">
          <div className="service-hr">
            <span>
              <hr />
            </span>{" "}
            <p>Tracking</p>
          </div>
          <h6>Managing logistics for</h6>
          <button>
            <i class="fa-solid fa-arrow-right fa-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Service;
