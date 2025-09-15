import Image from "next/image";
import Link from "next/link";

import splitImgDark from "../../public/images/split/split2-dark.png";
import splitImgLight from "../../public/images/split/split2-light.png";

import { useAppContext } from "@/context/Context";

const Split2 = ({ pageText }) => {
  const { isDarkTheme } = useAppContext();

  return (
    <div className="rainbow-split-area rainbow-section-gap">
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
              <h2 className="title w-600 mb--20">{pageText?.title}</h2>
              <p className="description b1">{pageText?.desc}</p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="row row--15 service-wrapper">
          <div className="thumbnail">
            <Image
              className="radius"
              src={isDarkTheme ? splitImgDark : splitImgLight}
              alt="split Images"
            />
          </div>
        </div>

        {/* BUTTON */}
        {/* <div className="row row--15 service-wrapper"> */}

        <div className="row">
          <div className="col-lg-12">
            <div
              className="view-more-button mt--35 text-center"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="400"
            >
              <Link className="btn-default" href="/">
                {pageText?.btnText}
              </Link>{" "}
              <br />
              <span style={{ paddingLeft: "15px" }}>Coming soon...</span>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Split2;
