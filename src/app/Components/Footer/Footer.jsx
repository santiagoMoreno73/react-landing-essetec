import React from "react";

const Footer = () => {
  return (
    <section className="footer" id="#footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div>
              <h5 className="mb-4 footer-list-title">About the Invoza</h5>
              <p className="">
                The Invoza is a sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque rem eaque
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2 offset-lg-1">
            <div>
              <h5 className="mb-4 footer-list-title">Company</h5>
              <ul className="list-unstyled footer-list-menu">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Media</a>
                </li>
                <li>
                  <a href="/">Career</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div>
              <h5 className="footer-list-title mb-4">More Info</h5>
              <ul className="list-unstyled footer-list-menu">
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">For marketing</a>
                </li>
                <li>
                  <a href="/"> For Ceos</a>
                </li>
                <li>
                  <a href="/">For Agencies</a>
                </li>
                <li>
                  <a href="/">Our Apps</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h5 className="footer-list-title mb-4">Company</h5>
            <div>
              <div className="media">
                R{" "}
                <div className="media-body">
                  <p>476 University Drive Ridge, IL 61257</p>
                </div>
              </div>
              <div className="media">
                R{" "}
                <div className="media-body">
                  <p>476 University Drive Ridge, IL 61257</p>
                </div>
              </div>
              <div className="media">
                R{" "}
                <div className="media-body">
                  <p>476 University Drive Ridge, IL 61257</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row mt-4">
          <div className="text-center">
            <p className="text-white mb-0">2024 © ESSETEC. Created by ❤️</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
