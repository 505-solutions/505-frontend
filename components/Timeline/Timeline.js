"use client";

import React, { useEffect } from "react";
import sal from "sal.js";

import "venobox/dist/venobox.min.css";

// import TimnelineData from "../../data/home.json";
import Link from "next/link";

const Timeline = ({ timelineData, pageText }) => {
  useEffect(() => {
    sal();

    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "50%" : "100%",
      });
    });
  }, []);
  return (
    <div className="rainbow-timeline-area rainbow-section-gap">
      <div className="container">
        {/* HEADER */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 className="subtitle ">
                <span className="theme-gradient">{pageText?.aboveTitle}</span>
              </h4>
              <h2 className="title w-600 mb--20">{pageText?.title}</h2>
            </div>
          </div>
        </div>

        {/* LINE ITEMS */}
        <div className="row">
          <div className="col-lg-12  mt--30 mb--50">
            <div className="timeline-style-two bg-flashlight bg-color-blackest">
              <div className="row row--0">
                {timelineData?.slice(0, 4).map((data, index) => (
                  <div
                    className="col-lg-3 col-md-3 rainbow-timeline-single dark-line"
                    key={index}
                  >
                    <div className="rainbow-timeline">
                      {/* Title */}
                      <h6
                        className="title"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="200"
                      >
                        {data.title}
                      </h6>
                      {/* Dot and line */}
                      <div className="progress-line">
                        <div className="line-inner"></div>
                      </div>
                      <div className="progress-dot">
                        <div className="dot-level">
                          <div className="dot-inner"></div>
                        </div>
                      </div>
                      {/* Description */}
                      <p
                        className="description"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="300"
                      >
                        {data.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
