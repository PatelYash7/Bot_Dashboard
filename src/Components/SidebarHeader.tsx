import { Link } from "react-router-dom";
import Home from "../Resources/images/Homepg.png";
import Reload from "../Resources/images/Reload.png";

function SidebarHeader(): JSX.Element {
  return (
    <div className="flex justify-center gap-2 text-white items-center    m-2 ">
      <Link to={'/home'}>
        <div className="flex justify-center items-center gap-2 bg-sidebarHead rounded-2xl w-full px-3 py-1 cursor-pointer hover:transition transition hover:bg-hoverbg">
          <img src={Home} alt="svg" className="h-4 w-4" />
          <div className="text-sm">Home</div>
        </div>
      </Link>
      <div className="bg-lightbg w-[30%] py-1 px-2 flex justify-center rounded-xl hover:transition transition hover:bg-hoverbg">
        <img src={Reload} className="h-4 w-4 " alt="" />
      </div>
    </div>
  );
}

export default SidebarHeader;
