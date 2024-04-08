import Navbar from "../Components/Navbar";
import { getData } from "../Hooks/Login-hook";

export const Serverlist = () => {
 const {Data,loading}=getData();
  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center h-12 px-16 py-4 bg-navColor">
        <Navbar />
      </div>
      {!loading && Data ? <div>{Data.user.id}</div> : <div>Loading....</div>}
    </div>
  );
};
