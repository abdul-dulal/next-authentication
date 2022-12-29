import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
