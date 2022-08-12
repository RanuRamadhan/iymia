import React from 'react';

const Features = () => {
  return (
    <>
      <div className="features-area pt-100 pb-75">
        <div className="container">
          <ul className="features-boxes-list">
            <li>
              <div className="features-list-box">
                <div className="icon">
                  <i className="ri-parent-line"></i>
                </div>
                <h3>Social Science </h3>
              </div>
            </li>
            <li>
              <div className="features-list-box">
                <div className="icon bg2">
                  <i className="ri-leaf-line"></i>
                </div>
                <h3>Environmental Science</h3>
              </div>
            </li>
            <li>
              <div className="features-list-box">
                <div className="icon bg3">
                  <i className="ri-psychotherapy-line"></i>
                </div>
                <h3>Innovation Science</h3>
              </div>
            </li>
            <li>
              <div className="features-list-box">
                <div className="icon">
                  <i className="ri-virus-line"></i>
                </div>
                <h3>Life Sciences</h3>
              </div>
            </li>
            <li>
              <div className="features-list-box">
                <div className="icon bg4">
                  <i className="ri-home-gear-line"></i>
                </div>
                <h3>Engineering</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Features;
