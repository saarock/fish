import React from "react";
import { Footer, Header } from "./components";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{<Outlet />}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
