import { Navigate, Outlet, } from "react-router-dom";

export const MainRoute=()=>{
    
    const guild= window.localStorage.getItem('guild_id');
    
    return  guild?<Outlet/>:<Navigate to={'/serverlist'}/>
  }