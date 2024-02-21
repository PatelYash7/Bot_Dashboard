import Dropdown from "./Dropdown";
import { useState } from "react";

interface Props {
  name: string;
  img: string;
}
function Userprofile(props: Props): JSX.Element {
  const { name, img } = props;
  const[isOpen,SetIsopen]=useState(false);
  return (
    <div className={"flex items-center justify-between gap-4 px-2 py-1 rounded-3xl hover:bg-[#32373E] hover:transition transition hover:duration-200"}>
        {/* Image  And Name*/}
      <div className="flex items-center gap-3 justify-evenly">
        <div className="rounded h-6 w-6">
          <img src={img} className="h-full w-full rounded-full" alt="" />
        </div>
        <div className="text-white text-sm font-medium">{name}</div>
      </div>
      {/* Logo */}
      <div className="text-center text-white flex items-center justify-center">
        <button onClick={(): void => SetIsopen(prev=>!prev)} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      {isOpen?
          <div className="w-[8%] h-[10%] absolute right-8 top-14 z-1 transition">
            <Dropdown/>
          </div>:
        ""}
    </div>
  );
}

export default Userprofile;
