import React from "react";
import style from "./Navbar.module.css";
import logo from "@/assets/logo.png";
import Link from "next/link";
import NavLink from "@/components/NavLink";
const Navbar = () => {
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
            <NavLink href="/meals">Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Community</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
