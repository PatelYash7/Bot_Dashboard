import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { userData } from "../Interface";

export const setLogin = ({ code }: { code: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.localStorage.setItem("code", code);
    navigate("/");
  },[]);
};
export const setLogout = ()=>{
  window.localStorage.removeItem("code");
  window.location.reload();
}
export const getData = ()=>{
  const[loading,setLoading]=useState(true);
  const[Data,setData]=useState<userData>();
  const code = window.localStorage.getItem("code");
  const effectRan = useRef(false);
  useEffect(()=>{
    if(effectRan.current === false){

      const fetchData = async () => {
          axios.get(`http://34.233.124.135/callback/?code=${code}`).then((res) => {
              setData(res.data);
              setLoading(false);
          });
      };
      fetchData();
  }
  return ()=>{
      effectRan.current=true;
  }
  },[])
  return {
    loading,
    Data
  }
}