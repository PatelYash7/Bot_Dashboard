import { useRecoilValue } from "recoil";
import { ChannelArray } from "../Atoms/State";

export const MenuDropdown = ({handleChange,value}: {handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,value:string|unknown}) => {
  const ChannelArrays = useRecoilValue(ChannelArray);
  return (
    
      <select
        className="px-2 py-2 mx-4 my-4 text-white rounded outline-none bg-navColor"
        name="levelup"
        value={value as string}
        onChange={handleChange}
        required
      >
        {ChannelArrays.map((item) => (
          <option
            key={item.id as string}
            className="p-3 border-none outline-none bg-navColor"
            value={item.id as string}
          >
            {item.channel}
          </option>
        ))}
      </select>

  );
};
