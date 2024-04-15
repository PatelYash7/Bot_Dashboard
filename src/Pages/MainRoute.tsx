import { useEffect, useRef } from "react";
import { Navigate, Outlet, } from "react-router-dom";
import { useGetChannels } from "../Hooks/Channel-hook";
import { useRecoilState } from "recoil";
import { ChannelArray } from "../Atoms/State";
import { ChannelListArray } from "../Interface";

export const MainRoute=()=>{
    
    const guild= window.localStorage.getItem('guild_id');
    const EffectRan = useRef(true);
    const [channels,setChannels]= useRecoilState<ChannelListArray[]>(ChannelArray)

    useEffect(()=>{
      if(EffectRan.current===true){
        const fetchData = async ()=>{
          const ChannelArray = await useGetChannels();
          console.log(ChannelArray)
          setChannels(ChannelArray);
          console.log(channels)
        }
        fetchData()
      } 
      return ()=>{
        EffectRan.current===false
      }
    },[])
    
    return  guild?<Outlet/>:<Navigate to={'/serverlist'}/>
  }