import Subsidebar from "./Subsidebar"
import Bar from "../Resources/images/Bar.png"

function Sidebar() {
  return (
    <div className="flex flex-col gap-3 items-center mr-2 ">
            <Subsidebar name="Settings" img={Bar}/>        
            <Subsidebar name="Settings" img={Bar}/>
            <Subsidebar name="Settings" img={Bar}/>
            <Subsidebar name="Settings" img={Bar}/>
            <Subsidebar name="Settings" img={Bar}/>
            <Subsidebar name="Settings" img={Bar}/>
            <Subsidebar name="Settings" img={Bar}/>
    </div>
  )
}
export default Sidebar