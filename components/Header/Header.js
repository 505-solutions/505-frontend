"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAppContext } from "@/context/Context";

import logoDark from "../../public/images/logo/505_labs/logo-dark2.jpg";
import logoLight from "../../public/images/logo/505_labs/logo-light2.jpg";

import ToolsData from "../../data/header.json";

import Nav from "./Nav";
import DarkSwitch from "./dark-switch";

const Header = ({ headerTransparent, headerSticky, btnClass }) => {
  const { activeMobileMenu, setActiveMobileMenu, isDarkTheme, toggleTheme } =
    useAppContext();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <DarkSwitch isLight={isDarkTheme} switchTheme={toggleTheme} />
      <header
        className={`rainbow-header header-default ${headerTransparent} ${headerSticky} ${
          isSticky ? "sticky" : ""
        }`}
      >
        <div className="container-fluid container-xxl position-relative">
          <div className="row align-items-center row--0">
            {/* LOGO */}
            <div className="col-lg-2 col-6">
              <div className="logo">
                <Link href="/">
                  <Image
                    className={isDarkTheme ? "logo-light" : "logo-dark"}
                    src={isDarkTheme ? logoDark : logoLight}
                    width={300}
                    // height={10}
                    alt="505 Labs Logo"
                  />
                </Link>
              </div>
            </div>

            {/* NAV BAR */}
            <div className="col-xl-6 col-lg-7 col-md-6 d-none d-lg-block position-static">
              <div className="header-right">
                <nav className="mainmenu-nav d-none d-lg-block">
                  <Nav />
                </nav>
              </div>
            </div>

           
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
