import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FacebookEmbed } from "react-social-media-embed";
import { RiFacebookCircleLine } from "react-icons/ri";
import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaMedium,
  FaLinkedin,
} from "react-icons/fa";
function Community() {
  return (
    <div className="container-fluid community">
      <div className="container">
        <div className="text-center">
          <h3>KEEP IN TOUCH WITH</h3>
          <h1>SOMNIUM COMMUNITY</h1>
          <h6>Share your thoughts with Us and the World</h6>
        </div>
        <div className="text-center mt-4">
          <p>
            We are an open social world. Our community is the most important
            thing. We are active and happy to <br /> answer every question
            through our live channels or through our social channels.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="text-center mt-3 mb-3">
              <TiSocialTwitterCircular size={"70px"} color={"white"} />
            </div>
            <div>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="saurabhnemade"
                options={{ height: 450 }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center mt-3 mb-4">
              <RiFacebookCircleLine size={"60px"} color={"white"} />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FacebookEmbed
                url="https://www.facebook.com/SomniumSpace"
                width={500}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="social-media mt-5">
        <div className="hstack gap-5">
          <div className=" ms-auto">
            <FaTelegramPlane size={35} color={"white"} />{" "}
          </div>
          <div className="vr" />
          <div>
            <FaInstagram size={35} color={"white"} />
          </div>
          <div className="vr" />
          <div>
            <FaYoutube size={35} color={"white"} />
          </div>
          <div className="vr" />
          <div>
            <FaMedium size={35} color={"white"} />
          </div>
          <div className="vr" />
          <div>
            {" "}
            <FaLinkedin size={35} color={"white"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
