import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Dropdown from "../Components/Dropdown";
import { useRecoilValue } from "recoil";
import { toggleState } from "../Atoms/State";

function Home(): JSX.Element {
  const isOpen = useRecoilValue(toggleState);
  console.log(isOpen)
  return (
    <div className="flex flex-col relative max-h-screen ">
      {/* Navbar */}
      <div className="h-14 bg-navColor flex items-center px-8 py-4 sticky top-0"> 
        <Navbar/>
      </div>
      {isOpen?
          <div className="w-[8%] h-[10%] absolute right-8 top-14 z-1 transition">
            <Dropdown/>
          </div>:
        <div></div>}
      {/* Main Content */}
      <div className=" flex justify-between ">
        {/* Sidebar Content */}
        <div className="h-screen bg-sideColor w-[20%] font-main font-medium text-2xl pl-8">
          Hello Home
        </div>
        {/* Display Components */}
        <div className="bg-red-800 h-screen w-[80%] pr-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
} 

export default Home;
