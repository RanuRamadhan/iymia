import React from 'react';
import Link from 'next/link';

const PricingPlanStyle3 = () => {
  return (
    <>
      <div className="pricing-area bg-black-color pt-100 pb-75">
        <div className="container">
          <div className="section-title color-white">
            <span className="sub-title">PRICING TABLE</span>
            <h2>Registration Fee</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-pricing-box">
                <div className="title">
                  <h3>Offline</h3>
                  <p>Indonesia Participant</p>
                </div>
                <div className="price">
                  Rp 2.5jt <span>/Team</span>
                </div>

                <a href="https://forms.gle/WsmszEb2MeRbwmzm9">
                  <a className="default-btn">Purchase Plan</a>
                </a>

                <ul className="features-list">
                  <li>
                    <i className="ri-check-line"></i> T-Shirt for 3 people.
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Booth, tables and chairs.
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Lunch for 3 people x 1 day (at the time of judging) & snack for 3 people x 2 days.
                  </li>
                  <li>
                    <i className="ri-close-line"></i> Students (Elementary,Secondary,University) (each participant will get only e-certificate).
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-pricing-box active">
                <div className="title">
                  <h3>Offline</h3>
                  <p>International Participant</p>
                </div>
                <span className="popular">Most Popular</span>
                <div className="price">
                  $300 <span>/Team</span>
                </div>

                <a href="https://forms.gle/WsmszEb2MeRbwmzm9">
                  <a className="default-btn">Purchase Plan</a>
                </a>

                <ul className="features-list">
                  <li>
                    <i className="ri-check-line"></i> T-Shirt for 3 people.
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Booth, tables and chairs.
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Lunch for 3 people x 1 day (at the time of judging) & snack for 3 people x 2 days.
                  </li>
                  <li>
                    <i className="ri-close-line"></i> Students (Elementary,Secondary,University) (each participant will get only e-certificate).
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-pricing-box">
                <div className="title">
                  <h3>Online</h3>
                  <p>International Participant</p>
                </div>
                <div className="price">
                  $50 <span>/Team</span>
                </div>

                <a href="https://forms.gle/WsmszEb2MeRbwmzm9">
                  <a className="default-btn">Purchase Plan</a>
                </a>

                <ul className="features-list">
                  <li>
                    <i className="ri-check-line"></i> Students (Elementary,Secondary,University) (each participant will get only e-certificate).
                  </li>
                  <li>
                    <i className="ri-close-line"></i> T-Shirt for 3 people.
                  </li>
                  <li>
                    <i className="ri-close-line"></i> Booth, tables and chairs.
                  </li>
                  <li>
                    <i className="ri-close-line"></i> Lunch for 3 people x 1 day (at the time of judging) & snack for 3 people x 2 days.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape7">
          <img src="/images/shape/shape6.png" alt="shape" />
        </div>
        <div className="shape8">
          <img src="/images/shape/shape7.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default PricingPlanStyle3;
