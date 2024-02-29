import "../styles/service.css";
import icon1 from "../images/icon1.png";
import playbtn from "./playbutton.png";
import booking from "../images/booking-right-img.png";

function Booking() {
  return (
    <div className="booking">
      <div className="booking-left" data-aos="flip-up">
        <h5>
          <img src={icon1} alt="logo" />
          <span> Booking Appointment</span>
        </h5>
        <h2>Book Transport & Logistics</h2>

        <form>
          <input type="text" required placeholder="Full Name *" />
          <input type="email" required placeholder="Email Here *" />
          <br />

          <input type="text" required placeholder="Weight Kg *" />
          <input type="text" required placeholder="Distance. Km *" />
          <br />

          <div className="booking-input">
            <input type="text" placeholder="Select Freight*" />
          </div>
          <button>
            Submit Request <i class="fa-solid fa-arrow-up"></i>
          </button>
        </form>
      </div>
      <div className="booking-right">
        <div className="booking-right1">
          <div className="booking-right-img1">
            <img src={playbtn} alt="logo" />
          </div>
          <div className="booking-right-img">
            <img src={booking} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Booking;
