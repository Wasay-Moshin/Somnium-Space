import React from "react";
import {AiFillWindows} from "react-icons/ai"

function Header() {
  return (
    // <div className="header">
    //   <nav className="navbar navbar-expand-lg ">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="/">
    //         <img className="img-fluid" src="Assets/somniumspace.png" alt="" width={"140px"}></img>
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div
    //         className="collapse navbar-collapse"
    //         id="navbarSupportedContent"
    //       >
    //         <div className="header2">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link active " href="/">
    //               <b className="c1">Blockchain</b>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link active " href="/">
    //               <b className="c1">Mechanics</b>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link active " href="/">
    //               <b className="c1">Partners</b>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link active " href="/">
    //               <b className="c1">Events</b>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link active " href="/">
    //               <button type="button" class="btn btn-primary">
    //                 Explore Somnium Map
    //               </button>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link active " href="/">
    //               <button type="button" class="btn btn-primary btn2">
    //                 Marketplace
    //               </button>
    //             </a>
    //           </li>
    //         </ul>
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
    //           <li className="nav-item">
    //             <a className="nav-link active " href="/">
    //               <b className="c1">Blockchain</b>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link active " href="/">
    //               <b className="c1">Mechanics</b>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link active " href="/">
    //               <b className="c1">Partners</b>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link active " href="/">
    //               <b className="c1">Events</b>
    //             </a>
    //           </li>
       
    //         </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
     
    // </div>
    // <div className="d-flex main-header">
    //   <div className="header d-flex">
    //     <nav className="navbar navbar-expand-lg ">
    //       <div className="container-fluid header ">
    //         <a className="navbar-brand" href="/">
    //           <img src="Assets/somnium.png" alt="somniumlogo" />
    //         </a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //         <button
    //           className="navbar-toggler"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbarNavDropdown"
    //           aria-controls="navbarNavDropdown"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //           <div>
    //           <ul className="navbar-nav">
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link active blockchain"
    //                 aria-current="page"
    //                 href="/"
    //               >
    //                 Blockchain
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link active" aria-current="page" href="/">
    //                 Mechanics
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link active" aria-current="page" href="/">
    //                 Partners
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link active" aria-current="page" href="/">
    //                 Events
    //               </a>
    //             </li>
    //           </ul>
    //           <ul className="navbar-nav">
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link active blockchain"
    //                 aria-current="page"
    //                 href="/"
    //               >
    //                 LogIn
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link active" aria-current="page" href="/">
    //                 SignUp
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link active" aria-current="page" href="/">
    //                 Partners
    //               </a>
    //             </li>
    //           </ul>
    //           </div>
    //         </div> 
    //         <div>
    //           <div>
    //             <button type="button" className="btn btn-primary explore">
    //               Explore Somnium App
    //             </button>
    //             <button type="button" className="btn btn-primary market">
    //               MarketPlace
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    //   <div className="download ">
    //     <button type="button" className="btn btn-primary btn-client">
    //       Download VR Client <AiFillWindows size={"30px"}/>{" "}
    //     </button>
    //     <button type="button" className="btn btn-primary join">
    //       Join Somnium <span className="badge web">Web</span>
    //     </button>
    //   </div>
    // </div>
    <div className="header d-flex">
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
                 <button className="header-color-button">Explore Somnium Map</button>
                </a>
              </li>
              <li className="nav-item mt-1">
                <a className="nav-link active" aria-current="page" href="#">
                <button className="header-color-button1">Marketplace</button>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active " aria-current="page" href="#">
                <p className="header-button ">Log In</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">
                <p className="header-button">Sign Up</p>
                </a>
              </li>
              <li className="nav-item ">
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
      <div className="download ">
        <button type="button" className="btn btn-primary btn-client">
          Download VR Client <AiFillWindows size={"30px"}/>{" "}
        </button>
        <button type="button" className="btn btn-primary join">
          Join Somnium <span className="badge web">Web</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
