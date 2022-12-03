import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Fragment>
  );
};

export default Layout;
