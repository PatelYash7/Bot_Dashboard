import { useGetserverdata } from "../Hooks/User-data-hook";
export const ServerlistComponent = () => {
  const {userServerWithPresence}= useGetserverdata();
  const handleClick = (server_id:string)=>{
    window.open(`https://discord.com/oauth2/authorize?client_id=1075305629641621504&permissions=8&scope=bot&guild_id=${server_id}`, '_blank', 'toolbar=0,location=0,menubar=0');
    setTimeout(()=>{
      window.location.reload()
    },10000)
  }
  return (
  <div className="flex items-center justify-center h-screen text-white bg-mainColor">
    {
      userServerWithPresence.map((server)=>(
        server.isPresent?<div key={server.id}>
          <div >
            {server.id}
          </div>
        </div>: <div  key={server.id} onClick={()=>{handleClick(server.id)}}>
          {server.name}
        </div>
      ))
    }
  </div>)
};
