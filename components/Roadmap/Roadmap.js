"use client";

import React, { useEffect } from "react";
import Sal from "sal.js";

import RoadmapData from "../../data/roadmap.json";

const Roadmap = () => {
  useEffect(() => {
    Sal();
  }, []);
  return (
    <div className="roadmap-section rainbow-section-gap-big rainbow-section-gapBottom">
      <div className="container">
        {RoadmapData?.roadmap.map((data, index) => (
          <div className="row changelog_info" id="v120" key={index}>
            {/* LEFT- TITLE */}
            <div className="col-lg-3 changelog_date">
              <div className="c_date">
                <h4
                  style={{
                    color: "var(--color-secondary)",
                  }}
                >
                  {data.time}{" "}
                </h4>
                <h6
                  style={{
                    color: "var(--color-secondary)",
                  }}
                  className="fst-italic"
                >
                  {" "}
                  {data.heading}
                </h6>
              </div>
            </div>

            {/* MIDDLE- LINE ANIMATION */}
            <div className="col-lg-2">
              <div className="version_info">
                {data.isCheck ? (
                  <div className="c_version">
                    <i className="fa-duotone fa-check"></i>
                  </div>
                ) : data.isLoading ? (
                  <div className="c_version bg-yellow">
                    <i className="fa-duotone fa-loader"></i>
                  </div>
                ) : (
                  <div className="c_version bg-info">
                    <i className="fa-regular fa-message-lines"></i>
                  </div>
                )}

                {data.isBorader ? <div className="line bottom_half"></div> : ""}
              </div>
            </div>

            {/* RIGHT- ITEM DESCRIPTION */}
            <div className="col-lg-3">
              <div className="changelog_content">
                <ul className="content-list">
                  {data?.list?.map((item, i) => (
                    <li key={i.toString()}>
                      <strong>
                        <em>{item.title}:</em>
                      </strong>{" "}
                      {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
