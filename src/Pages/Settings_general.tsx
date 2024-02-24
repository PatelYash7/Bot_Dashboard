import Heading from "../Components/Heading"
import SettingComponent from "../Components/SettingComponent"

function Settings_general():JSX.Element {
  return (
    <div className="flex flex-col ml-8 mt-10">
      <Heading 
        head={"General Settings"}
      />
      <div className="rounded-lg mt-8">

        <SettingComponent/>
      </div>
    </div>
  )
}

export default Settings_general