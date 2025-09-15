"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import sal from "sal.js";

// import ToolData from "../../data/header.json";
import { useAppContext } from "@/context/Context";

const CallToAction = ({ toolsItem, pageText }) => {
  const { isDarkTheme } = useAppContext();

  useEffect(() => {
    sal();
  }, []);
  return (
    <div className="rainbow-callto-action-area">
      <div className="wrapper">
        <div className="rainbow-callto-action clltoaction-style-default rainbow-section-gap">
          <div className="container">
            <div className="row row--0">
              <div className="col-lg-12">
                <div className="align-items-center content-wrapper">
                  <div className="inner">
                    <div className="content text-center">
                      <span className="theme-gradient b2 mb--30 d-inline-block">
                        {pageText?.aboveTitle}
                      </span>
                      <h2
                        className="title"
                        data-sal="slide-up"
                        data-sal-duration="400"
                        data-sal-delay="200"
                      >
                        {pageText?.title}
                      </h2>
                      <p
                        className="description"
                        data-sal="slide-up"
                        data-sal-duration="400"
                        data-sal-delay="300"
                      >
                        {pageText?.subtitle}
                      </p>
                      <div
                        className="call-to-btn"
                        data-sal="slide-up"
                        data-sal-duration="400"
                        data-sal-delay="350"
                      >
                        <Link
                          className="btn-default bg-light-gradient btn-large"
                          href="/"
                        >
                          <div className="has-bg-light"></div>
                          <span>{pageText?.btnText}</span>
                        </Link>{" "}
                        <br />
                        <span>Coming soon...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fancy-genearate-section">
          <div className="container">
            <div className="genarator-section">
              <ul className="genarator-card-group full-width-list">
                {toolsItem?.slice(0, 5).map((data, index) => (
                  <li key={index}>
                    <Link
                      href={data.isDisable ? "" : data.link}
                      className="genarator-card bg-flashlight-static center-align "
                    >
                      <div className="inner">
                        <div className="left-align">
                          {/* IMAGE */}
                          <div className="img-bar">
                            <Image
                              src={isDarkTheme ? data.imgLight : data.imgDark}
                              width={data.wdt ? data.wdt : 64}
                              height={data.ht ? data.ht : 64}
                              alt="AI Generator"
                            />
                          </div>
                          {/* TITLE */}
                          <h5 className="title">{data.title}</h5>
                          {/* Description */}
                          <span className="rainbow-demo-btn">
                            Try It Now Free
                          </span>
                        </div>
                      </div>
                      {/* Badge */}
                      {data.badge !== "" ? (
                        <span className="rainbow-badge-card">{data.badge}</span>
                      ) : (
                        ""
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
