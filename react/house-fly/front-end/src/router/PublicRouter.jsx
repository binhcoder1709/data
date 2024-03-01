import React from "react";
import Header from "../layouts/client/Header";
import { Outlet } from "react-router-dom";
import SlideBar from "../components/SlideBar";

export default function PublicRouter() {
  return (
    <>
      <div>
        <Header />
        <div className="flex p-3 pl-[200px] pr-[200px]">
          <Outlet/>
        </div>
      </div>
    </>
  );
}
