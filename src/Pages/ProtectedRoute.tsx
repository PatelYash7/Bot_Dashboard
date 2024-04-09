import {ServerlistPage} from "./ServerlistPage";
import Login from "./Login";
function ProtectedRoute() {
  const code : string | null = window.localStorage.getItem("code");
  return <div>{ code ? <ServerlistPage/> : <Login/>}</div>;
}

export default ProtectedRoute;
