"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkmodetoggle/darkmodetoggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portofolio",
    url: "/portofolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Fantoca Dev
      </Link>
      <div className={styles.links}>
        <DarkModeToggle></DarkModeToggle>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        <button
          className={styles.logout}
          onClick={() => {
            console.log("Logged on");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
