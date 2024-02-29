import "../styles/service.css";
import icon from "../images/icon.png";
import del1 from "./image/del1.jpg";
import del3 from "./image/del3.jpg";
import del4 from "./image/del4.jpg";

function Deliver() {
  return (
    <div className="deliver">
      <h3>
        <span>
          <img src={icon} alt="logo" />
        </span>
        Delivering Results
        <span>
          <img src={icon} alt="logo" />
        </span>
      </h3>
      <h5>Proud to Deliver Excellence</h5>
      <div className="deliver-box">
        <div className="deliver-box1">
          <img src={del1} alt="logo" />
        </div>
        <div className="deliver-box2">
          <div className="deliver-box2-top">
            <div className="deliver-box2-top-1">
              <div className="delover-box2-top-text">
                <p>Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
              <div className="delover-box2-top-text1">
                <p>Exports in technology fields</p>
                <h6>Tansportatioo 2021</h6>
              </div>
            </div>
          </div>

          <div className="deliver-box2-butttom">
            <img src={del3} alt="logo" />
          </div>
        </div>
        <div className="deliver-box1">
          <img src={del4} alt="logo" />
        </div>
      </div>
    </div>
  );
}
export default Deliver;
