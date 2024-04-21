import { FC, PropsWithChildren } from "react";
// next
import Head from "next/head";
// ui
import { Navbar, Footer, Copyright } from "../ui";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
};
