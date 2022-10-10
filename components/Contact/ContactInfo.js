import React from 'react';

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pb-100">
        <div className="container">
          <div className="contact-info-inner">
            <h2>Have any question in mind please call or mail us</h2>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon bg1">
                    <i className="ri-customer-service-2-line"></i>
                  </div>
                  <h3>
                    <a href="tel:+6281770914129">
                      (+62) 817-7091-4129
                    </a>
                  </h3>
                  <h3>
                    <a href="https://wa.me/6281770914129">
                      (+62) 817-7091-4129
                    </a>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon">
                    <i className="ri-earth-line"></i>
                  </div>
                  <h3>
                    <a href="mailto:iymia.iysa@gmail.com">
                      iymia.iysa@gmail.com
                    </a>
                  </h3>
                  <h3>
                    <a href="mailto:youngscientist.iysa@gmail.com">
                      youngscientist.iysa@gmail.com
                    </a>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon bg2">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <h3>
                    Jl. Kemang No. 63 RT 03 RW 06 Pasir Putih, Depok, Jawa
                    Barat 16519, Indonesia.
                  </h3>
                </div>
              </div>
            </div>

            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
