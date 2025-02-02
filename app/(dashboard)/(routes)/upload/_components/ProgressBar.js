import React from 'react'

function ProgressBar({progress}) {
  return (
    <div className="bg-gray-400 w-full mt-3 h-3 rounded-full"
    ><div className=" bg-primary h-4 rounded-full text-[10px] text-white" style={{width:`${progress}%`}}>
        {`${Number(progress).toFixed(0)}%`}
        </div>
        </div>
  )
}

export default ProgressBar