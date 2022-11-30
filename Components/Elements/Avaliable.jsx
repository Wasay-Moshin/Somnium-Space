import React from "react";

function Avaliable() {
  return (
      <div className="container-fluid ">
        <div className="row Avaliable  mt-5 px-2 py-3">
          <div className="col-md-4 mb-2">
            <h6>Avaliable Now</h6>
          </div>
          <div className="col-md-4 mb-2">
            <div className="logos">
            <img
              className="img-fluid"
              src="Assets/window.png"
              alt=""
              width={50}
            />
            <img
              className="img-fluid"
              src="Assets/oculus.png"
              alt=""
              width={50}
            />
            <img
              className="img-fluid"
              src="Assets/vive.png"
              alt=""
              width={50}
            />
            <img
              className="img-fluid"
              src="Assets/steam.png"
              alt=""
              width={50}
            />
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <h6>Ready to play</h6>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Avaliable;
