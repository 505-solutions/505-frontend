import Image from "next/image";
import Link from "next/link";

import splitImgDark from "../../public/images/split/split1-dark.png";
import splitImgLight from "../../public/images/split/split1-light.png";
import { useAppContext } from "@/context/Context";

const Split = ({ pageText }) => {
  const { isDarkTheme } = useAppContext();

  return (
    <div className="rainbow-split-area rainbow-section-gap">
      <div className="container">
        <div className="rainbow-splite-style">
          <div className="split-wrapper">
            <div className="row g-0 radius-10 align-items-center">
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="thumbnail">
                  <Image
                    className="radius"
                    src={isDarkTheme ? splitImgDark : splitImgLight}
                    alt="split Images"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="split-inner">
                  <h4
                    className="title"
                    data-sal="slide-up"
                    data-sal-duration="400"
                    data-sal-delay="200"
                  >
                    {pageText?.title}
                  </h4>
                  <p
                    className="description"
                    data-sal="slide-up"
                    data-sal-duration="400"
                    data-sal-delay="300"
                  >
                    {pageText?.desc}
                  </p>
                  <ul
                    className="split-list"
                    data-sal="slide-up"
                    data-sal-duration="400"
                    data-sal-delay="350"
                  >
                    <li>- {pageText?.bullets[0]}</li>
                    <li>- {pageText?.bullets[1]}</li>
                    <li>- {pageText?.bullets[2]}</li>
                  </ul>
                  <div
                    className="view-more-button mt--35"
                    data-sal="slide-up"
                    data-sal-duration="400"
                    data-sal-delay="400"
                  >
                    <Link className="btn-default" href="/">
                      {pageText?.btnText}
                    </Link>
                    <p style={{ paddingLeft: "30px" }}>Coming soon...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Split;
