import React from "react";
import SideBar from "../../components/dashboard/sidebar/SideBar";
import Content from "../../components/dashboard/content/Content";
import NavBar from "../../components/dashboard/topnav/NavBar";

const DashBoard = () => {
  return (
    <div className="contaner">
      <div className="row border">
        <NavBar />
      </div>
      <div className="row">
        <div className="col-lg-2 border ">
          <SideBar />
        </div>
        <div className="col-lg-10 border">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
