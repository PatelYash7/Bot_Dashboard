import Bar from "../Resources/images/Bar.png"
import Logout from "../Resources/images/Logout.png"

function Dropdown():JSX.Element {

  return (
    <div className="flex flex-col items-center  bg-dropdownbg rounded py-1 px-2">
      <div className="flex items-center justify-around gap-3 ">
            <img src={Bar} alt="" className="h-7 w-7"/>
        <div className="text-white font-medium">
            Servers
        </div>
      </div>
      <div className="flex items-center justify-around gap-3  ">
        <img src={Logout} alt="" className="h-7 w-7"/>
        <div className="text-white font-medium">Logout</div>
      </div>
    </div>
  );
}

export default Dropdown;
