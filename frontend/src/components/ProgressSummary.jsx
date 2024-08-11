import React from 'react'
import PieChart from './PieChart'

const ProgressSummary = () => {
  return (
    <div className='flex flex-row justify-center gap-28 h-[428px]'>
        <div className="bg-slate-100 shadow-lg rounded-lg px-5 py-5 h-[428px]">
          <h2 className="text-2xl text-background font-bold mb-4 flex">Current Lesson: Lesson 3</h2>
          <div className="bg-slate-600 rounded p-8 flex ">Listening101</div>
          <div className="bg-slate-600 rounded p-6 mt-2 flex">Hours Remaining: 1.5</div>
          {/* <div className="justify c"></div> */}
          <div className="bg-slate-600 rounded px-6 py-12 mt-2 h-44 justify-center flex items-center">Image</div>
        </div>

        <div className="space-y-2 w-4/12 h-[150px] ">
            <PieChart/>
        </div>
    </div>
  )
}

export default ProgressSummary