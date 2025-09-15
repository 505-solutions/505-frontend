"use client";

import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Home from "@/components/Home/Home";
import Context from "@/context/Context";
import Separator from "../separator";
import Timeline from "@/components/Timeline/Timeline";
import Split from "@/components/Split/Split";
import Accordion from "@/components/Accordion/Accordion";
import Brands from "@/components/Brands/Brands";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import DeveloperService from "@/components/Service/DevelopersService";
import ProviderService from "@/components/Service/ProvidersService";
import Split2 from "@/components/Split/Split2";

const HomePage = ({ homeData }) => {
  return (
    <main>
      <div className="page-wrapper">
        <Context>
          {/* <HeaderTop /> */}
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />

          {/* <VantaBackground /> */}

          <Home pageText={homeData?.pageText?.heroSection} />

          <DeveloperService
            developerServiceData={homeData?.developerService}
            pageText={homeData?.pageText?.devService}
          />
          <Separator top={true} />

          <ProviderService
            providerServiceData={homeData?.providerService}
            pageText={homeData?.pageText?.provService}
          />
          <Separator top={true} />

          <Timeline
            timelineData={homeData?.timeline}
            pageText={homeData?.pageText?.timeline}
          />
          <Separator top={false} />

          {/* <Split pageText={homeData?.pageText?.split1} />

          <Split2 pageText={homeData?.pageText?.split2} />

          <Separator top={true} /> */}
          {/* <Pricing />
          <Separator top={true} /> */}

          <Accordion
            isHead={true}
            accordionData={homeData?.accordion}
            pageText={homeData?.pageText?.faq}
          />

          <Separator top={false} />

          {/* <Brands pageText={homeData?.pageText?.brands} />
          <Separator top={false} /> */}

          <CallToAction
            toolsItem={homeData?.toolsItem}
            pageText={homeData?.pageText?.features}
          />

          <Footer />
          <Copyright />
        </Context>
      </div>
    </main>
  );
};

export default HomePage;
