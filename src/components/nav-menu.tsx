"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "@/styles/nav-menu.module.scss";

const NavMenu = () => {
  let cx = classNames.bind(styles);

  return (
    <div className="">
      <ul className={cx(styles.menu_container, "relative")}>
        <li className={cx(styles.menu_item, "text-sm text-center")}>
          Projects
        </li>
        <li
          className={cx(
            styles.menu_item,
            "text-sm text-center absolute top-0 -z-10 left-[36px]",
          )}
        >
          Blog
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
