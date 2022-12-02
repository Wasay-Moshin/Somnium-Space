import React from "react";

function Ownership() {
  return (
    <div className="ownership">
      <div className="container">
        <div className="row ">
          {/* <img src="Assets/blue blur.png"  className="img-fluid img-blur" alt="" /> */}
          <div  className="">
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
           <div className="row">
            <div className="col-md-3">
              <div className="d-flex">
              <img className="img-fluid shoes" src="Assets/shoes.png " alt="" width={100}/>
              <img className="img-fluid shoeshadow position-absolute" src="Assets/shoeshadow.png" alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex">
              <img className="img-fluid user" src="Assets/user.png " alt="" width={80}/>
              <img className="img-fluid position-absolute usershadow" src="Assets/usershadow.png" alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex">
              <img className="img-fluid location" src="Assets/location1.png " alt="" width={90}/>
              <img className="img-fluid position-absolute locationshadow" src="Assets/locationshadow.png" alt="" width={200}/>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex">
              <img className="img-fluid watch " src="Assets/watch.png " alt="" width={90}/>
              <img className="img-fluid position-absolute watchshadow" src="Assets/watchshadow.png" alt="" width={90}/>
              </div>
            </div>
            
           </div>
        </div>
      </div>
    </div>
  );
}

export default Ownership;
