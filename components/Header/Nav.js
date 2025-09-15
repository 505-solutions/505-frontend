"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import DashboardItem from "../../data/header.json";

import menuImg from "../../public/images/menu-img/menu-img-2.png";
import { useAppContext } from "@/context/Context";
import GridMenu from "./GridMenu";

const Nav = () => {
  const pathname = usePathname();
  const { showItem, setShowItem } = useAppContext();
  const [showPage, setShowPage] = useState(true);

  const isActive = (href) => pathname.startsWith(href);

  return (
    <ul
      className="mainmenu"
      style={{
        marginRight: "1rem",
      }}
    >
      <li>
        <Link href="/">Home</Link>
      </li>

      {/*  nav1: DASHBOARD LINKS */}

      {/*  nav2: PAGES LINKS */}

      {/* <li>
        <Link href="/roadmap">Roadmap</Link>
      </li> */}

      <li>
        <Link href="/team">About Us</Link>
      </li>

      {/* <li>
        <Link href="/profile-details">Dashboard</Link>
      </li> */}

      <li>
        {/* <Link
          href="https://drive.google.com/file/d/1Q_g4L-C6He2FC49bgbNx7iE3cTQ8LsQX/view"
          target="_blank"
        >
          Litepaper
        </Link> */}

        <GridMenu />
      </li>
    </ul>
  );
};

export default Nav;
