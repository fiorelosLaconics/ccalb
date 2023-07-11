import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { scrollAnimation } from "../../utils/scrollAnimation";

function Footer() {




  const navTo = (sectionName) => {
    scrollAnimation(document.getElementById(sectionName), true)
  }

  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <img src="/icon-logo.png" style={{ position: "absolute", right: "0px", top: "0px" }} width={50} alt="" />
            <div style={{
              position: "relative"
            }}>
              <h2 style={{ color: "white" }}>CCALB BIO</h2>
              <div style={{
                position: "absolute",
                bottom: "7px",
                left: "0px",
                width: "20%",
                height: "2px",
                backgroundColor: "var(--themeColor)"
              }}></div>
            </div>
            <section className="footer-subscription">
              <div className="input-areas">
                <p style={{ color: "white", padding: "20px 0px", textAlign: "justify" }}>
                  Over the years CCALB  has stood-up for exceptionally high standards of quality and utmost reliability, with its convictions for delivering truly world class products.
                </p>
              </div>
            </section>

          </div>

          {/* <div class="footer-link-items">
            <h2>OUR SERVCIES</h2>
            <Link to="/">Home</Link>
            <Link to="/">About Us</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div> */}

          <div class="footer-link-items">
            <div style={{
              position: "relative"
            }}>
              <h2 style={{ color: "white" }}>QUICK LINKS</h2>
              <div style={{
                position: "absolute",
                bottom: "7px",
                left: "0px",
                width: "20%",
                height: "2px",
                backgroundColor: "var(--themeColor)"
              }}></div>
            </div>
            <div onClick={() => navTo("sectionOne")} className="footer-links-scroll-animation">About Us</div>
            <div onClick={() => navTo("sectionTwo")} className="footer-links-scroll-animation">Our Services</div>
            <div onClick={() => navTo("sectionThree")} className="footer-links-scroll-animation">What we do</div>
            <div onClick={() => navTo("sectionFour")} className="footer-links-scroll-animation">Our Process</div>
            <div onClick={() => navTo("form-section")} className="footer-links-scroll-animation">Contact Us</div>
            <div onClick={() => navTo("sectionFive")} className="footer-links-scroll-animation">Our Team</div>
            <div onClick={() => navTo("sectionSix")} className="footer-links-scroll-animation">Clients Feedback</div>
          </div>
          <div class="footer-link-items">
            <div style={{
              position: "relative"
            }}>
              <h2 style={{ color: "white" }}>CONTACT INFO</h2>
              <div style={{
                position: "absolute",
                bottom: "7px",
                left: "0px",
                width: "20%",
                height: "2px",
                backgroundColor: "var(--themeColor)"
              }}></div>
            </div>
            <div>
              <div className="contactInfoIcons">
                <img className="ContactIconImage" src="/contactIcon/location-dot-solid.svg" alt="" />
                <a className="LocationPro" href="https://www.google.com/maps/place/Kombinati+Metalurgjik/@41.0863195,20.0159786,17z/data=!3m1!4b1!4m5!3m4!1s0x13506a758a635d8d:0x39d706cc4cbc1677!8m2!3d41.0863155!4d20.0181673">
                  Kombinati Metalurgjik, Object Nr. 45, Elbasan, Albania.
                </a>
              </div>
              <div className="spacecode"></div>
              <p
                style={{
                  marginBottom: "10px",
                  color: "white",
                  marginTop: "15px",
                }}
              >
                <div className="contactInfoIcons">
                  <img className="ContactIconImage" src="/contactIcon/phone-solid.svg" alt="" />
                  <p style={{ marginRight: "20px" }}><a className="LocationPro" href="tel:+355 692091205">+355 692091205</a></p>
                </div>

              </p>
              <p
                style={{
                  marginBottom: "10px",
                  color: "white",
                  marginTop: "15px",
                }}
              >
                <div className="contactInfoIcons">
                  {/* <img className="ContactIconImage" src="/contactIcon/phone-solid.svg" alt="" /> */}
                  <p style={{ marginRight: "20px" }}><a className="LocationPro" href="tel:+355694893050">+355 694893050</a></p>
                </div>

              </p>

              <p style={{ marginBottom: "10px", color: "white" }}>
                <div className="contactInfoIcons">
                  <img className="ContactIconImage" src="/contactIcon/at-solid.svg" alt="" />
                  <p style={{ marginRight: "20px" }}><a className="LocationPro" href="mailto:office.ccalb@gmail.com">office.ccalb@gmail.com</a></p>
                </div>
              </p>
              <p style={{ marginBottom: "10px", color: "white" }}>
                <div className="contactInfoIcons">
                  <img className="ContactIconImage" src="/contactIcon/linkedin-brands.svg" alt="" />
                  <a href="https://al.linkedin.com/company/ccalb-shpk" className="LocationPro" style={{ marginRight: "20px" }}>CCALB shpk</a>
                </div>
              </p>
              {/* <p style={{ marginBottom: "10px", color: "white" }}>
                <p style={{ marginRight: "20px" }}>Website:</p>
                <p>"http://demo.com"</p>
              </p> */}
            </div>
          </div>
          <div className="FooterCellDecoration">
            <div style={{ position: "relative" }}>
              <h1 style={{ color: "white", width: "200px", paddingBottom: "10px" }}>Our Location</h1>
              <div style={{
                position: "absolute",
                bottom: "7px",
                left: "0px",
                width: "20%",
                height: "2px",
                backgroundColor: "var(--themeColor)"
              }}></div>
            </div>
            <br />
            <img src="/footer/albania dot.png" width={200} height={250} alt="" />
          </div>
        </div>

      </div>
      <section className="social-media">
        <p className="website-rights">
          ©CCALB 2022<br />
          Powered by <a style={{ textDecoration: "none", color: "white" }} href="https://laconics.net/">LACONICS</a>
        </p>
      </section>
    </div>
  );
}

export default Footer;
