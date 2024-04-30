"use client";
// next
import Image from "next/image";
import Link from "next/link";
// components
import { NavLink } from "./NavLink";
// hooks
import { useState, useEffect } from "react";
// icons
import { IoMdClose } from "react-icons/io";
import { FaGripLines } from "react-icons/fa";

const navLinks = [
  { title: "Inicio", path: "/" },
  { title: "Servicios", path: "#services" },
  { title: "Carácteristicas", path: "#features" },
  { title: "Clientes", path: "#clients" },
  { title: "Acerca de nosotros", path: "/about" },
];

export const Navbar = () => {
  // change color when scrolling
  const [color, setColor] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const changeColor = () => {
    window.scrollY >= 90 ? setColor(true) : setColor(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 960) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <nav
        className={
          color
            ? "navbar navbar-custom sticky sticky-dark navbar-light nav-sticky navbar navbar-expand-lg fixed-top"
            : "navbar navbar-custom sticky sticky-dark navbar-light navbar navbar-expand-lg fixed-top"
        }
      >
        <div className="container">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.png"
              alt="logo image"
              width={70}
              height={60}
              priority
            />
          </Link>

          {!navOpen ? (
            <button onClick={() => setNavOpen(true)} className="navbar-toggler">
              <IoMdClose />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(false)}
              className="navbar-toggler"
            >
              <FaGripLines />
            </button>
          )}

          <div
            id="navbarCollapse"
            className={
              navOpen
                ? "collapse show navbar-collapse"
                : "collapse navbar-collapse"
            }
          >
            <ul className="ms-auto navbar-center navbar-nav">
              {navLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
            {/* <button className="btn btn-rounded navbar-btn">Try for free</button> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
