import { useRecoilValue } from "recoil";
import Navbar from "../Components/Navbar";
import { getData } from "../Hooks/Login-hook";
import {  UserId } from "../Atoms/State";


export const Serverlist = () => {
  
  const id =getData(); 
  const flag = window.localStorage.getItem("id");

  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center h-12 px-16 py-4 bg-navColor">
        <Navbar />
      </div>
      {id || flag ? (
        <div>
            <ServerCard />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen text-4xl font-bold text-white bg-slate-500 ">
          Loading....
        </div>
      )}
    </div>
  );
};

export const ServerCard =()=>{
    const UserDetails = useRecoilValue(UserId);
    // console.log(UserDetails);
    return (
        <div className="h-screen text-white bg-mainColor">
            {UserDetails}
        </div>
    )
}