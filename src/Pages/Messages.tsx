import { useRecoilValue } from "recoil";
import { ChannelArray } from "../Atoms/State";

export default function Messages():JSX.Element {

  const ChannelArrays = useRecoilValue(ChannelArray);
  
  return (
    <div>
      <div>
        {ChannelArrays?.map((channel) => {
          return (
            <div key={channel.id as string}>
              {channel.channel}
            </div>
          );
        })}
      </div>
    </div>
  )
}
