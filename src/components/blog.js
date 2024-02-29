import "../styles/price.css";
import icon from "../images/icon.png";
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import blogicon from "../images/blog-icon.jpg";
import blogicon1 from "./image/blogicon1.jpg";

function Blog() {
  return (
    <div className="blog">
      <h3>
        <span>
          <img src={icon} alt="logo" />
        </span>
        Our News from Blog
        <span>
          <img src={icon} alt="logo" />
        </span>
      </h3>
      <h5>The latest News & Best Blog</h5>
      <div className="blog-box">
        <div
          className="blog-box1"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <img src={blog1} alt="logo"></img>
        </div>
        <div
          className="blog-box2"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <div className="blog-box2-img">
            <img src={blogicon} alt="logo"></img>
            <div className="blog-box2-text">
              <h4>By</h4>
              <p>Website_stock</p>
            </div>
            <h6>
              <i class="fa-regular fa-comments"></i>
              <span>(6)Comments</span>
            </h6>
          </div>
          <h2>New Additions to our great Metro trucks.</h2>
          <h1>Read more</h1>
          <div className="blog-img">
            <img src={blogicon1} alt="logo"></img>
          </div>
        </div>
        <div
          className="blog-box1"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <img src={blog2} alt="logo"></img>
        </div>
        <div
          className="blog-box2"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <div className="blog-box2-img">
            <img src={blogicon} alt="logo"></img>
            <div className="blog-box2-text">
              <h4>By</h4>
              <p>Website_stock</p>
            </div>
            <h6>
              <i class="fa-regular fa-comments"></i>
              <span>(6)Comments</span>
            </h6>
          </div>
          <h2>New Additions to our great Metro trucks.</h2>
          <h1>Read more</h1>
          <div className="blog-img">
            <img src={blogicon1} alt="logo"></img>
          </div>
        </div>
        <div
          className="blog-box1"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <img src={blog3} alt="logo"></img>
        </div>
        <div
          className="blog-box2"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <div className="blog-box2-img">
            <img src={blogicon} alt="logo"></img>
            <div className="blog-box2-text">
              <h4>By</h4>
              <p>Website_stock</p>
            </div>
            <h6>
              <i class="fa-regular fa-comments"></i>
              <span>(6)Comments</span>
            </h6>
          </div>
          <h2>New Additions to our great Metro trucks.</h2>
          <h1>Read more</h1>
          <div className="blog-img">
            <img src={blogicon1} alt="logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
