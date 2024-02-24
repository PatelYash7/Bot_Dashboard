

function SettingComponent():JSX.Element {
  return (
    <div  className="flex justify-between bg-hoverbg min-w-full p-3 rounded-lg text-white">
        <div className="flex flex-col items-start justify-center gap-2">
            <div className="font-medium text-2xl">
                Date format
            </div>
            <div className=" font-normal">
                {/* Needs to be Updated */}
                Preview<span>: 2024/02/26</span> 
                        
            </div>
        </div>
        <div className="px-14 flex justify-center py-0 my-3 items-center bg-lightbg rounded-lg">
            <input type="text" className=" bg-transparent w-fit h-fit text-center border-none text-black " placeholder="YYYY/MM/DD" />
        </div>
    </div>
  )
}

export default SettingComponent