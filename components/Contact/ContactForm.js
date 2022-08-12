import React from 'react';

const ContactForm = () => {
  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Get in Touch</h2>
            <p>
              The IT industry offers a sea of options, from platforms,
              programming languages methodologies, technologies,
              tools, and more.
            </p>
          </div>

          <div className="contact-form">
            <form id="contactForm">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                      placeholder="Eg: Sarah Taylor"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      required
                      placeholder="hello@sarah.com"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      className="form-control"
                      id="phone_number"
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="msg_subject"
                      className="form-control"
                      id="msg_subject"
                      placeholder="Enter your subject"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      cols="30"
                      rows="6"
                      required
                      placeholder="Enter message..."
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="default-btn">
                    <i className="bx bx-paper-plane"></i> Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.838555902752!2d106.7826422!3d-6.4313337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1de9ddf653d9736f!2sIYSA!5e0!3m2!1sen!2sid!4v1660278029079!5m2!1sen!2sid"></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
