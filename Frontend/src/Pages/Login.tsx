import { useSearchParams } from "react-router-dom";
import {Button} from "../Components/Button";
import { setLogin } from "../Hooks/Login-hook";

function Login() {
  const code = useSearchParams()[0].get("code");
  if (code) {
    setLogin({code});
  }
  return (
    <div className="flex items-center justify-center h-screen bg-mainColor">
      <Button text={"Login"} route={import.meta.env.VITE_DISCORD_AUTH} />
    </div>
  );
}
export default Login;
