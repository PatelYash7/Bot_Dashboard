import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SidebarHeader from "../Components/SidebarHeader";
import Sidebar from "../Components/Sidebar";

function Home(): JSX.Element {
  return (
    <div className="flex flex-col relative max-h-screen ">
      {/* Navbar */}
      <div className="h-12   bg-navColor flex items-center px-14 py-4 sticky top-0">
        <Navbar />
      </div>
      {/* Main Content */}
      <div className=" flex justify-between ">
        {/* Sidebar Content */}
        <div className="h-screen bg-sideColor w-[20%] font-main pl-14">
          <div className="flex justify-center items-center">
            <SidebarHeader />
          </div>
          <Sidebar/>
        </div>
        {/* Display Components */}
        <div className=" bg-mainColor h-screen w-[80%] pr-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
