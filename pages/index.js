import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import MainBanner from '@/components/HomeDemo3/MainBanner';
import PartnerStyle2 from '@/components/Common/PartnerStyle2';
import BestAppEver from '@/components/HomeDemo3/BestAppEver';
import Features from '@/components/HomeDemo3/Features';
import IntroVideo from '@/components/Common/IntroVideo';
// import KeyFeatures from '@/components/HomeDemo3/KeyFeatures';
// import SoftwareIntegrations from '@/components/Common/SoftwareIntegrations';
// import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2';
import PricingPlanStyle3 from '@/components/PricingPlan/PricingPlanStyle3';
// import ClientFeedbackStyle3 from '@/components/Feedbacks/ClientFeedbackStyle3';
// import BlogPost from '@/components/Common/BlogPost';
import FooterStyleOne from '@/components/_App/FooterStyleOne';
import AppScreenshotsStyle6 from '@/components/AppScreenshots/AppScreenshotsStyle6';
import SphereGeometry from '@/components/threejs/Sphere';

const IndexPage3 = () => {
  return (
    <>
      <NavbarStyleTwo />

      {/* <SphereGeometry /> */}

      <MainBanner />

      {/* <PartnerStyle2 /> */}

      <BestAppEver />

      <Features />

      {/* <IntroVideo /> */}

      {/* <KeyFeatures /> */}

      {/* <SoftwareIntegrations /> */}

      {/* <AppDownloadStyle2 /> */}

      {/* <PricingPlanStyle3 /> */}

      <AppScreenshotsStyle6 />

      {/* <ClientFeedbackStyle3 /> */}

      {/* <BlogPost /> */}

      <div className="section-title">
        <span className="sub-title">========</span>
        <h2>How to Register</h2>
        <br />
        <span className="sub-title">========</span>
      </div>
      <div className="how-it-works-area ptb-100">
        <div className="container">
          <div className="how-it-works-content">
            <div className="number">1</div>

            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 1</h3>
                  <span>Register your team</span>
                </div>
              </div>

              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Click the button registration on the top right off
                    this website.
                  </p>
                  <img
                    src="/images/how-it-works/registration.png"
                    alt="register-team"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">2</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 2</h3>
                  <span>Notification Mail</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    We will send a confirmation email about the
                    completed registration to your email.
                  </p>
                  <img
                    src="/images/how-it-works/notification.png"
                    alt="mail-notification"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">3</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 3</h3>
                  <span>Letter of Acceptance &#40;LoA&#41;</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    <strong>Attention!</strong>
                  </p>
                  <ul>
                    <li>
                      Open your <strong>email</strong> and click the
                      link to download the letter of acceptance and
                      invoice.
                    </li>
                    <li>
                      If you can't find the email letter of
                      acceptance, please{' '}
                      <strong>Check the Spam Email</strong>
                    </li>
                    <li>
                      Contact our team if you don't receive any email{' '}
                      <a
                        href="https://wa.me/6281770914129"
                        target="_blank"
                      >
                        Office team
                      </a>{' '}
                      or&nbsp;
                      <a
                        href="https://wa.me/6283117176995"
                        target="_blank"
                      >
                        Astri
                      </a>
                    </li>
                  </ul>
                  <img src="/images/how-it-works/LoA.png" alt="LoA" />
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">4</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 4</h3>
                  <span>Select Your Preferred Payment Method</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Please select the payment that was sent to you in
                    the previous email.
                  </p>
                  <img
                    src="/images/how-it-works/payment-method.jpg"
                    alt="payment-method"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">5</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Step 5</h3>
                  <span>Presentation Project Offline or Online</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>Presentation must be english langueges.</p>
                  <img
                    src="/images/how-it-works/presentation.jpg"
                    alt="presentation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterStyleOne />
    </>
  );
};

export default IndexPage3;
