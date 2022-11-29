import React from "react";
import {FaDiscord,FaFacebookF,FaTwitter, FaInstagram, FaTelegramPlane, FaYoutube} from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row px-3">
          <div className="col-md-3">
            <div>
              <img className="img-fluid" src="Assets/somniumspace.png" alt="" />
              <div className="mt-2">
              <p>
                © 2022 by Somnium Space LTD. Somnium Space and Somnium Space
                Logo are trademarks of Somnium Space LTD. All other trademarks
                are the property of their respective owners. All rights
                reserved.
              </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div>
                <h3>Get Somnium</h3>
            </div>
            <div>
                <h3>Events</h3>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div>
                <h3>Partners</h3>
            </div>
            <div>
                <h3>Support</h3>
            </div>
          </div>    
          <div className="col-md-2 col-7">
            <div>
                <h3>Terms of Service</h3>
            </div>
            <div>
                <h3>Privacy Policy</h3>
            </div>
          </div>
          <div className="col-md-1 col-2">
            <div>
                <h3>FAQ</h3>
            </div>
            <div>
                <h3>Contact</h3>
            </div>
          </div>
          <div className="col-md-2 mt-2">
            <div>
               <FaDiscord size={"30px"} color={"white"}/>&nbsp;&nbsp;&nbsp;&nbsp;
               <FaFacebookF size={"25px"} color={"white"}/>&nbsp;&nbsp;&nbsp;&nbsp;
               <FaTwitter size={"25px"} color={"white"}/>
            </div>
            <div className="mt-2">
                <FaInstagram size={"25px"} color={"white"}/>&nbsp;&nbsp;&nbsp;&nbsp;
                <FaTelegramPlane size={"25px"} color={"white"}/>&nbsp;&nbsp;&nbsp;&nbsp;
                <FaYoutube size={"25px"} color={"white"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
