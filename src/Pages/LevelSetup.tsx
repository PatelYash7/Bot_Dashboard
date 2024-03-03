import Heading from "../Components/Heading";

function LevelSetup() {
  return (
    <div className="mt-10 ml-8">
      <Heading head="Levels" />
      <div className="text-gray-500 text-lg mt-2">
        Give your members XP and Levels when they send messages and rank them by
        activity in a leaderboard.
      </div>
      <div className="py-6">
        <LevelingUp />
      </div>
    </div>
  );
}
const DummyData = [
  {
    name: "fruit",
  },
  {
    name: "Veggies",
  },
  {
    name: "Apple",
  },
  {
    name: "yash",
  },
  {
    name: "Juice",
  },
];
const MessageString:string= "Congratulations! You have leveled up to level up"
function LevelingUp() {
  return (
    <div className="bg-LevelBox rounded-lg w-[80%] px-4 py-4 text-slate-200">
      <div className="text-lg font-semibold">Levelling Up</div>
      <div className="text-gray-400 my-2">
        Whenever the user gains a level,Bot will send a personalized message to
        the user.
      </div>
      <div className="flex flex-col items-start mt-8">
        <div className="text-gray-600 font-medium">Level up announcement</div>
        <div className="bg-navColor w-full flex justify-center  py-2 rounded-lg my-2">
          <select
            className="w-full bg-transparent mx-4 bg-navColor outline-none "
            name="levelup"
            required
          >
            <option className="bg-navColor outline-none border-none" value="">Select Your Channel </option>
            {DummyData.map((item) => (
              <option className="bg-navColor outline-none border-none" value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col items-start mt-8">
        <div className="text-gray-600 font-medium">Level up announcement Message</div>
        <div className="bg-navColor w-full  flex justify-center  py-2 rounded-lg my-2">
          <textarea className="w-full h-full p-2 outline-none bg-navColor " name="levelup" required>{MessageString}</textarea>
        </div>
      </div>
    </div>
  );
}

export default LevelSetup;
