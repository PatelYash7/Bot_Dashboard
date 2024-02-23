import Button from "./Button";

interface Props {
    img:string;
    heading:string;
    description:string;
    buttonDesc:string;
    route:string

}

function Card(props:Props):JSX.Element {
    const {img,heading,description,buttonDesc,route}= props
  return (
    <div className="text-white flex flex-col gap-1 items-start p-4 rounded-lg bg-cardBox justify-center ">
        <div className="my-1">
            <img src={img} className="h-7 w-7" alt="Icon" />
        </div>
        <div className="text-white font-medium text-xl my-1">
            {heading}
        </div>
        <div className=" font-normal text-base my-1 cursor-default">
            {description}
        </div>
        <div className="my-1">
            <Button
                 route={route}
                 text={buttonDesc}
            />
        </div>
    </div>
  )
}

export default Card