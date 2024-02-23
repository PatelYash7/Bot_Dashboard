interface Props {
    img:string;
    heading:string;
    description:string;
    buttonDesc:string;

}

function Card(props:Props):JSX.Element {
    const {img,heading,description,buttonDesc}= props
  return (
    <div className="text-white flex flex-col gap-2 items-start justify-center">
        <div>
            <img src={img} className="h-7 w-7" alt="Icon" />
        </div>
        <div>
            {heading}
        </div>
        <div>
            {description}
        </div>
        <div>

        </div>
    </div>
  )
}

export default Card