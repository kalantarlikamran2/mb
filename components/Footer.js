import React from "react";
import footerBg from "../assets/img/footer-bg.png";
import footerLogo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerbg">
        <img src={footerBg} className="svg" alt="" />
      </div>
      <div className="footer-top pt-120 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={footerLogo} alt="" />
                  </a>
                </div>
                <p>
                Biz müasir texnoloji imkanlardan istifadə edərək həm hüquqi şəxslərə (şirkət, təşkilat, dövlət qurumları və s.), həm də fərdi qaydada istənilən şəxslərə operativ və etibarlı xidmət göstəririk.
                </p>

                <div className="footer-social-area">
                  <ul className="social-icons social-icons-light nav">
                    <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <h5>Ünvan</h5>
                </div>

                <div className="widget-body">
                  <ul className="address-list">
                    <li>
                      <span>
                        <i className="fa  fa-phone-square"></i>
                      </span>
                      +99455055555
                    </li>
                    <li>
                      <span>
                        <i className="fa  fa-envelope"></i>
                      </span>
                      kuryer@gmail.com.com
                    </li>
                    <li>
                      <span>
                        <i className="fa  fa-map"></i>
                      </span>
                      Bakı şəhəri Nərimanov ray 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <h5>Əlavələr</h5>
                </div>
              </div>

              <div className="widget-body">
                <div className="extra-link">
                  <div className="link-left">
                    <ul>
                      <li>
                        <a href="#">Haqqında</a>
                      </li>
                      <li>
                        <a href="#">Komanda</a>
                      </li>
                      <li>
                        <a href="#">komandya qatil</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>

                    </ul>
                  </div>
                  <div className="link-right">
                    <ul>
                      <li>
                        <a href="#">Kömək</a>
                      </li>
                      <li>
                        <a href="#">Partyorlar</a>
                      </li>
                      <li>
                        <a href="#">Müştəri mərkəzi</a>
                      </li>
                      <li>
                        <a href="#">Müştəri</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="widget-body">
                  <div className="twetter-post-inner">
                    <div className="footer-post-details">
                      @kuryer merkezi. <br />
                      <a href="http://yhdj58.tp8/JK">http://yhdj58.tp8/JK</a>
                    </div>
                    <div className="twetter-post">
                      <span>
                        <i className="fa fa-twitter"></i>
                      </span>
                      K - May 01, 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-text text-center">
          <p>©  K,K</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
