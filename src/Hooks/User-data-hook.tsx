import axios from "axios";
import { useEffect, useRef } from "react";

import {useRecoilValue, useSetRecoilState } from "recoil";
import { UserData, loading } from "../Atoms/State";

export const useUserData = () => {
  const id = window.localStorage.getItem("id");
  const setUser = useSetRecoilState(UserData);
  const  setLoader = useSetRecoilState(loading);
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      const fetchData = async () => {
        const Response = await axios.get(
          `http://34.233.124.135/available_users?user_id=${id}`
        );
          await setLoader(false);
          await setUser(Response.data);
        
      };
      fetchData();
    }
    return () => {
      effectRan.current = true;
    };
  });
};

export const useGetserverdata = () => {
  useUserData();  
  const guilds = useRecoilValue(UserData);
  const loader = useRecoilValue(loading);
  return { guilds, loader };
};
