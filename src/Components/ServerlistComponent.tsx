import React from "react";
import { useGetserverdata } from "../Hooks/User-data-hook";
import { ServerWithPresenceObject } from "../Interface";
export const ServerlistComponent = () => {
  const { userServerWithPresence } = useGetserverdata();
  // console.log(userServerWithPresence)
  return (
    <div className="h-screen text-white bg-mainColor">
      <div className="flex items-center justify-center py-12 ">
        <div className="text-4xl font-extrabold text-white">
          Select a Server
        </div>
      </div>
      <div className="w-2/3 mx-auto my-0">
        <div className="grid content-center grid-cols-3 gap-4 px-6 py-4 justify-items-center">
          {userServerWithPresence.map((server) => (
            <ServerCard key={server.id} data={server} />
          ))}
        </div>
      </div>
    </div>
  );
};
export const ServerCard = ({ data }: { data: ServerWithPresenceObject }) => {
  return (
    <div className="w-[80%]">
      <div
        style={{ "--image-url": `url(${data.iconURL})` } as React.CSSProperties}
        className={`bg-[image:var(--image-url)] flex items-center justify-center ${
          data.icon ? "" : "bg-navColor"
        } bg-center bg-no-repeat   h-36 rounded-lg`}
      >
        <div className="w-24 h-24 border-2 rounded-full bg-opacity-30">
          {data.icon ? (
            <img
              className="w-full h-full rounded-full"
              src={data.iconURL}
              alt="img"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-2xl font-extrabold text-center rounded-full bg-cardBox">
              {data.name?.charAt(0)}'s Server
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
