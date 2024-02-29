import "../styles/price.css";
import trans from "../images/transportimg.jpg";

function Transport() {
  return (
    <div className="transport">
      <div className="transport-box1">
        <h3>Looking For The Best Logistics</h3>
        <h3>Transport Service?</h3>
        <div>
          <button className="transport-box1-button" data-aos="zoom-in-up">
            More Details <i class="fa-solid fa-arrow-up"></i>
          </button>
          <button className="transport-box1-button" data-aos="zoom-in-up">
            Contect Us <i class="fa-solid fa-arrow-up"></i>
          </button>
        </div>
        <div className="transport-box2">
          <div className="transport-box2-left">
            <h3>Coverage That Protect Your World!</h3>
            <h6>Not sure which policy suits you the best?</h6>
            <form>
              <table>
                <tr>
                  <td>
                    <input
                      type="email"
                      required
                      placeholder="Type Your Email"
                    />
                  </td>
                  <td>
                    <span>
                      <button>Subscribe</button>
                    </span>
                  </td>
                </tr>
              </table>
            </form>
          </div>
          <div className="transport-box2-right">
            <img src={trans} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Transport;
