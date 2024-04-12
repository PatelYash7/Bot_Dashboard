import Heading from "../Components/Heading";

function LevelSetup() {
  return (
    <div className="mt-10 ml-8">
      <Heading head="Levels" />
      <div className="mt-2 text-lg text-gray-500">
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
function LevelingUp() {
  return (
    <div className="bg-LevelBox rounded-lg w-[80%] px-4 py-4 text-slate-200">
      <div className="text-lg font-semibold">Levelling Up</div>
      <div className="my-2 text-gray-400">
        Whenever the user gains a level,Bot will send a personalized message to
        the user.
      </div>
      <div className="flex flex-col items-start mt-8">
        <div className="font-medium text-gray-600">Level up announcement</div>
        <div className="flex justify-center w-full py-2 my-2 rounded-lg bg-navColor">
          <select
            className="w-full mx-4 bg-transparent outline-none bg-navColor "
            name="levelup"
            required
          >
            <option className="border-none outline-none bg-navColor" value="">Select Your Channel </option>
            {DummyData.map((item) => (
              <option className="border-none outline-none bg-navColor" value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col items-start mt-8">
        <div className="font-medium text-gray-600">Level up announcement Message</div>
        <div className="flex justify-center w-full py-2 my-2 rounded-lg bg-navColor">
          <textarea className="w-full h-full p-2 outline-none bg-navColor " name="levelup" required>
            "Welcome to the Server, Have a Great time here"
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default LevelSetup;
