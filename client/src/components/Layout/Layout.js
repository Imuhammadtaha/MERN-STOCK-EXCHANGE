import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ height: "100%" }}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommmerece App - Shop Now",
  description: "MERN stack Project",
  keywords: "MERN,mern,React,node,mongodB",
  author: "muhammad taha",
};

export default Layout;
