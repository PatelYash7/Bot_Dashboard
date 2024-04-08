import { Navigate } from "react-router-dom";
import { Serverlist } from "./Serverlist";
function ProtectedRoute() {
  const code : string | null = window.localStorage.getItem("code");

  return <div>{ code ? <Serverlist/> : <Navigate to={"/login"} />}</div>;
}

export default ProtectedRoute;
