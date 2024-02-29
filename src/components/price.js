import "../styles/price.css";
import icon from "../images/icon.png";

function Price() {
  return (
    <div className="price">
      <h3>
        <span>
          <img src={icon} alt="logo" />
        </span>
        Price & Plans
        <span>
          <img src={icon} alt="logo" />
        </span>
      </h3>
      <h5>Effective & Affordable Plans</h5>
      <div className="price-box">
        <div
          className="price-box1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4>Basic Plan</h4>
          <h6>
            65
            <sup>
              <i class="fa-solid fa-dollar-sign"></i>
            </sup>
            <sub>/ Per Month</sub>
          </h6>

          <ul>
            <li>
              <i class="fa-solid fa-stop"></i> 1 warehouse
            </li>
            <li>
              <i class="fa-solid fa-stop"></i> Custom business rules
            </li>
            <li>
              <i class="fa-solid fa-stop"></i> Real-time rate shopping
            </li>
            <li>
              <i class="fa-solid fa-stop"></i> 100 freight shipments
            </li>
            <li>
              <i class="fa-solid fa-stop"></i> Any time 24/7 hour support
            </li>
          </ul>
          <button className="price1">Order Now</button>
        </div>
        <div
          className="price-box1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4>Standard Plan</h4>
          <h6>
            79
            <sup>
              <i class="fa-solid fa-dollar-sign"></i>
            </sup>
            <sub>/ Per Month</sub>
          </h6>

          <ul>
            <li>
              {" "}
              <i class="fa-solid fa-stop"></i> 1 warehouse
            </li>
            <li>
              <i class="fa-solid fa-stop"></i> Custom business rules
            </li>
            <li>
              <i class="fa-solid fa-stop"></i> Real-time rate shopping
            </li>
            <li>
              <i class="fa-solid fa-stop"></i> 100 freight shipments
            </li>
            <li>
              <i class="fa-solid fa-stop"></i> Any time 24/7 hour support
            </li>
          </ul>
          <button className="price3">Order Now</button>
        </div>
        <div
          className="price-box1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4>Premium Plan</h4>
          <h6>
            93
            <sup>
              <i class="fa-solid fa-dollar-sign"></i>
            </sup>
            <sub>/ Per Month</sub>
          </h6>

          <ul>
            <li>
              <i class="fa-solid fa-stop"></i> 1 warehouse
            </li>
            <li>
              <i class="fa-solid fa-stop"></i> Custom business rules
            </li>
            <li>
              <i class="fa-solid fa-stop"></i> Real-time rate shopping
            </li>
            <li>
              <i class="fa-solid fa-stop"></i> 100 freight shipments
            </li>
            <li>
              <i class="fa-solid fa-stop"></i> Any time 24/7 hour support
            </li>
          </ul>
          <button className="price1">Order Now</button>
        </div>
      </div>
    </div>
  );
}
export default Price;
