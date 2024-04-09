import axios from "axios";
import { useEffect, useRef } from "react";

import { useRecoilState } from "recoil";
import { UserData, loading } from "../Atoms/State";

export const useUserData = ()=>{
    const id = window.localStorage.getItem("id");
   const[user,setUser] = useRecoilState(UserData);
   const[loader,setLoader] = useRecoilState(loading);
    const effectRan = useRef(false);
    useEffect(()=>{
        if(effectRan.current===false){
            const fetchData = async ()=>{
                const Response = await axios.get(`http://34.233.124.135/available_users?user_id=${id}`)
                if(Response.data){
                    setUser(Response.data);
                    setLoader(false);
                }
            }
            fetchData();
        }
        return ()=>{
            effectRan.current=true;
        }
    })
    return {
        user,
        loader
    }
}