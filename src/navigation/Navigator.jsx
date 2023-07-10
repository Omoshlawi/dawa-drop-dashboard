import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../screens/dashboard/DashBoard";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import HTTP404 from "../screens/core/HTTP404";

const Navigator = () => {
  return (
    <Routes>
      <Route index element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<HTTP404 />} />
    </Routes>
  );
};

export default Navigator;