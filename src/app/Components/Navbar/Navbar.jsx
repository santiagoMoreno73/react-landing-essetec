// next
import Image from "next/image";
import Link from "next/link";
// components
import NavLink from "./NavLink/NavLink";

const navLinks = [
  { title: "Home", path: "#about" },
  { title: "Services", path: "#projects" },
  { title: "Features", path: "#contact" },
  { title: "Clients", path: "#contact" },
  { title: "Plans", path: "#contact" },
];

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-custom sticky sticky-dark navbar-light navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link href="/" className="logo navbar-brand">
            <Image
              src="/images/logo.png"
              alt="logo image"
              width={70}
              height={60}
              priority
            />
          </Link>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <div className="navbar-collapse">
              <ul className="ms-auto navbar-center navbar-nav">
                {navLinks.map((link, index) => (
                  <li key={index} className="nav-item">
                    <NavLink href={link.path} title={link.title} />
                  </li>
                ))}
              </ul>
              <button className="btn-rounded navbar-btn btn btn-success">
                Try for free
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
