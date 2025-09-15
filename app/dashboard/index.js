"use client";

import React from "react";
import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";
import Dashboard from "@/components/Dashboard/Dashboard";
import Modal from "@/components/Common/Modal";
import Header from "@/components/Header/Header";

const DashboardPage = () => {
  return (
    <main className="page-wrapper rbt-dashboard-page">
      <Context>
        <div className="rbt-panel-wrapper">
          {/* <HeaderDashboard display="d-none" /> */}

          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />
          {/* <LeftpanelDashboard /> */}

          <Modal />

          <Dashboard />
        </div>
      </Context>
    </main>
  );
};

export default DashboardPage;
