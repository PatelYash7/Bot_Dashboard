import { setLogout } from "../Hooks/Login-hook";
import Bar from "../Resources/images/Bar.png"
import Logout from "../Resources/images/Logout.png"

function Dropdown():JSX.Element {

  return (
    <div className="flex flex-col items-center gap-2 px-2 py-2 rounded-md bg-lightbg">
      <div className="flex items-center justify-around gap-3 px-2 py-1 rounded hover:bg-hoverbg hover:transition">
            <img src={Bar} alt="" className="w-6 h-6 hover:cursor-pointer"/>
        <div className="font-medium text-white hover:cursor-pointer">
            Servers
        </div>
      </div>
      <div onClick={()=>{setLogout()}} className="flex items-center justify-around gap-3 px-2 py-1 rounded hover:bg-hoverbg hover:transition">
        <img src={Logout} alt="" className="w-6 h-6"/>
        <div className="font-medium text-white hover:cursor-pointer">Logout</div>
      </div>
    </div>
  );
}

export default Dropdown;
