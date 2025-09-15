"use client";

import Context from "@/context/Context";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";

const ProfileDetailsPage = () => {
  return (
    <main className="page-wrapper rbt-dashboard-page">
      <Context>
        {/* <div className="rbt-panel-wrapper"> */}
        {/* <HeaderDashboard display="d-none" />*/}

        <Header
          headerTransparent="header-not-transparent"
          headerSticky="header-sticky"
          btnClass="btn-small round"
        ></Header>

        <PopupMobileMenu />
        {/* <LeftpanelDashboard /> */}

        {/* </div> */}
        <Footer />
        <Copyright />
      </Context>
    </main>
  );
};

export default ProfileDetailsPage;
