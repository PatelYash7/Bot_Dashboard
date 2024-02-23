import Card from "./Card"
import MessageIcon from "../Resources/images/IconChat.png"
function CardBox(): JSX.Element {
  return (
    <div className="w-1/2 bg-red-400">
        <div className=" min-h-full bg-green-400">
            <Card 
                heading={"Custom Messages"}
                img={MessageIcon}
                description={"Create Custom Messages to be sent to your customers."}
                buttonDesc={"Create Message"}
            />
        </div>
    </div>
  )
}

export default CardBox