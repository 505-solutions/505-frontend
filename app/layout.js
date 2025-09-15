"use client";

import React, { useEffect } from "react";

import "bootstrap/scss/bootstrap.scss";

// ========= Plugins CSS START =========
import "../public/css/plugins/feature.css";
import "../public/css/plugins/fontawesome-all.min.css";
import "../public/css/plugins/animation.css";
import "../node_modules/sal.js/dist/sal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-tooltip/dist/react-tooltip.css";
// ========= Plugins CSS END =========

import "../public/scss/style.scss";
import "../public/css/overrides.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
        <body className="" suppressHydrationWarning={true}>
          {children}

          {/* <script src="https://gist.github.com/Snojj25/c71c8123bc2564878ba3ca437a4eb6f7.js"></script> */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/p5.min.js" />
          <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js" />
        </body>
    </html>
  );
}
