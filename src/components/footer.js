import "../styles/footer.css";
import footerlogo from "../images/footer-logo.jpg";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-box2">
          <div className="footer-logo">
            <img src={footerlogo} alt="logo"></img>
            <div className="footer-text">
              <p>
                Logis<span>tcwr</span>
              </p>
              <h5>logistics Service</h5>
            </div>
          </div>
          <h6>
            Feufieat a ligul naturn luctus primis wltrice nteger congus at
            pretium purus a pretium ligula at pretium purna alt pretium ligula
            nutrum and luctus
          </h6>
          <h3>Social info</h3>
          <ul>
            <li>
              <i class="fa-brands fa-facebook-f"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i class="fa-brands fa-vine"></i>
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div>
        <div className="footer-box3">
          <h5>Our Navigation</h5>
          <hr />
          <p>
            <i class="fa-solid fa-angles-right"></i> Airplane Fright
          </p>
          <p>
            <i class="fa-solid fa-angles-right"></i> About Protx
          </p>
          <p>
            <i class="fa-solid fa-angles-right"></i> Meet the Team
          </p>
          <p>
            <i class="fa-solid fa-angles-right"></i> News & Media
          </p>
          <p>
            <i class="fa-solid fa-angles-right"></i> Our Projects
          </p>
        </div>

        <div className="footer-box4">
          <h5>Our Service</h5>
          <hr />
          <p>
            <i class="fa-solid fa-angles-right"></i> Reliabilty & Punctualiy
          </p>
          <p>
            <i class="fa-solid fa-angles-right"></i> Trusted Franchise
          </p>
          <p>
            <i class="fa-solid fa-angles-right"></i> Warehouse Storage
          </p>
          <p>
            <i class="fa-solid fa-angles-right"></i> Real Time Tracking
          </p>
          <p>
            <i class="fa-solid fa-angles-right"></i> Transparent Pricing
          </p>
        </div>
        <div className="footer-box5">
          <h5>Newsletter</h5>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consecletur adipiscing elit, sed da
            eiusmod
          </p>
          <form>
            <input type="text" placeholder="Email Address"></input>
            <i class="fa-solid fa-angles-right"></i>
          </form>
        </div>
        <div className="footer-buttom">
          <p>
            &#169; Copyrights 2023 <span>Ampacy Soft</span> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
