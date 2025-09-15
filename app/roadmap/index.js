"use client";

import Context from "@/context/Context";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Roadmap from "@/components/Roadmap/Roadmap";
import BackToTop from "../backToTop";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";

const RoadmapPage = () => {
  return (
    <main className="page-wrapper">
      <Context>
        {/* <HeaderTop /> */}
        <Header
          headerTransparent="header-transparent"
          headerSticky="header-sticky"
          btnClass="rainbow-gradient-btn"
        />
        <PopupMobileMenu />
        <Breadcrumb title="Roadmap" text="Roadmap" />

        <Roadmap />

        <BackToTop />
        <Footer />
        <Copyright />
      </Context>
    </main>
  );
};

export default RoadmapPage;
