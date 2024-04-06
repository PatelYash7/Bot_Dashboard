import { useNavigate, useSearchParams } from "react-router-dom";
import { getUser} from "../Hooks/Login-hook";



function Login() {
  const [searchParam] = useSearchParams();
  const navigate  =useNavigate();
  const callBack :string|null = searchParam.get("code") || null;

  async function getData(){
    const data = await getUser({callBack});
    console.log(data)
  }
  if (callBack) {
    getData();
    
  }
  return (
    <div>
      <a href={`${import.meta.env.VITE_DISCORD_AUTH}`}>
        <div className="text-xl text-white bg-blue-300">Login With Discord</div>
      </a>
    </div>
  );
}
export default Login;
