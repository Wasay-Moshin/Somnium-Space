import React from "react";
function Calender() {
  return (
    <div className="calender">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h4>SOMNIUM EVENTS CALENDAR</h4>
            <h1>SOMNIUM EVENTS CALENDAR</h1>
            <h6>
              Have Fun and Share with your Friends our Weekly and Special Events
            </h6>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 mt-4">
            <div className="text-center">
              <h4>Featured Events</h4>
            </div>
            <hr style={{ color: "white" }} />
          </div>
          <div className="col-md-6 mt-4">
            <div className="text-center">
              <h4>Events calendar</h4>
            </div>
            <hr style={{ color: "white" }} />
            <div className="cal">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=somnium.space.events%40gmail.com"
                width="550"
                height="300"
                scrolling="no"
              ></iframe>
              <div className="row text-center mt-3">
                <div className="col-md-6">
                <button className="btn btn-secondary"> Add events</button>
                </div>
                <div className="col-md-6">
                <button className="btn btn-primary">Export Google Calendar</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
