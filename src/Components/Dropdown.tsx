import Bar from "../Resources/images/Bar.png"
import Logout from "../Resources/images/Logout.png"

function Dropdown():JSX.Element {

  return (
    <div className="flex flex-col items-center gap-2 bg-lightbg rounded-md py-2 px-2">
      <div className="flex items-center justify-around gap-3 px-2 py-1 rounded  hover:bg-hoverbg hover:transition">
            <img src={Bar} alt="" className="h-6 w-6 hover:cursor-pointer"/>
        <div className="text-white font-medium hover:cursor-pointer">
            Servers
        </div>
      </div>
      <div className="flex items-center justify-around gap-3 px-2 py-1 rounded hover:bg-hoverbg  hover:transition">
        <img src={Logout} alt="" className="h-6 w-6"/>
        <div className="text-white font-medium hover:cursor-pointer">Logout</div>
      </div>
    </div>
  );
}

export default Dropdown;
