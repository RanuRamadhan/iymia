// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from 'react';
import Link from 'next/link';

const FooterStyleOne = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-area">
        <div className="container">
          <div className="footer-content">
            <Link href="/">
              <a className="logo">
                <img src="/images/footer.png" alt="logo" />
              </a>
            </Link>

            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/groups/947919142367894"
                  target="_blank"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/channel/UC6-Hq4AnYbwiQWz7XemEwKw"
                  target="_blank"
                >
                  <i className="ri-youtube-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa/"
                  target="_blank"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/iysa_official/"
                  target="_blank"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Services</a>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Support</a>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Privacy Policy</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">FAQ's</a>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; {currentYear}{' '}
              <strong>IYMIA</strong>. Made by{' '}
              <a href="https://github.com/redheet" target="_blank">
                RedHet
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterStyleOne;
