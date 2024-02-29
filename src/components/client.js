import "../styles/service.css";
import icon from "../images/icon.png";
import clint1 from "../images/client1.jpg";
import clint2 from "../images/client2.jpg";
import clint3 from "../images/client3.jpg";

function Client() {
  return (
    <div className="client">
      <h3>
        <span>
          <img src={icon} alt="logo" />
        </span>
        What Our Clients
        <span>
          <img src={icon} alt="logo" />
        </span>
      </h3>
      <h5>Stories Form Our Users</h5>
      <div className="client-box">
        <div
          className="client-box1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="client-box-img">
            <img src={clint1} alt="logo" />
            <div>
              <h6>Sahinur Islam</h6>
              <h4>Dramatically enhance</h4>
            </div>
          </div>
          <hr />
          <p>
            Lorem ipsum doloer sit amet, consectur adipiscing elit, sed eiusmod
            tempor inci-didnut ut labore et folore magna aliqua. Quis ipsum
            suspendisse
          </p>
          <i class="fa-sharp fa-solid fa-quote-left fa-2xl"></i>{" "}
        </div>
        <div
          className="client-box1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="client-box-img">
            <img className="client-image" src={clint2} alt="logo" />
            <div>
              <h6>Madriya Merin</h6>
              <h4>Dramatically enhance</h4>
            </div>
          </div>
          <hr />
          <p>
            Lorem ipsum doloer sit amet, consectur adipiscing elit, sed eiusmod
            tempor inci-didnut ut labore et folore magna aliqua. Quis ipsum
            suspendisse
          </p>
          <i class="fa-sharp fa-solid fa-quote-left fa-2xl"></i>
        </div>
        <div
          className="client-box1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="client-box-img">
            <img className="client-image" src={clint3} alt="logo" />
            <div>
              <h6>Derrell Steward</h6>
              <h4>Dramatically enhance</h4>
            </div>
          </div>
          <hr />
          <p>
            Lorem ipsum doloer sit amet, consectur adipiscing elit, sed eiusmod
            tempor inci-didnut ut labore et folore magna aliqua. Quis ipsum
            suspendisse
          </p>
          <i class="fa-sharp fa-solid fa-quote-left fa-2xl"></i>
        </div>
      </div>
    </div>
  );
}
export default Client;
