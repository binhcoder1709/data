import React from "react";
import Navigator from "../layouts/admin/Navigator/Navigator";
import { Navigate, Outlet } from "react-router-dom";
import HeaderAdmin from "../layouts/admin/Header/HeaderAdmin";

export default function PrivateRouter() {
    const adminLocal = JSON.parse(localStorage.getItem("adminLogin"));
  return (
    <>
      <div className="bg-white flex">
        <div className="w-[15%]">
          <Navigator />
        </div>
        <div className="flex flex-col w-[85%]">
          <HeaderAdmin/>
          <div>
            {adminLocal ? <Outlet/> : <Navigate to="/Login"/>}
          </div>
        </div>
      </div>
    </>
  );
}
