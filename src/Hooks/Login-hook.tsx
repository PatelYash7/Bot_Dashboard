import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Auth } from "../Atoms/State";
import { useNavigate } from "react-router-dom";

export const  getUser = ({callBack}:callBack) => {
  const [userData, setUserData] = useState<userData>();
  const [loading,setLoading] = useState(false);
  const [Authorization,SetAuthorization]= useRecoilState(Auth);
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get(`http://34.233.124.135/callback/?code=${callBack}`).then((res)=>{
        setUserData(res.data);
        setLoading(true);
        SetAuthorization(true)
        navigate('/')
    })
  },[]) 
  return {
    userData,
    loading
  } 

};

export type callBack = {
    callBack:string | null
}
export interface userData {
  user: User;
  guilds: Guild[];
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: any;
  accent_color: any;
  global_name: string;
  avatar_decoration_data: any;
  banner_color: any;
  mfa_enabled: boolean;
  locale: string;
  premium_type: number;
}

export interface Guild {
  id: string;
  name: string;
  icon?: string;
  owner: boolean;
  permissions: number;
  permissions_new: string;
  features: any[];
}
