import React from "react";
import Avaliable from "./Avaliable";

function Ingame() {
  return (
    <div className="container-fluid ingame text-center">
      
        <div className="container text-center">
          <div className="text-center">
            <h4>SOMNIUM SPACE</h4>
            <h1>INGAME MECHANICS</h1>
          </div>
          <div className="row mt-5 mb-3">
            <div className="col-md-4 col-9">
              <div className="text-end">
                <h3>Cross Platform</h3>
                <p>Available on all major VR headsets.</p>
              </div>
            </div>
            <div className="col-md-2 col-3">
              <img className="img-fluid" src="Assets/img1.png" alt="" />
            </div>
            <div className="col-md-1 col-3">
              <img className="img-fluid" src="Assets/img2.png" alt="" />
            </div>
            <div className="col-md-4 col-9">
              <div className="text-start">
                <h3>Cross Platform</h3>
                <p>Available on all major VR headsets.</p>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4 col-9">
              <div className="text-end">
                <h3>Customizable PC Client</h3>
                <p>
                  Create and adjust your own layout setup for fast in-game
                  interaction.
                </p>
              </div>
            </div>
            <div className="col-md-2 col-3">
              <img className="img-fluid" src="Assets/img3.png" alt="" />
            </div>
            <div className="col-md-1 col-3">
              <img className="img-fluid" src="Assets/img4.png" alt="" />
            </div>
            <div className="col-md-4 col-9">
              <div className="text-start">
                <h3>Virtual Land Ownership</h3>
                <p>
                  Buy and customize your own land. Build anything you envision.
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4 col-9">
              <div className="text-end">
                <h3 style={{ color: "red" }}>Live Forever</h3>
                <p>
                  Automatic recording mode of yourself on your own property for
                  future AI analysis to bring your avatar to life.
                </p>
              </div>
            </div>
            <div className="col-md-2 col-3">
              <img className="img-fluid" src="Assets/img5.png" alt="" />
            </div>
            <div className="col-md-1 col-3">
              <img className="img-fluid" src="Assets/img6.png" alt="" />
            </div>
            <div className="col-md-4 col-9">
              <div className="text-start">
                <h3>Scriptable World</h3>
                <p>
                  Program your own experience and monetize through the asset
                  store or on your property.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-9">
              <div className="text-end">
                <h3>Blockchain</h3>
                <p>
                  Integration of blockchain allows true ownership of digital
                  goods, avatars, items and virtual land. We are creating a long
                  lasting Economy which will allow instant monetization for our
                  in-world creators.
                </p>
              </div>
            </div>
            <div className="col-md-2 col-3">
              <img className="img-fluid" src="Assets/img7.png" alt="" />
            </div>
            <div className="col-md-1 col-3">
              <img className="img-fluid" src="Assets/img8.png" alt="" />
            </div>
            <div className="col-md-4 col-9">
              <div className="text-start">
                <h3>Monetize Your Space</h3>
                <p>
                  Take advantage of fully programmatic VR advertisement plugin.
                  Capture and analyze gaze tracking, engagement and conversion
                  rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      <Avaliable />
    </div>
  );
}

export default Ingame;
