import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { Auth } from "../Atoms/State";
import { useEffect } from "react";

export const setLogin = ({ code }: { code: string }) => {
  const SetAuthorization = useSetRecoilState(Auth);
  const navigate = useNavigate();
  useEffect(() => {
    window.localStorage.setItem("code", code);
    navigate("/");
    SetAuthorization(true);
  },[]);
};
