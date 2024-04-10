import { useGetserverdata } from "../Hooks/User-data-hook";
export const ServerlistComponent = () => {
  const userServerWithPresence= useGetserverdata();
  console.log(userServerWithPresence);
  
  return <div>

  </div>
};
