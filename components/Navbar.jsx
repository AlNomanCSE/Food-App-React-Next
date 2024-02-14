"use client";

import React from "react";
import style from "./Navbar.module.css";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const path = usePathname();
  return (
    <div className={style.navbar}>
      <div className={style.navbarLogo}>
        <Link href="/">
          <div style={{ position: "relative" }} className="logo">
            <img src={logo.src} alt="" style={{ height: "5rem" }} />
          </div>
        </Link>
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            letterSpacing: "-2px",
            color: " rgb(224,202,22)",
          }}
        >
          AnotherLevel Food
        </div>
      </div>
      <div>
        <ul className={style.navbarMenu}>
          <li>
            <Link
              href="/meals"
              className={path.startsWith("/meals") ? style.active : undefined}
            >
              Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className={
                path.startsWith("/community") ? style.active : undefined
              }
            >
              Community
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
