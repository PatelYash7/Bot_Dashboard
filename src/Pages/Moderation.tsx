import Heading from "../Components/Heading";
import { Link, Outlet, useLocation } from "react-router-dom";

import Expand from "../Components/Expand";
import { useRecoilState } from "recoil";
import { ModerationPath } from "../Atoms/State";


function Moderation(): JSX.Element {
  
  const location = useLocation();
  const { pathname } = location;
  const DesiredRoute = "/moderation/message-type";
  const LevelRoute = "/moderation/level-setup";
  const [modePathValue,setModePathValue] = useRecoilState(ModerationPath);
  setModePathValue(pathname);
  if(modePathValue === DesiredRoute){
    return (
        <div className="mt-10 ml-8">
            <div className="my-4 flex justify-start gap-4 items-center">
              <Link to={"/moderation"} >
                <Heading head="Moderation" />
              </Link>
              <Expand routeName="Message Type" />
            </div>
            <Outlet />
        </div>
    )
  }  
  if (modePathValue === LevelRoute){
    return(
    <div className="mt-10 ml-8">
            <div className="my-4 flex justify-start gap-4 items-center">
              <Link to={"/moderation"} >
                <Heading head="Moderation" />
              </Link>
              <Expand routeName="Level Setup" />
            </div>
            <Outlet />
        </div>
    )  
  }
  
  return (
    <div className="mt-10 ml-8">
      <div className="my-4 flex justify-start gap-4 items-center">
                <Heading head="Moderation" />
      </div>
      <Link to="/moderation/message-type">
          <div className="w-full bg-lightbg hover:bg-hoverbg transition-all rounded-lg mt-4 py-3 px-3 flex justify-start gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <div className="text-white px-3 ">
              <p className="text-xl font-medium">Message type</p>
              <p className="text-lg">
                Select the type of Messages for a channel (Image or Text)
              </p>
            </div>
          </div>
        </Link>
        <Link to="/moderation/level-setup" >
          <div className="w-full bg-lightbg hover:bg-hoverbg transition-all rounded-lg mt-4 py-3 px-3 flex justify-start gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <div className="text-white px-3 ">
              <p className="text-xl font-medium">Level Setup</p>
              <p className="text-lg">
                Setup the levels for the User and Manage their Roles on the basis of their Levels
              </p>
            </div>
          </div>
        </Link>
    </div>
  );
}

export default Moderation;
