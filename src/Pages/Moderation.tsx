import Heading from "../Components/Heading";
import {
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";

function Moderation(): JSX.Element {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  const DesiredRoute = "/moderation/message-type";
  return (
    <div className="mt-10 ml-8">

        {pathname === DesiredRoute ?<div className="my-4 flex justify-start gap-4 items-center">
        <Link to={"/moderation"}>
          <Heading head="Moderation" />
        </Link>   
        <div className="text-justify mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="text-white cursor-default text-3xl mt-2 font-medium">
          Message Type
        </div>
      </div>:<Link to={"/moderation"}>
          <Heading head="Moderation" />
        </Link>   }
      

      {DesiredRoute === pathname ? (
        <Outlet />
      ) : (
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
      )}
    </div>
  );
}

export default Moderation;
