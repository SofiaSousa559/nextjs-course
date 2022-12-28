import React from "react";
import Logo from "./logo";
import Link from "next/link";
import classes from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <Link href="/posts" className={classes.a}>
            Posts
          </Link>
          <Link href="/contact" className={classes.a}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
