// Navbar Component Style File Path: public/css/pages-and-components-css/navbar.scss

import React from 'react';
import Link from '@/utils/ActiveLink';

const NavbarStyleTwo = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show';
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-two">
        <div className="texap-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/images/iymia.png" alt="logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#" activeClassName="active">
                      <a onClick={(e) => e.preventDefault()} className="dropdown-toggle nav-link">
                        Final Result
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="https://drive.google.com/file/d/1-ikCxD9yAWIyxuk6YMcRWAqzOGXFUo_I/view?usp=share_link" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                           Final Result
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="https://drive.google.com/file/d/1OeC3mB-7IhxlDrpMfPif9wxUNIFlLQhq/view?usp=share_link" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Best Project
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="https://drive.google.com/file/d/1RSTgmSNBfVcm7CdetOKFCct4s7nqJtwz/view?usp=share_link" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Cash Prize
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="https://drive.google.com/file/d/1W31F346BaPubj-2hrW2QB8XfFpyndbkW/view?usp=share_link" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Departement of food science
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="https://drive.google.com/file/d/14Irq3-cVdwfq-V_a3Q64GEx6egCnRZ_-/view?usp=share_link" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            IYSA Special Award
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="https://drive.google.com/file/d/1NhFca_WD-kL1K2BzFLuMkaORP1URBliB/view?usp=share_link" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            IYSA Semi Grand Award
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="https://drive.google.com/file/d/1Lh0C1j_ljPH8Fg6IAwuRSLwPi-ETmlZ3/view?usp=share_link" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Miica Special Award
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="https://drive.google.com/file/d/1MTI7V3aPOLfUvOG2TRTmJXx5vvIcb5G4/view?usp=share_link" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Myso Special Award
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* <li className="nav-item">
                    <Link href="#">
                      <a onClick={(e) => e.preventDefault()} className="dropdown-toggle nav-link">
                        About Us
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about-simple" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            About Simple
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/about-modern" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            About Modern
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item megamenu">
                    <Link href="#">
                      <a onClick={(e) => e.preventDefault()} className="dropdown-toggle nav-link">
                        Pages
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <h6 className="submenu-title">Pages I</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link href="/team" activeClassName="active">
                                    <a onClick={toggleNavbar}>Team 1</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/team-2" activeClassName="active">
                                    <a onClick={toggleNavbar}>Team 2</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/how-it-works" activeClassName="active">
                                    <a onClick={toggleNavbar}>How It Works</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/gallery" activeClassName="active">
                                    <a onClick={toggleNavbar}>Gallery</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services" activeClassName="active">
                                    <a onClick={toggleNavbar}>Services</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/pricing" activeClassName="active">
                                    <a onClick={toggleNavbar}>Pricing Plan</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Pages II</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link href="/feedback" activeClassName="active">
                                    <a onClick={toggleNavbar}>Reviews</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/sign-in" activeClassName="active">
                                    <a onClick={toggleNavbar}>Sign In</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/sign-up" activeClassName="active">
                                    <a onClick={toggleNavbar}>Sign Up</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/forget-password" activeClassName="active">
                                    <a onClick={toggleNavbar}>Forget Password</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/privacy-policy" activeClassName="active">
                                    <a onClick={toggleNavbar}>Privacy Policy</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/terms-conditions" activeClassName="active">
                                    <a onClick={toggleNavbar}>Terms & Conditions</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Pages III</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link href="/screenshots" activeClassName="active">
                                    <a onClick={toggleNavbar}>Screenshots</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/faq" activeClassName="active">
                                    <a onClick={toggleNavbar}>FAQ</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/coming-soon" activeClassName="active">
                                    <a onClick={toggleNavbar}>Coming Soon</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/404" activeClassName="active">
                                    <a onClick={toggleNavbar}>404 Error Page</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/app-download" activeClassName="active">
                                    <a onClick={toggleNavbar}>App Download</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/contact" activeClassName="active">
                                    <a onClick={toggleNavbar}>Contact Us</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <a href="https://www.facebook.com/" target="_blank" className="d-block p-0">
                                <img src="/images/navbar.jpg" alt="image" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a onClick={(e) => e.preventDefault()} className="dropdown-toggle nav-link">
                        Features
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/features" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Features 1
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/features-2" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Features 2
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a onClick={(e) => e.preventDefault()} className="dropdown-toggle nav-link">
                        Blog
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog-grid" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Blog Grid
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-right-sidebar" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Blog Right Sidebar
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-left-sidebar" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Blog Left Sidebar
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-details" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Blog Details
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  {/* https://drive.google.com/file/d/1yJJ4MO3PvjmVegVQQFPjyP7MbbACl37K/view?usp=share_link */}
                  {/* <li className="nav-item">
                    <a href=" https://drive.google.com/file/d/1yJJ4MO3PvjmVegVQQFPjyP7MbbACl37K/view?usp=share_link 
                              " target="_blank" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Final Result
                      </a>
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a href=" https://drive.google.com/file/d/1AulhlH0qq9_cG8VJN39Ldd3JmDwx6qoP/view?usp=share_link 
                              " target="_blank" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Guide Book
                      </a>
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/gallery" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Gallery
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="https://drive.google.com/drive/folders/13Xy2A5KjBuoRmLZCVthoqu5m105pXwSK?usp=share_link" target="_blank" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Certificate Supervisor
                      </a>
                    </a>
                  </li>


                  <li className="nav-item">
                    <Link href="/faq" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        FAQ
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <div className="others-options">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScXpC2y4PjBWk81Ygmyt4oh3lTVLGjqNPYc-nAMp_GZTSV1WQ/viewform?usp=share_link" target="_blank">
                  <a className="default-btn">Register</a>
                </a>
              </div> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarStyleTwo;
