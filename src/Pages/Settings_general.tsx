import Heading from "../Components/Heading";
import SectionComponent from "../Components/SectionComponent";

function Settings_general(): JSX.Element {
  const roleText=`All the Roles in the Server can be maintained here.All the Roles with \
  Administrator or manage guild permissions are automatically added here 
  re.All the Roles with \
  Administrator or manage guild permissions are automatically adde`

  return (
    <div className="flex flex-col mt-10 mb-5 ml-8">
      <Heading head={"General Settings"} />
      {/* Date components */}
      <div className="mt-8 rounded-lg">
        <div className="flex justify-between min-w-full p-3 text-white rounded-lg bg-hoverbg">
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="text-2xl font-medium">Date format</div>
            <div className="font-normal ">
              {/* Needs to be Updated */}
              Preview<span>: 2024/02/26</span>
            </div>
          </div>
          <div className="flex items-center justify-center py-0 my-3 rounded-lg px-14 bg-lightbg">
            <input
              type="text"
              className="text-center text-black bg-transparent border-none  w-fit h-fit"
              placeholder="YYYY/MM/DD"
            />
          </div>
        </div>
      </div>
      <SectionComponent head={"Error Logs"} text={"If there is an Error our Bot will give its Details"}/>
      {/* Mid Heading */}
      <div className="text-[#909498] text-lg font-medium mt-4" >
            Permissions
      </div>
      <div>
        <SectionComponent head={"Role Manager"} text={roleText}/>
        <SectionComponent  head={"Advanced permissions"} text={"Setup advanced permissions for roles and users."}/>
        <SectionComponent  head={"Command permissions"} text={"Setup Permissions for specific commands in the Commands tab"}/>
      </div>
    </div>
  );
}

export default Settings_general;
