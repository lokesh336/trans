import "../styles/header.css";
import icon1 from "../images/icon1.png";

function Home() {
  return (
    <div className="home">
      <div className="home-main">
        <span>
          <img src={icon1} alt="icon" className="icon"></img>
        </span>
        <p>We Specialise in the transportation</p>
        <h1>
          Experience the Best <br />
          Logistic & Transport
        </h1>
        <h6>
          Cursus in hac habitasse plarea. Interdum consectetur libero id
          faucibus nisl tinciunt
          <br />
          eget.Dui vivamus arcu felis bibendum ut tristique et egestas quis.
        </h6>
        <button>
          More Details{" "}
          <span>
            <i class="fa-solid fa-arrow-up"></i>
          </span>
        </button>
      </div>
    </div>
  );
}
export default Home;
