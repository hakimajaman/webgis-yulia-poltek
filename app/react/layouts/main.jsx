import React from "react";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar></Sidebar>
      <div className="main-layout_children">{children}</div>
    </div>
  );
};

export default MainLayout;
