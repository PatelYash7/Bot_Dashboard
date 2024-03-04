import Heading from "../Components/Heading"

function WelcomeMes(): JSX.Element {
  return (
    <div className="mt-10 ml-8">
      <Heading head="Welcome Message"/>
      
      <div className="mt-4 flex flex-col gap-4">

        <div className=" text-gray-400 text-base font-medium">
          Enter the Welcome message here.
        </div>

        <textarea className=" bg-hoverbg rounded-lg outline-none text-white px-2 py-2 w-[80%]" 
        defaultValue={"Hi Username, Welcome to ServerName Have a great time here. Please follow Guidlines."}
        name="customMessage" id="customMessage" cols={100} rows={10}>
          
        </textarea>
      </div>
      
    </div>
  )
}

export default WelcomeMes