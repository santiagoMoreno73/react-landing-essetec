import Link from "next/link";

export const NavLink = ({ href, title }) => {
  const handleClick = (event: any) => {
    // console.log("EVENT", event);
    if (href.startsWith("#")) {
      event.preventDefault();

      const target = document.querySelector(href);
      // console.log("TARGET", target);
      if (target) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <Link href={href} className="nav-link" onClick={handleClick}>
      {title}
    </Link>
  );
};
