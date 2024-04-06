import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Auth } from "../Atoms/State";

function ProtectedRoute() {
  const Authorization: Boolean = useRecoilValue(Auth);

  return <div>{Authorization ? <Outlet /> : <Navigate to={"/login"} />}</div>;
}

export default ProtectedRoute;
