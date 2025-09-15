import Image from "next/image";

import OpenAI from "../../public/images/brand/logos/OpenAI.png";
import Google from "../../public/images/brand/logos/Google.png";
import HuggingFace from "../../public/images/brand/logos/HuggingFace.png";
import Linux from "../../public/images/brand/logos/Linux.png";
import Ubuntu from "../../public/images/brand/logos/Ubuntu.png";
import Meta from "../../public/images/brand/logos/Meta.png";
import Microsoft from "../../public/images/brand/logos/Microsoft.png";
import Kubernetes from "../../public/images/brand/logos/Kubernetes.png";
import Docker from "../../public/images/brand/logos/Docker.png";

const BrandData = [
  OpenAI,
  Google,
  Microsoft,
  Linux,
  Ubuntu,
  Meta,
  Docker,
  Kubernetes,
  HuggingFace,
];

const Brands = ({ pageText }) => {
  return (
    <div className="rainbow-brand-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center sal-animate"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 className="subtitle ">
                <span className="theme-gradient">{pageText?.aboveTitle}</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt--10">
            <ul className="brand-list brand-style-2">
              {BrandData.map((image, index) => {
                return (
                  <li key={index}>
                    <a href="#">
                      <Image
                        src={image.src}
                        width={148}
                        height={70}
                        alt="Brand Image"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
