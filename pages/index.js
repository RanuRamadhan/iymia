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
        <h2>Registration Process</h2>
        <br />
        <span className="sub-title">========</span>
      </div>
      <div className="how-it-works-area ptb-100">
        <div className="container">
          <div className="how-it-works-content">
            <div className="number">1</div>

            <h2>How To Register?</h2>
            <div className="video_content">
              <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/DCw862udnZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                  <p>Presentation must be in english.</p>
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
