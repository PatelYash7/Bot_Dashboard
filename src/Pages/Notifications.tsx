import Heading from "../Components/Heading";
import YT from "../Resources/images/YT.png";
import { useRecoilState } from "recoil";
import { NotifPopup } from "../Atoms/State";

function Notifications(): JSX.Element {
  const [popup,setpopup]=useRecoilState(NotifPopup);

  if(popup){
    return(
      <div className="flex items-center justify-center w-full h-full">
          <NotificationPopUp/>
      </div>
    )
  }
  return (
    <div className="mt-10 ml-8">
      <Heading head={"Notifications"} />
      <div className="flex items-center justify-between px-4 py-2 mt-4 rounded-lg bg-lightbg">
        <div className="flex items-center justify-start gap-2 py-2">
          <img className="w-7 h-7 " src={YT} alt="" />
          <div className="flex flex-col items-start justify-center">
            <div className="text-2xl font-medium text-white">YouTube</div>
            <div className="text-base font-medium text-gray-400">
              Notifications for Published YouTube Videos.
            </div>
          </div>
        </div>
        <div className="w-20 mx-6 font-semibold text-center text-white">
          <button onClick={()=>{setpopup(true)}} type="button" className="px-5 py-1 font-medium rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">Setup</button>
        </div>
      </div>
    </div>
  );
}
export function NotificationPopUp(): JSX.Element {
  const [popup,setpopup]=useRecoilState(NotifPopup);
  
  return (
    <div className="bg-cardBox rounded-lg w-[30%]  ">
      {/* TopBar */}
      <div className="flex items-center justify-between px-3 py-3 ">
        <div className="flex items-center justify-start gap-2">
          <img  className="w-6 h-6" src={YT} alt="img" />
          <div className="text-xl font-semibold text-white">Add Channel</div>
        </div>
        {/* Cancel Button */}
        <div className="flex items-center justify-center">
          <button onClick={()=>{setpopup(!popup)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6 hover:h-7 hover:w-7"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
          </svg>
              </  button>
        </div>
      </div>
      <div className="px-3 py-3 my-3 text-base text-gray-400">
        Enter the Youtube Channel ID.
      </div>

      <div className="px-3 my-3 ">
        <input type="text" className="w-full px-3 py-3 text-white rounded-lg outline-none bg-navColor" placeholder="Channel @handle or ID" />
      </div>
      <div  className="flex items-center justify-end gap-4 px-2 py-6 text-white bg-navColor ">
          <button type="button" onClick={()=>{setpopup(!popup)}} className="px-3 py-1 font-medium rounded-md bg-lightbg hover:bg-hoverbg">Cancel</button>
          <button type="button" className="px-6 py-1 font-medium rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">Continue</button>
      </div>
    </div>
  );
}
export default Notifications;
