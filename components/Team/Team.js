"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Sal from "sal.js";

import teamData from "../../data/team.json";

const Team = ({ teamData: _td }) => {
  // console.log("teamData", teamData);

  useEffect(() => {
    Sal();
  }, []);

  return (
    <>
      {/* team1: BIG CARDS */}

      {/* add this class for big gap above: rainbow-section-gap-big */}
      <div className="rbt-team-area bg-color-1 ">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">505 Labs team member</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Meet our experienced Team
                </h2>
              </div>
            </div>
          </div>

          <div className="row row--15 mt_dec--30">
            {teamData?.team.slice(3, 9).map((data, index) => (
              <div className="col-lg-4 col-md-6 col-12 mt--30" key={index}>
                <div className="rbt-team team-style-default style-three rbt-hover">
                  <div className="inner">
                    <div className="thumbnail">
                      <Image
                        src={data.img}
                        width={364}
                        height={376}
                        alt="Corporate Template"
                      />
                    </div>
                    <div className="content">
                      <h2 className="title">{data.name}</h2>
                      <h6 className="subtitle">{data.profission}</h6>
                      {/* LOCATION */}
                      <span className="team-form">
                        <i className="feather-map-pin mr--5"></i>
                        <span className="location">{data.location}</span>
                      </span>
                      {/* LINKEDIN */}
                      {data.linkedin && (
                        <span className="team-form">
                          <i className="feather-linkedin mr--5"></i>
                          <a
                            href={`https://www.linkedin.com/in/${data.linkedin}`}
                            target="_blank"
                            className="location"
                          >
                            {`@${data.linkedin}`}
                          </a>
                        </span>
                      )}
                      {/* GITHUB */}
                      {data.github && (
                        <span className="team-form">
                          <i className="feather-github mr--5"></i>
                          <a
                            href={`https://github.com/${data.github}`}
                            target="_blank"
                            className="location"
                          >
                            {`@${data.github}`}
                          </a>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// https://www.linkedin.com/in/andrewkleinonline

// https://www.linkedin.com/in/carynkiel

export default Team;
