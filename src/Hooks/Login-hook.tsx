import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const setLogin = ({ code }: { code: string }) => {

  const navigate = useNavigate();
  useEffect(() => {
    window.localStorage.setItem("code", code);
    navigate("/");
  },[]);
};
