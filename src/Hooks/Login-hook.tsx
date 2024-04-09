import { useNavigate } from "react-router-dom";
import { useEffect, useRef} from "react";
import axios from "axios";

export const setLogin = ({ code }: { code: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.localStorage.setItem("code", code);
    navigate("/");
  }, []);
};

export const setLogout = () => {
  window.localStorage.removeItem("code");
  window.localStorage.removeItem("id");
  window.location.reload();
};

export const getData = () => {
  
  const code = window.localStorage.getItem("code");
  const id = window.localStorage.getItem("id");
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false && id===null) {
      const fetchData = async () => {
        
          const Response = await axios.get(`http://34.233.124.135/callback/?code=${code}`);
          if(Response.data){
            await window.localStorage.setItem("id",Response.data.user.id)
          }
      };
      fetchData();
    }
    return () => {
      effectRan.current = true;
    };
  }, []);
};
