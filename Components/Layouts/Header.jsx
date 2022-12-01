import React from "react";
import { AiFillWindows } from "react-icons/ai";
import {FaDiscord,FaFacebookF,FaTwitter, FaInstagram, FaTelegramPlane, FaYoutube} from "react-icons/fa"

function Header() {
  return (
    <div className="header d-flex">
      <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="Assets/somniumspace.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="header2">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mt-4">
                  <a className="nav-link active " aria-current="page" href="#">
                    <p className="header-button ">Blockchain</p>
                  </a>
                </li>
                <li className="nav-item mt-4">
                  <a className="nav-link active" aria-current="page" href="#">
                    <p className="header-button">Mechanics</p>
                  </a>
                </li>
                <li className="nav-item mt-4">
                  <a className="nav-link active" aria-current="page" href="#">
                    <p className="header-button"> Partners</p>
                  </a>
                </li>
                <li className="nav-item mt-4">
                  <a className="nav-link active" aria-current="page" href="#">
                    <p className="header-button"> Events</p>
                  </a>
                </li>
                <li className="nav-item mt-1 ">
                  <a className="nav-link active " aria-current="page" href="#">
                    <button className="header-color-button">
                      Explore Somnium Map
                    </button>
                  </a>
                </li>
                <li className="nav-item mt-1">
                  <a className="nav-link active" aria-current="page" href="#">
                    <button className="header-color-button1">
                      Marketplace
                    </button>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <a className="nav-link active " aria-current="page" href="#">
                    <div className="hstack gap-3 header-button">
                      <div className=" ms-auto">Log In</div>
                      <div className="vr" />
                      <div className="">Sign Up</div>
                    </div>
                  </a>
                </li>
                <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">
                <FaDiscord size={"15px"} color={"white"}/>&nbsp;&nbsp;&nbsp;
               <FaFacebookF size={"12px"} color={"white"}/>&nbsp;&nbsp;&nbsp;
               <FaTwitter size={"12px"} color={"white"}/>&nbsp;&nbsp;&nbsp;
               <FaInstagram size={"12px"} color={"white"}/>&nbsp;&nbsp;&nbsp;
                <FaTelegramPlane size={"12px"} color={"white"}/>&nbsp;&nbsp;&nbsp;
                <FaYoutube size={"12px"} color={"white"}/>
                </a>
              </li>
                <li className="nav-item "></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </div>
      <div className="download ">
        <button type="button" className="btn btn-primary btn-client">
          Download VR Client <AiFillWindows size={"30px"} />{" "}
        </button>
        <button type="button" className="btn btn-primary join">
          Join Somnium <span className="badge web">Web</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
