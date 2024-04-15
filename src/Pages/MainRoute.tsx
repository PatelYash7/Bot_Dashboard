import { Navigate, Outlet, } from "react-router-dom";

export const MainRoute=()=>{
    
    const guild= window.localStorage.getItem('guild_id');
    console.log("Hello World")
    
    return  guild?<Outlet/>:<Navigate to={'/serverlist'}/>
  }