import "../styles/header.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";

function card() {
  return (
    <div className="card">
      <Carousel>
        <div className="card-box">
          {/* <div className='card-box1'data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                <i class="fa-solid fa-angle-left"></i>
                </div> */}
          <div
            className="card-box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card1} alt="card" />
            <h3>Transparent Pricing</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>
            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>
          <div
            className="card-box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card2} alt="card" />
            <h3>Packaging Distribution</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>
            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>
          <div
            className="card-box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card3} alt="card" />
            <h3>Real Time Tracking</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>
            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>

          <div
            className="card-box3"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card4} alt="card" />
            <h3>Warehoues Storage</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>

            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>
          {/* <div className='card-box1'data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                <i class="fa-solid fa-angle-right"></i>
                </div> */}
        </div>
        <div className="card-box">
          {/* <div className='card-box1'data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                <i class="fa-solid fa-angle-left"></i>
                </div> */}
          <div
            className="card-box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card1} alt="card" />
            <h3>Transparent Pricing</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>
            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>
          <div
            className="card-box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card2} alt="card" />
            <h3>Packaging Distribution</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>
            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>
          <div
            className="card-box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card3} alt="card" />
            <h3>Real Time Tracking</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>
            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>

          <div
            className="card-box3"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card4} alt="card" />
            <h3>Warehoues Storage</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>

            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>
          {/* <div className='card-box1'data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                <i class="fa-solid fa-angle-right"></i>
                </div> */}
        </div>
        <div className="card-box">
          {/* <div className='card-box1'data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                <i class="fa-solid fa-angle-left"></i>
                </div> */}
          <div
            className="card-box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card1} alt="card" />
            <h3>Transparent Pricing</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>
            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>
          <div
            className="card-box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card2} alt="card" />
            <h3>Packaging Distribution</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>
            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>
          <div
            className="card-box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card3} alt="card" />
            <h3>Real Time Tracking</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>
            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>

          <div
            className="card-box3"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card4} alt="card" />
            <h3>Warehoues Storage</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>

            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>
          {/* <div className='card-box1'data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                <i class="fa-solid fa-angle-right"></i>
                </div> */}
        </div>
        <div className="card-box">
          {/* <div className='card-box1'data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                <i class="fa-solid fa-angle-left"></i>
                </div> */}
          <div
            className="card-box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card1} alt="card" />
            <h3>Transparent Pricing</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>
            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>
          <div
            className="card-box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card2} alt="card" />
            <h3>Packaging Distribution</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>
            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>
          <div
            className="card-box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card3} alt="card" />
            <h3>Real Time Tracking</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>
            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>

          <div
            className="card-box3"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={card4} alt="card" />
            <h3>Warehoues Storage</h3>
            <p>
              Appropriately enchance principle cent standeds inplatforms.
              Cradibly erch populer servics
            </p>

            <div className="card-hr">
              <hr />
              <span>
                <hr />
              </span>
            </div>
          </div>
          {/* <div className='card-box1'data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                <i class="fa-solid fa-angle-right"></i>
                </div> */}
        </div>
      </Carousel>
      <h4>
        Our list of services does not end here. Find out how we can help you and
        business.<span>More services</span>
      </h4>
    </div>
  );
}
export default card;
