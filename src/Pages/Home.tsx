import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Home(): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="bg-blue-300 h-16 w-full">
        <Navbar/>
      </div>
      <div className=" flex justify-between ">
        <div className="h-screen bg-green-300 w-[30%] font-main font-medium text-2xl">Hello Home</div>
        <div className="bg-red-300 h-screen w-[70%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
