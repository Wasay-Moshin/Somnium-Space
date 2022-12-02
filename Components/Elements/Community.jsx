import React from "react";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { RiFacebookCircleLine } from "react-icons/ri";
import {FaDiscord} from "react-icons/fa"
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
          <div className="text-center mb-3 mt-3">
            <FaDiscord  size={"50px"} color={"white"}/>
          </div>
          <iframe
            src="https://e.widgetbot.io/channels/494994753146847233/496817347211034630"
            width="800"
            height="400"
          ></iframe>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="text-center mt-3 mb-3">
              <TiSocialTwitterCircular size={"70px"} color={"white"} />
            </div>
            <iframe
              id="twitter-widget-0"
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
              class=""
              style={{
                position: "static",
                visibility: "visible",
                width: "500px",
                height: "600px",
                display: "block",
                flexGrow: "1",
              }}
              title="Twitter Timeline"
              src="https://syndication.twitter.com/srv/timeline-profile/screen-name/somniumspace?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19ibHVlX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=en&amp;maxHeight=600px&amp;origin=https%3A%2F%2Fsomniumspace.com%2F&amp;sessionId=139f9fe37ce01f9f7f00d0fb8e46fe4bd4340c3b&amp;showHeader=true&amp;showReplies=false&amp;theme=dark&amp;transparent=false&amp;widgetsVersion=a3525f077c700%3A1667415560940"
            ></iframe>
          </div>
          <div className="col-md-6">
            <div className="text-center mt-3 mb-4">
              <RiFacebookCircleLine size={"60px"} color={"white"} />
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSomniumSpace&amp;tabs=timeline&amp;width=500&amp;height=600&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
                width="300"
                height="500"
                scrolling="no"
                frameborder="0"
                allow="encrypted-media"
              ></iframe>
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
