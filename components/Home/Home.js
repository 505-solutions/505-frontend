"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import "venobox/dist/venobox.min.css";

import bannerImg from "../../public/images/banner/banner3.png";
import separator from "../../public/images/separator/separator-top.svg";
import separatorLight from "../../public/images/light/separator/separator-top.svg";
import { useAppContext } from "@/context/Context";
import VantaBackground from "../Background/Background";


const Home = ({ pageText }) => {
  const { isDarkTheme } = useAppContext();
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "50%" : "100%",
      });
    });
  }, []);
  return (
    <div
      className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1"
      data-black-overlay="1"
    >
      <VantaBackground>
        <div className="container">
          {/* HERO SECTION */}
          <div className="row justify-content-center">
            {/* HERO TEXT ALL */}
            <div className="col-lg-12 py-5">
              <div className="inner text-center mt--60">
                <h1 className="title display-one">
                  {pageText?.main[0]} <br />
                  <span className="theme-gradient">
                    {pageText?.main[1]}
                  </span>{" "}
                  <br />
                  <span className="color-off"> {pageText?.main[2]} </span>
                  {/* <span className="theme-gradient">ChatenAI AI</span> With <br />
                <span className="color-off">Smartest AI</span> */}
                </h1>
                <p className="b1 desc-text">{pageText?.subtitle}</p>
                <div className="button-group">
                  <Link
                    className="btn-default bg-light-gradient btn-large"
                    href="/"
                    // href="/get-started"
                  >
                    <div className="has-bg-light"></div>
                    <span>{pageText?.btnText}</span>
                  </Link>
                </div>
                {/* <p className="color-gray mt--5">Coming Soon...</p> */}
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="col-lg-10 col-xl-10 order-1 order-lg-2">
              <div className="frame-image frame-image-bottom bg-flashlight video-popup icon-center">
                <Image src={bannerImg} alt="Banner Images" />
                <div className="video-icon">
                  <Link
                    className="btn-default rounded-player popup-video border bg-white-dropshadow"
                    // href="https://youtu.be/ThRYF96HIzA?si=Yz-Yc5HSf8uLPv-G"
                    href="https://www.youtube.com/watch?v=p-5UPME_NlM&t=6s"
                    data-vbtype="video"
                    target="_blank"
                  >
                    <span>
                      <i className="feather-play"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SEPERATOR IMAGE */}
        <div className="chatenai-separator has-position-bottom">
          <Image
            className={`w-100 ${
              isDarkTheme ? "separator-dark" : "separator-light"
            }`}
            src={isDarkTheme ? separator : separatorLight}
            alt="separator"
          />
        </div>
      </VantaBackground>
    </div>
  );
};

export default Home;
