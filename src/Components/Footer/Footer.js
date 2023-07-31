import React from 'react';

import './Footer.css';

function Footer() {
  return (
    
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list" style={{fontSize:'12px',fontWeight:'400',color:'grey'}}>
            <ul>
              <li>Kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>TRENDING LOCATIONS</p>
          </div>
          <div className="list" style={{fontSize:'12px',fontWeight:'400',color:'grey'}}>
            <ul>
              <li>Bhubaneshwar</li>
              <li>Hyderabad</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list" style={{fontSize:'12px',fontWeight:'400',color:'grey'}}>
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
              <li>Waah Jobs</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list" style={{fontSize:'12px',fontWeight:'400',color:'grey'}}>
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
              <li>Blog</li>
              <li>OLX Autos Sell Car</li>
              <li>Vulnerability Disclosure Program</li>
            </ul>
          </div>
        </div>

      </div>
      <div className="footer">
        <div>
          <p style={{fontWeight:'700',fontSize:'12px'}}>Other countries</p>
          <p style={{fontSize:'12px'}}>Indonesia - Pakistan - South Africa</p>
        </div>
        <p style={{fontSize:'12px'}}>All rights reserved © 2006-2023 OLX</p>
      </div>
    </div>
  );
}

export default Footer;
