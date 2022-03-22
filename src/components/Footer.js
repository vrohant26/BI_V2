import React from "react";

export default function () {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className="footer-style-1">
        <div className="container">
          <div className="row align-items-center">
            {/* <!--Social--> */}
            <div className="col-lg-6">
              <div className="footer-social text-center text-lg-left">
                <ul className="list-unstyled">
                  <li>
                    <a className="wow fadeInUp" href="javascript:void(0);">
                      <i aria-hidden="true" className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInDown" href="javascript:void(0);">
                      <i aria-hidden="true" className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInUp" href="javascript:void(0);">
                      <i
                        aria-hidden="true"
                        className="fab fa-google-plus-g"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInDown" href="javascript:void(0);">
                      <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInUp" href="javascript:void(0);">
                      <i aria-hidden="true" className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInDown" href="javascript:void(0);">
                      <i aria-hidden="true" className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--Text--> */}
            <div className="col-lg-6 text-center text-lg-right">
              <p className="company-about fadeIn">
                © {date} Brand Institute Inc.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
