import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="nav-link">
      {title}
    </Link>
  );
};

export default NavLink;
