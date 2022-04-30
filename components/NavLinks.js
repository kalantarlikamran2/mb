import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavLinks = () => {
  // const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = (e) => {
    // setDropdownStatus(!dropdownStatus);
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className="main-nav__navigation-box">
      <li className="dropdown">
      <ScrollLink
          activeClass="current"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Əsas səhifə
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Üstünlüklərimiz
        </ScrollLink>
      </li>

      <li>
        <ScrollLink
          activeClass="current"
          to="app"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Xidmətlər
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Ödəniş
        </ScrollLink>
      </li>
    </ul>
  );
};

export default NavLinks;
