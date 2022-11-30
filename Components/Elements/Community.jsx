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
import {RiFacebookCircleLine} from "react-icons/ri"
function Community() {
  return (
    <div className="community">
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
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="saurabhnemade"
              options={{ height: 400 }}
            />
          </div>
          <div className="col-md-6">
            <div className="text-center mt-3 mb-4">
            <RiFacebookCircleLine size={"60px"} color={"white"} />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FacebookEmbed
                url="https://www.facebook.com/SomniumSpace?fref=nf"
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
