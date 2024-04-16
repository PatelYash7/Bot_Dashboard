import { useState } from "react";
import Heading from "../Components/Heading";
import YT from "../Resources/images/YT.png";
import { MenuDropdown } from "../Components/MenuDropdown";
import { useSetYoutubeCreatorChannel, useYtChannelSet } from "../Hooks/Youtube-Notification";

function Notifications(): JSX.Element {
  return (
    <div className="mt-10 ml-8">
      <Heading head={"Youtube Notifications"} />
      <div className="flex items-center justify-between py-2 mt-4 rounded-lg ">
        <div className="text-xl font-medium text-gray-400 ">
          Notifications for Published YouTube Videos.
        </div>
      </div>
      <div className="my-4">
        <NotificationPopUp />
      </div>
    </div>
  );
}
export function NotificationPopUp(): JSX.Element {
  const [channel, SetChannel] = useState("");
  const [value, setValue] = useState<string | unknown>();
  const guild_id = window.localStorage.getItem("guild_id") as string;
  const handleSubmit = async () => {
    if(value){
      const response = await useYtChannelSet({guild_id,channel_id:value as string});
      const ChannelSetResponse = await useSetYoutubeCreatorChannel({guild_id,yt_Channel_name:channel});
      if(response && ChannelSetResponse){
        alert("Channel Added Successfully");
      }
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="rounded-lg bg-cardBox ">
      {/* TopBar */}
      <div className="flex items-center justify-between px-3 py-3 ">
        <div className="flex items-center justify-start gap-2">
          <img className="w-6 h-6" src={YT} alt="img" />
          <div className="text-xl font-semibold text-white">Add Channel</div>
        </div>
        {/* Cancel Button */}
      </div>
      <div className="px-3 text-base text-gray-400">
        Enter the Youtube Channel ID.
      </div>
      <div>
        <MenuDropdown handleChange={handleChange} value={value}/>
      </div>

      <div className="px-3 my-3 ">
        <input
          type="text"
          className="w-[50%] px-3 py-3 text-white rounded-lg outline-none  bg-navColor"
          placeholder="Channel @handle or ID"
          onChange={(e) => {
            SetChannel(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center justify-end gap-4 px-2 py-6 text-white bg-navColor ">
        <button
          type="button"
          className="px-6 py-1 font-medium rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
          onClick={handleSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
export default Notifications;
