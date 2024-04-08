import { Serverlist } from "./Serverlist";
import Login from "./Login";
function ProtectedRoute() {
  const code : string | null = window.localStorage.getItem("code");
  return <div>{ code ? <Serverlist/> : <Login/>}</div>;
}

export default ProtectedRoute;
