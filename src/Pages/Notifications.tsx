import Heading from "../Components/Heading";
import YT from "../Resources/images/YT.png";
import { useRecoilState } from "recoil";
import { NotifPopup } from "../Atoms/State";

function Notifications(): JSX.Element {
  const [popup,setpopup]=useRecoilState(NotifPopup);

  if(popup){
    return(
      <div className="flex justify-center items-center w-full h-full">
          <NotificationPopUp/>
      </div>
    )
  }
  return (
    <div className="mt-10 ml-8">
      <Heading head={"Notifications"} />
      <div className=" bg-lightbg rounded-lg  px-4 py-2 mt-4  flex justify-between items-center ">
        <div className="flex justify-start gap-2 items-center py-2">
          <img className="w-7 h-7 " src={YT} alt="" />
          <div className="flex flex-col justify-center items-start">
            <div className="text-white text-2xl font-medium">YouTube</div>
            <div className="text-gray-400 text-base font-medium">
              Notifications for Published YouTube Videos.
            </div>
          </div>
        </div>
        <div className="w-20 text-white font-semibold text-center mx-6">
          <button onClick={()=>{setpopup(!popup)}} type="button" className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-1  rounded-md font-medium">Setup</button>
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
      <div className="flex justify-between items-center py-3 px-3 ">
        <div className="flex items-center justify-start gap-2">
          <img className="w-6 h-6" src={YT} alt="img" />
          <div className="text-white font-semibold text-xl">Add Channel</div>
        </div>
        {/* Cancel Button */}
        <div className="flex items-center justify-center">
          <button>
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
      <div className="my-3 text-base text-gray-400 py-3 px-3">
        Enter the Youtube Channel ID.
      </div>

      <div className=" my-3 px-3 ">
        <input type="text" className="w-full rounded-lg py-3 px-3 bg-navColor outline-none text-white" placeholder="Channel @handle or ID" />
      </div>
      <div  className="bg-navColor py-6 text-white px-2 flex gap-4 justify-end items-center ">
          <button type="button" onClick={()=>{setpopup(!popup)}} className="bg-lightbg px-3 py-1 rounded-md font-medium hover:bg-hoverbg">Cancel</button>
          <button type="button" className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-1 rounded-md font-medium">Continue</button>
      </div>
    </div>
  );
}

export default Notifications;
