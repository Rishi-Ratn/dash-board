import React from 'react'
import  { useNavigate } from 'react-router-dom'

const KidCard = ({name, id}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/kid-dashboard/${id}`)} className=" w-[250px] cursor-pointer p-6 m-4 text-center bg-text h-[428px] rounded-lg shadow-md hover:bg-red-300 transition-colors">
            <h2 className='text-xxl font-semibold text-background uppercase bold'>{name}</h2>
            <div className="bg-slate-600 hover:bg-text hover:text-background rounded h-52 mt-5 flex justify-center items-center">Kids Image</div>
            <div className="bg-slate-600 hover:bg-text hover:text-background rounded h-24 mt-5 flex justify-center items-center">Other Details</div>
        </div>
    );
};

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background text-text ">
        <div className="flex flex-row">
            <KidCard name="Kid 1" id="1"/>
            <KidCard name="Kid 2" id="2"/>
            <KidCard name="Kid 3" id="3"/>
        </div>
    </div>
  )
}

export default HomePage;