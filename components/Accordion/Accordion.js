"use client";

import React, { useEffect } from "react";
import sal from "sal.js";
import AccordionItem from "./AccordionItem";

const Accordion = ({ isHead, accordionData, pageText }) => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <div className="rainbow-accordion-area rainbow-section-gap">
      <div className="container">
        {/* HEAD */}
        {isHead ? (
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">{pageText?.aboveTitle}</span>
                </h4>
                <h2 className="title w-600 mb--20">{pageText?.title}</h2>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* THE ACCORDION */}
        <div className="row mt--35 row--20">
          <div className="col-lg-10 offset-lg-1">
            <AccordionItem accordionData={accordionData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
