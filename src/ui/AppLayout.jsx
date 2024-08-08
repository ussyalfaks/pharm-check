import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-4 bg-background">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
