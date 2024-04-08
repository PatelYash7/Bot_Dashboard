import { Link } from "react-router-dom";

interface Props{
    text:string;
    route:string;
}
function Button(props:Props) {

  const{route,text}=props  
  return (
    <div className="px-2 py-1 duration-300 ease-in-out rounded-md cursor-pointer hover:bg-sidebarHead transiontion bg-gradient-to-r from-cyan-500 to-blue-500">
        <button>
            <Link to={route}>
                {text}
            </Link>
        </button>
    </div>
  )
}

export default Button