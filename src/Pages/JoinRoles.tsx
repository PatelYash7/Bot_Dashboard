import { useState } from "react"
import Heading from "../Components/Heading"

function JoinRoles(): JSX.Element {
  const roles:string[]=["User","Mod"]
  const [options, setOptions] = useState(roles);
  const [inputVal, setInputVal] = useState("");

  // const addOptions = () => {
  //   if (inputVal.trim() !== "") {
  //     setOptions([...options, inputVal]);
  //     setInputVal("");
  //   }
  // };
  return (
    <div className="mt-10 ml-8">
      <Heading head="Join Roles" />
      <div className="flex items-center justify-start my-5 ">
        <div className=" bg-cardBox rounded-lg  w-[45%]  p-4">
          <div className="text-white font-semibold text-xl">Join Roles</div>
          <div className="text-white text-base my-2 border-l-4 pl-2">
            All roles listed below will be assigned to every user who joins the
            server.
          </div>
          {/* <div className="flex justify-between items-center  ">
            <div className="flex-col flex my-2">
              <input type="text" className="rounded-lg px-2 py-1 bg-navColor outline-none text-white" placeholder="Enter Role" value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} />
            </div>
            <div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-1 mr-4 rounded-md font-medium text-white text-center" onClick={addOptions}>Add</button>
            </div>
          </div> */}
          <div className="flex flex-col mt-3">
            <label htmlFor="dropdown" className="text-white text-base font-medium"> Select Role</label>
            <select id="dropdown" className="rounded-lg px-2 py-1 bg-navColor outline-none text-white">
              {options.map((option,key)=>{
                return <option key={key} value={option}>{option}</option>
              })}
            </select>
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="dropdown" className="text-white text-base font-medium"> Select Channel</label>
            <select id="dropdown" className="rounded-lg px-2 py-1 bg-navColor outline-none text-white">
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