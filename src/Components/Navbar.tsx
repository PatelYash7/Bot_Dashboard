import ProfileBox from "./ProfileBox";
import image from "../Resources/images/TechTOnions Logo Compact 13.png"
import Userprofile from "./Userprofile";

function Navbar(): JSX.Element {
  const img: string =
    "https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg";
  return (
      <div className="flex justify-between gap-10 items-center min-w-full">
        <div className="flex items-center gap-10">
          {/* Logo and Name */}
          <div className="flex items-center">
            <img src={image}  className="  h-10 w-10 rounded-2xl"alt="" />
            <p className="text-white">TechTOnion</p>
          </div>
          <div className=" bg-lightbg rounded-3xl">
            <ProfileBox name="Near Hack's" img={img} />
          </div>
        </div>
        <div className="flex items-center ">
          <button onClick={(): void => {
            console.log("Clicked");
          }} className="">
          <Userprofile name="Yash" img={img} />
          </button>
        </div>
        
      </div>
  );
}

export default Navbar;
