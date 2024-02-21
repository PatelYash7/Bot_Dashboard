interface Props{
    name:string;
    img:string;
}

function Subsidebar(props:Props): JSX.Element {
    const {name,img} = props;
  return (
    <div className="flex items-center gap-4 justify-start py-1 px-2 hover:transition transition text-gray-400 hover:font-medium hover:text-white rounded hover:bg-hoverbg w-full">
        <div>
            <img src={img} className="h-5 w-5" alt="" />
        </div>
        <div>{name}</div>
    </div>
  )
}

export default Subsidebar