import { useState } from "react"
import Heading from "../Components/Heading"

function JoinRoles(): JSX.Element {
  const roles:string[]=["User","Mod"]
  const [options, setOptions] = useState(roles);
  const [inputVal, setInputVal] = useState("");

  const addOptions = () => {
    if (inputVal.trim() !== "") {
      setOptions([...options, inputVal]);
      setInputVal("");
    }
  };
  return (
    <div className="mt-10 ml-8">
      <Heading head="Join Roles" />
      <div className="flex items-center justify-start my-5 ">
        <div className=" bg-cardBox rounded-lg  w-[45%]  p-4">
          <div className="text-xl font-semibold text-white">Join Roles</div>
          <div className="pl-2 my-2 text-base text-white border-l-4">
            All roles listed below will be assigned to every user who joins the
            server.
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex flex-col my-2">
              <input type="text" className="px-2 py-1 text-white rounded-lg outline-none bg-navColor" placeholder="Enter Role" value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} />
            </div>
            <div>
              <button className="px-5 py-1 mr-4 font-medium text-center text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-500" onClick={addOptions}>Add</button>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="dropdown" className="text-base font-medium text-white"> Select Role</label>
            <select id="dropdown" className="px-2 py-1 text-white rounded-lg outline-none bg-navColor">
              {options.map((option,key)=>{
                return <option key={key} value={option}>{option}</option>
              })}
            </select>
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="dropdown" className="text-base font-medium text-white"> Select Channel</label>
            <select id="dropdown" className="px-2 py-1 text-white rounded-lg outline-none bg-navColor">
              {options.map((option,key)=>{
                return <option key={key} value={option}>{option}</option>
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinRoles