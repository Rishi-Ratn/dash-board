import React from 'react'
import LineChart from './LineChart'


const DetailedReports = () => {

  return (
    <div className='flex flex-col py-6 px-12'>

      <h2 className='uppercase text-lg'>Dashboard</h2>


      <div className="flex space-x-8">
        <div className="flex flex-col w-2/5 h-[120px] border rounded justify-center p-4 mt-5 text-background bg-text ">
          <span className='uppercase font-semibold'>Hours Spent</span>
          <span>10</span>
        </div>
        <div className="flex flex-col w-2/5 h-[120px] border rounded justify-center p-4 mt-5 text-background bg-text ">
          <span className='uppercase font-semibold'>Proficiency Level</span>
          <span>Intermediate</span>
        </div>
      </div>
      <div className="flex flex-grow mt-5 flex-col w-2/5 h-[250px] mb-4">
        <h2 className='uppercase text-lg'>Progress</h2>
        <LineChart className="" />
      </div>
      <div className="flex mt-5">
        <h2 className='uppercase text-lg'>Strengths & Weakness</h2>
      </div>
      <div className="flex space-x-8">
        <div className="flex flex-col w-2/5 h-[120px] border rounded justify-center p-4 mt-5 text-background bg-text ">
          <span className='uppercase font-semibold'>Strength:</span>
          <span className='mt-2'>Reading</span>
        </div>
        <div className="flex flex-col w-2/5 h-[120px] border rounded justify-center p-4 mt-5 text-background bg-text ">
          <span className='uppercase font-semibold'>Weakness:</span>
          <span className='mt-2'>Speaking</span>
        </div>
      </div>

    </div>
  )
}

export default DetailedReports

