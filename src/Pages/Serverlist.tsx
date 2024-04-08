import { useRecoilValue, useSetRecoilState } from "recoil";
import Navbar from "../Components/Navbar";
import { getData } from "../Hooks/Login-hook";
import {  UserId } from "../Atoms/State";
import { useEffect } from "react";


export const Serverlist = () => {
    const setId = useSetRecoilState(UserId);
  const {Data,loading} = getData();
  useEffect(()=>{
      if (Data) {
        setId(Data.user.id);
      }
  },[Data])

  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center h-12 px-16 py-4 bg-navColor">
        <Navbar />
      </div>
      {!loading && Data ? (
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
    console.log(UserDetails);
    return (
        <div className="h-screen text-white bg-mainColor">
            {UserDetails}
        </div>
    )
}