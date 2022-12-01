import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Avaliable from "./Avaliable";
function Mechanics() {
  return (
    <div className="mechanics">
      <div className="container-fluid text-center">
        <div className="row">
          <h4>SOMNIUM SPACE IS A</h4>
          <h1>VIRTUAL REALITY WORLD</h1>
          <h4>Open, Social & Persistent</h4>
          <div className="col-md-3">
            <div className="text-end">
              <p>
                We are creating an Open, Social, Virtual Reality world. A world
                with its own economy and its own currency. A VR world with its
                own Marketplace, Games, Social experiences and Virtual Land
                ownership.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="Assets/VRmode.png" alt="" />
          </div>
          <div className="col-md-3">
            <div className="text-start">
              <p>
                We are creating an Open, Social, Virtual Reality world. A world
                with its own economy and its own currency. A VR world with its
                own Marketplace, Games, Social experiences and Virtual Land
                ownership.
              </p>
            </div>
          </div>
        </div>
        <div className="row mech2">
          <div className="col-md-3 col-10">
            <img className="img-fluid lcd" src="Assets/lcd.png" alt="" />
            <div className="text-end chat">
              <p>Chat, Build,</p>
              <p>Trade in dedicated Somnium PC client</p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="pc-vr">
              <p>PC VR Mode</p>
              <p>Live Inside Somnium World</p>
            </div>
          </div>
          <div className="col-md-3 col-10">
            <img className="img-fluid vr-img" src="Assets/Vr.png" alt="" />
            <div className="text-start Oculus ">
              <p>Oculus Quest</p>
              <p>Compatible</p>
            </div>
          </div>
        </div>
        <div>
          <Avaliable />
        </div>
      </div>
    </div>
  );
}

export default Mechanics;
