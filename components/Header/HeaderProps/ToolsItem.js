import Image from "next/image";
import Link from "next/link";
import React from "react";

const ToolsItem = ({ ToolsData, start, end }) => {
  return (
    <ul className="genarator-card-group full-width-list">
      {ToolsData?.socialMedia.slice(start, end).map((data, index) => (
        <li
          className="p-2"
          // style={{
          //   padding: "5px !important",
          // }}
          key={index}
        >
          <Link
            href={data.link}
            target="_blank"
            className={`genarator-card bg-flashlight-static center-align ${
              data.isDisable ? "disabled" : ""
            }`}
          >
            <div className="inner bottom-flashlight">
              <div className="left-align">
                <div className="img-bar">
                  <Image
                    src={data.img}
                    width={data.wdt ? data.wdt : 64}
                    height={64}
                    alt={data.name}
                  />
                </div>
                <h5 className="title">{data.name}</h5>
              </div>
            </div>
            {data.badge !== "" ? (
              <span className="rainbow-badge-card">{data.badge}</span>
            ) : (
              ""
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ToolsItem;
