import "../styles/price.css";
import partner from "../images/partner.jpg";

function Partner() {
  return (
    <div className="partner">
      <div className="partner-box">
        <div className="partner-box1">
          <hr />
        </div>
        <div className="partner-box2">Our Partners & Supporters</div>
        <div className="partner-box1">
          <hr />
        </div>
      </div>
      <div className="partnerbox1">
        <marquee direction="left">
          <img src={partner} alt=";ogo"></img>
          <img src={partner} alt=";ogo"></img>
          <img src={partner} alt=";ogo"></img>
          <img src={partner} alt=";ogo"></img>
          <img src={partner} alt=";ogo"></img>
        </marquee>
      </div>
    </div>
  );
}
export default Partner;
