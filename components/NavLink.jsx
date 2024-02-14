"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import style from "./NavLink.module.css";
const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={
          path.startsWith(href) ? `${style.link} ${style.active}` : style.link
        }
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
