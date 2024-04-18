import { Switch } from "@mui/material";
import Heading from "../Components/Heading";
import { Button } from "../Components/Button";
import { useState } from "react";
import { useChangeStatusMessage } from "../Hooks/Status-hook";

function Settings_general(): JSX.Element {
  const [value,setValue] = useState(false);
  const handleChangeWelcomeMessage = async ()=>{
    await setValue(!value);
    const Response = await useChangeStatusMessage({bool:!value})
    console.log(Response)
  }

  return (
    <div className="flex flex-col mt-10 mb-5 ml-8">
      <Heading head={"Server Status"} />
      <div className="grid grid-cols-3 gap-4 mt-8">
        <CardBox heading="Welcome Message" value={value} handleChange={handleChangeWelcomeMessage} route="welcome-message"/>
        <CardBox heading="Welcome Message" value={value} handleChange={handleChangeWelcomeMessage} route="welcome-message"/>
        {/* <CardBox/>
        <CardBox/> */}
      </div>
      
    </div>
  );
}

const CardBox = ({heading,route,handleChange,value}:{heading:string,route:string,handleChange:()=>void,value:boolean})=>{
  return <div className="p-4 rounded-lg bg-cardBox">
    <div className="py-2 text-2xl font-bold text-white">{heading}</div>
    <div className="">
      <div className="py-1 text-xl text-cyan-400 ">Set Status of {heading} </div>
      <div className="flex items-center justify-between py-4 text-white">
        <Switch value={value}  onChange={handleChange}/> 
        <Button text="Visit to Page" route={`/${route}`}/>
      </div>
    </div>
  </div>
}

export default Settings_general;
