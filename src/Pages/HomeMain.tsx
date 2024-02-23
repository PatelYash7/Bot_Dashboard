import CardBox from "../Components/CardBox";
import HomeHeading from "../Components/HomeHeading";

function HomeMain(): JSX.Element {
  return (
    <div className="m-4 h-screen flex flex-col">
      <div className="font-medium  items-center flex justify-start  my-4 mx-5">
        <HomeHeading name={"Yash"} />
      </div>
      <div className="mx-5 my-4 flex gap-3 ">
        <CardBox/>
        <CardBox/>
      </div>
    </div>
  );
}

export default HomeMain;
