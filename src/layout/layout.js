import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <>
      <div className={inter.className}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
