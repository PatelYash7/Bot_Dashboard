import Card from "./Card";
import MessageIcon from "../Resources/images/ChatIcon.png";

function CardBox(): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-2">
        <Card
          heading={"Custom Messages"}
          img={MessageIcon}
          description={"Create Custom Messages to be sent to your customers.lorem ipsum hjaskdhafjkjkasbfjlkafjbfjfasjlkfdlsjfdsdbdjsda jsfdhfjakh fljksadhfj"}
          buttonDesc={"Create Message"}
          route="/messages"  
        
        />
        <Card
          heading={"Moderation Cases"}
          img={MessageIcon}
          description={"View And edit all moderation cases using the dashboard"}
          buttonDesc={"View Cases"}
          route="/moderation"  
        />
        <Card
          heading={"User reports"}
          img={MessageIcon}
          description={"Allow Users to Reports other and fully Customize how to handle them"}
          buttonDesc={"Configure Reports"}
          route="/moderation"  
        />
        <Card
          heading={"Role Greetings"}
          img={MessageIcon}
          description={"Welcome Users to their new role by using Bots role assignment messages"}
          buttonDesc={"Show Role Messages"}
          route="/welcome-message"  
        />
        <Card
          heading={"Prefix"}
          img={MessageIcon}
          description={"Implement how you execute commands"}
          buttonDesc={"Add prefix"}
          route="/commands"  
        />
        <Card
          heading={"AI Moderation"}
          img={MessageIcon}
          description={"User AI to assist you in Moderating your Server"}
          buttonDesc={"Configure AI"}
          route="/automoderation"  
        />
    </div>
  );
}

export default CardBox;
