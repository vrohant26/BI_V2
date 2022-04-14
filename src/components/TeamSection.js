import React from "react";

export default function TeamSection() {
  return (
    <>
      <section className="team-sec mb-5 position-relative" id="team-sec">
        <div className="left-overlay"></div>
        <div className="container">
          <div className="row inner-team-sec padding-top padding-bottom">
            <div className="col-12 col-lg-4 text-center text-lg-left">
              <div className="team-detail wow fadeInLeft">
                <h4 className="heading">
                  WE HAVE <span>AMAZING TEAM</span>
                </h4>
                <p className="text">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting. Lorem Ipsum has been the industry’s standard
                  dummy.
                </p>
                <a href="!#" className="btn mt-5 anim-btn rounded-pill">
                  VIEW TEAM <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="team-area wow fadeInRight">
                <div className="row no-gutters team-carousel owl-carousel owl-theme">
                  <div className="item text-center">
                    <div className="team-box">
                      <div className="img-holder position-relative">
                        <img
                          src="https://www.brandinstitute.com/wp-content/uploads/2019/11/jd-new.jpg"
                          alt="..."
                        />
                        <div className="overlay d-flex justify-content-center align-items-center">
                          {/* <!--Team Social--> */}
                          <ul className="team-social">
                            <li>
                              <a
                                className="facebook-text-hvr d-flex justify-content-center align-items-center"
                                href="!#"
                              >
                                <i className="lab la-linkedin-in "></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-info">
                        <h4 className="team-name">James L. Dettore, M.A</h4>
                        <p className="team-designation">Chairman & Ceo</p>
                      </div>
                    </div>
                  </div>
                  <div className="item text-center">
                    <div className="team-box">
                      <div className="img-holder position-relative">
                        <img
                          src="https://www.brandinstitute.com/wp-content/uploads/2019/11/web-bill.jpg"
                          alt="..."
                        />
                        <div className="overlay d-flex justify-content-center align-items-center">
                          {/* <!--Team Social--> */}
                          <ul className="team-social">
                            <li>
                              <a
                                className="facebook-text-hvr d-flex justify-content-center align-items-center"
                                href="!#"
                              >
                                <i className="lab la-linkedin-in "></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-info">
                        <h4 className="team-name">William Johnson</h4>
                        <p className="team-designation">
                          Co-Chief Executive Officer & President
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="team-nav team-prev" id="team-prev">
                  <i className="fas fa-angle-left"></i>
                </button>
                <button className="team-nav team-next" id="team-next">
                  <i className="fas fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
