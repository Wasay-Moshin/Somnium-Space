import React from "react";

function Ownership() {
  return (
    <div className="ownership">
      <div className="container">
        <div className="row">
          <img src="Assets/blue blur.png" alt="" />
          <div className="position-absolute">
            <div className="text-center mt-5">
              <h4>True Ownership of In-Game Assets on</h4>
              <h1>ETHEREUM & SOLANA BLOCKCHAIN</h1>
              <span>in Partnership with</span>
            </div>
            <img
              className="img-fluid poly"
              src="Assets/poly.png"
              alt=""
              width={200}
            />
            <img
              className="img-fluid hola"
              src="Assets/hola.png"
              alt=""
              width={200}
            />
            <div>
              <img
                className="img-fluid opensea "
                src="Assets/open sea.png"
                alt=""
                width={200}
              />
              <img
                className="img-fluid  ft "
                src="Assets/ft.png"
                alt=""
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ownership;
