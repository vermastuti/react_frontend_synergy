import React from "react";
import Sidebar from "../components/Sidebar";
import ".styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <main className="layout-main">{children}</main>
    </div>
  );
};

export default Layout;
