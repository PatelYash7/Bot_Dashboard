import {useState } from "react";
import Heading from "../Components/Heading";
import { useSelectChannel, useSetWelcomeMessage } from "../Hooks/Welcome-message-Hook";
import { SubmitButton } from "../Components/Button";
import { useRecoilValue } from "recoil";
import { ChannelArray } from "../Atoms/State";
const defaultText =
  "Hi Username, Welcome to ServerName Have a great time here. Please follow Guidlines.";

function WelcomeMes(): JSX.Element {
  const [message, setMessage] = useState(defaultText);
  const [value, setValue] = useState<string|unknown>();
  const ChannelArrays = useRecoilValue(ChannelArray);

  const handleSubmit = async () => {
    const response = await useSetWelcomeMessage({message});
    const responseChannel=  await useSelectChannel({guild_id:window.localStorage.getItem('guild_id') as string, channel_id:value as string})
    if(response && responseChannel){
      alert("Welcome Message Updated on " + `"${ChannelArrays?.find((channel)=>channel.id===value)?.channel}" Channel`)
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="mt-10 ml-8">
      <Heading head="Welcome Message" />

      <div className="flex flex-col gap-4 mt-4">
        <div className="text-base font-medium text-gray-400 ">
          Enter the Welcome message here.
        </div>

        <div>
          <select value={value as string} defaultValue={ChannelArrays?.[0].id as string} onChange={handleChange}>
            {ChannelArrays?.map((channel) => {
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


