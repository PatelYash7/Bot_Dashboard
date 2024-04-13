import { useEffect, useRef, useState } from "react";
import Heading from "../Components/Heading";
import axios from "axios";
import { useSelectChannel, useSetWelcomeMessage } from "../Hooks/Welcome-message-Hook";
import { SubmitButton } from "../Components/Button";
const defaultText =
  "Hi Username, Welcome to ServerName Have a great time here. Please follow Guidlines.";

interface ChannelListArray {
  channel: string;
  id: string | unknown;
}

function WelcomeMes(): JSX.Element {
  const [message, setMessage] = useState(defaultText);
  const [channelList, setChannelList] = useState<ChannelListArray[]>();
  const [value, setValue] = useState(channelList?.[0].id);
  const handleCall = useRef(false);
  const handleSubmit = async () => {
    if(value){
       await useSetWelcomeMessage({message});
       await useSelectChannel({guild_id:window.localStorage.getItem('guild_id') as string, channel_id:value as string})
    }else {
      alert("Select Channel ")
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (handleCall.current === false) {
      const fetchData = async () => {
        const Response = await axios.get(
          `http://34.233.124.135/server_Channels_List/?guild=${window.localStorage.getItem(
            "guild_id"
          )}`
        );
        const ChannelArray = Object.entries(Response.data).map(
          ([channel, id]) => ({ channel, id })
        );
        setChannelList(ChannelArray);
      };
      fetchData();
    }

    return () => {
      handleCall.current = true;
    };
  }, []);

  return (
    <div className="mt-10 ml-8">
      <Heading head="Welcome Message" />

      <div className="flex flex-col gap-4 mt-4">
        <div className="text-base font-medium text-gray-400 ">
          Enter the Welcome message here.
        </div>

        <div>
          <select value={value as string} onChange={handleChange}>
            {channelList?.map((channel) => {
              return (
                <option key={channel.id as string} value={channel.id as string}>{channel.channel}</option>
              );
            })}
          </select>
        </div>

        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className=" bg-hoverbg rounded-lg outline-none text-white px-2 py-2 w-[80%]"
          defaultValue={defaultText}
          name="customMessage"
          id="customMessage"
          cols={100}
          rows={10}
        ></textarea>
      </div>
      <SubmitButton handleSubmit={handleSubmit}  text="Submit"/>
    </div>
  );
}

export default WelcomeMes;


