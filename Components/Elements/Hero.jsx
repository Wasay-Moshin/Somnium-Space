import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
function Hero() {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//       slidesToSlide: 3, // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2, // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1, // optional, default to 1.
//     },
//   };
  return (
    <div className="hero">
      <div className="container-fluid">
        <div className="row">
        <video
              className="img-fluid vd"
              src="Assets/video1.mp4"
              loop
              autoPlay
              muted
            ></video>
          {/* <Carousel
            responsive={responsive}
            autoPlay="true"
            interval={3000}
            infinite="true"
            rewind={true}
            axis="horizontal"
            labels={true}
            arrows={false}
            showStatus={true}
            showIndicators={true}
            showThumbs={true}
          >
    
            <video
              className="img-fluid"
              src="Assets/video33.mp4"
              loop
              autoPlay
              muted
            ></video>
            <video
              className="img-fluid"
              src="Assets/video44.mp4"
              loop
              autoPlay
              muted
            ></video>
          </Carousel> */}
          <div className="position-absolute text-end set1">
            <div className="img">
              <img
                className="img-fluid"
                src="Assets/heroimg1.png"
                alt=""
                width={140}
              />
              <div className="px-5">
                <p>Unity</p>
              </div>
            </div>
            <div>
              <img
                className="img-fluid"
                src="Assets/heroimg2.png"
                alt=""
                width={140}
              />
              <div className="px-3 ">
                <p>Virtual Reality</p>
              </div>
            </div>{" "}
            <div>
              <img
                className="img-fluid"
                src="Assets/heroimg3.png"
                alt=""
                width={140}
              />
              <div className="px-5">
                <p>Builder</p>
              </div>
            </div>{" "}
            <div>
              <img
                className="img-fluid"
                src="Assets/heroimg4.png"
                alt=""
                width={140}
              />
              <div className="px-3 ">
                <p>Marketplace</p>
              </div>
            </div>
          </div>
          <div className="position-absolute text-center set">
            <div>
              <img className="img-fluid" src="Assets/data.png" alt="" />
              <img className="img-fluid" src="Assets/economy.png" alt="" />
              <br />
              <img
                className="img-fluid img-bt"
                src="Assets/btn1.png"
                alt=" "
                width={120}
              />
              <div className=" text">
                <p>Download</p>
              </div>
              <img className="img-fluid" src="Assets/round.png" alt="" width={80} />
              <span>Access CUBEs</span>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <div>
              <img className="img-fluid position-absolute" src="Assets/bt2.png" alt="" width={100}/>
              <img className="img-fluid position-relative" src="Assets/open sea.png" alt=""  width={100}/>
              </div>
              &nbsp;
              <div>
              <img className="img-fluid position-absolute" src="Assets/bt3.png" alt="" width={100}/>
              <img className="img-fluid position-relative px-3 mt-2 " src="Assets/uni.png" alt=""  width={100}/>
              </div>
              <div>
              &nbsp;
              <img className="img-fluid position-absolute" src="Assets/bt2.png" alt="" width={100}/>
              <img className="img-fluid position-relative px-3 mt-2" src="Assets/gemi.png" alt=""  width={100}/>
              </div>
            </div>
          
          </div>
        </div>
        <div className="row hero-footer">
          <div className="col-md-1 col-4 py-4">
            <img
              className="img-fluid"
              src="Assets/andorid.png"
              alt=""
              width={90}
            />          
          </div>{" "}
          <div className="col-md-1 col-4 py-4">
            <img
              className="img-fluid"
              src="Assets/mrt.png"
              alt=""
              width={90}
            />
          </div>{" "}
          <div className="col-md-1 col-4 py-4">
            <img
              className="img-fluid"
              src="Assets/zoom.png"
              alt=""
              width={90}
            />
          </div>{" "}
          <div className="col-md-1 col-4 py-4">
            <img
              className="img-fluid"
              src="Assets/venture.png"
              alt=""
              width={90}
            />
          </div>{" "}
          <div className="col-md-1 col-4 py-4">
            <img
              className="img-fluid"
              src="Assets/vr1.png"
              alt=""
              width={90}
            />
          </div>{" "}
          <div className="col-md-1  col-4 py-4">
            <img
              className="img-fluid"
              src="Assets/road.png"
              alt=""
              width={90}
            />
          </div>{" "}
          <div className="col-md-1 col-4 py-4">
            <img
              className="img-fluid"
              src="Assets/pc.png"
              alt=""
              width={90}
            />
          </div>{" "}
          <div className="col-md-1  col-4 py-4">
            <img
              className="img-fluid"
              src="Assets/coin.png"
              alt=""
              width={90}
            />
          </div>{" "}
          <div className="col-md-1 col-4 py-4">
            <img
              className="img-fluid"
              src="Assets/forbes.png"
              alt=""
              width={90}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
