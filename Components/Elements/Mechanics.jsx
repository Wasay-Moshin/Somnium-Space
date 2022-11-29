import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import React from "react";

function Mechanics() {
  return (
    <div className="mechanics">
      <div className="container text-center">
        <div className="row">
          <h4>SOMNIUM SPACE IS A</h4>
          <h1>VIRTUAL REALITY WORLD</h1>
          <h4>Open, Social & Persistent</h4>
          <div className="col-md-3">
            <p>
              We are creating an Open, Social, Virtual Reality world. A world
              with its own economy and its own currency. A VR world with its own
              Marketplace, Games, Social experiences and Virtual Land ownership.
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="Assets/VRmode.png" alt="" />
          </div>
          <div className="col-md-3">
            <p>
              We are creating an Open, Social, Virtual Reality world. A world
              with its own economy and its own currency. A VR world with its own
              Marketplace, Games, Social experiences and Virtual Land ownership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mechanics;
