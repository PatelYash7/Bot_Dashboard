import { useEffect, useRef } from "react";
import { Navigate, Outlet, } from "react-router-dom";
import { useGetChannels } from "../Hooks/Channel-hook";
import { useSetRecoilState } from "recoil";
import { ChannelArray } from "../Atoms/State";
import { ChannelListArray } from "../Interface";

export const MainRoute=()=>{
    
    const guild= window.localStorage.getItem('guild_id');
    const setChannels= useSetRecoilState<ChannelListArray[]>(ChannelArray)
    const EffectRan = useRef(false);

    useEffect(()=>{
      if(!EffectRan.current){
        const fetchData = async ()=>{
          const ChannelArray = await useGetChannels();
          console.log("first")
          setChannels(ChannelArray);

          console.log("Second")
        }
        fetchData()
        EffectRan.current=true;
      } 
    },[])
    
    return  guild?<Outlet/>:<Navigate to={'/serverlist'}/>
  }