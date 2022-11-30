import React from "react";
import Avaliable from "./Avaliable";

function Patners() {
  return (
    <div className="container-fluid patners text-center">
      <div className="container text-start">
        <div className="text-center">
          <h4>SOMNIUM SPACE</h4>
          <h1>PARTNERS</h1>
        </div>
        <div className="row mt-5">
          <div className="col-md-2">
            <div className="mt-3">
              <img
                className="img-fluid"
                src="Assets/admix.png"
                alt=""
                width={130}
              />
            </div>
          </div>
          <div className="col-md-10">
            <h3>Somnium Space & Admix</h3>
            <p>
              We work together to bring advertising revenues for our players.
              It's the best and fastest way to monetize your property, measure,
              analyze how your audience interacts in VR.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-2">
            <div className="mt-3">
              <img
                className="img-fluid"
                src="Assets/vrba.png"
                alt=""
                width={130}
              />
            </div>
          </div>
          <div className="col-md-10">
            <h3>High Fidelity & JanusVR</h3>
            <p>
              We believe that the future of the VR space is in connectivity and
              interoperability between open social worlds. That’s why we
              partnered with HighFidelity and JanusVR on two groundbreaking
              projects:
            </p>
            <div className="d-flex">
              <h3>OASIS </h3>
              &nbsp;
              <div className="mt-2">
                <p>- Teleporting between VR worlds</p>
              </div>
            </div>
            <div className="d-flex">
              <h3>VRBA </h3>
              &nbsp;
              <div className="mt-2">
                <p>- Virtual Reality Blockchain Alliance.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-2">
            <div className="mt-3">
              <img
                className="img-fluid"
                src="Assets/sony.png"
                alt=""
                width={130}
              />
            </div>
          </div>
          <div className="col-md-10">
            <h3>Sony</h3>
            <p>
              In 2019 we partnered with Sony and their amazing 3D model creation
              technology that allows our users to create full embodiment avatars
              of themselves in minutes alongside any 3D models for Somnium
              Store. Sony’s VR store in Somnium Space was among the world’s
              first.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-2">
            <div className="mt-3">
              <img
                className="img-fluid"
                src="Assets/polygon.png"
                alt=" "
                width={130}
              />
            </div>
          </div>
          <div className="col-md-10">
            <h3>Polygon & OpenSea</h3>
            <p>
              Our blockchain partners Polygon and OpenSea offer the best
              technology there is in their specific fields. OpenSea’s online
              platform is the largest marketplace for online collectibles, while
              Polygon’s unique second layer brings speed and close to zero
              transaction costs to our users for our in-game transactions.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-2">
            <div className="mt-3">
              <img
                className="img-fluid"
                src="Assets/bga.png"
                alt=" "
                width={130}
              />
            </div>
          </div>
          <div className="col-md-10">
            <h3>Blockchain Gaming Alliance</h3>
            <p>
              We became a member of Blockchain Game Alliance to contribute
              towards building a true and decentralized Metaverse.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-2">
            <div className="mt-3">
              <img
                className="img-fluid"
                src="Assets/gemini.png"
                alt=" "
                width={130}
              />
            </div>
          </div>
          <div className="col-md-10">
            <h3>Somnium Space & Gemini</h3>
            <p>
              We are excited to be partners with one of the leading exchanges in
              the world. Gemini has invested into Somnium Space and together we
              believe and work towards an open and decentralized future of The
              Metaverse.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-2">
            <div className="mt-3">
              <img
                className="img-fluid"
                src="Assets/hola.png"
                alt=" "
                width={130}
              />
            </div>
          </div>
          <div className="col-md-10">
            <h3>Somnium Space & Holaplex</h3>
            <p>
              We have partnered with Holaplex to release our first official NFT
              store on Solana blockchain. We are delighted to work with this
              energetic and innovative team.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-2">
            <div className="mt-3">
              <img
                className="img-fluid"
                src="Assets/ftx.png"
                alt=" "
                width={130}
              />
            </div>
          </div>
          <div className="col-md-10">
            <h3>Somnium Space & FTX</h3>
            <p>
              We have partnered with one of the leading and largest exchanges in
              the world to bring Somnium NFTs into their official NFT
              marketplace. We are excited about this partnership and together we
              are looking forward to a long-term relationship.
            </p>
          </div>
        </div>
      </div>
      <div>
      <Avaliable/>
      </div>
    </div>
  );
}

export default Patners;
