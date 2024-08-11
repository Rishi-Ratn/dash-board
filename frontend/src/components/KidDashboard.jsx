import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-primary text-white p-4 h-screen">
            <ul className='space-y-4'>
                <li>
                    <Link to='progress-summary' className="block p-2 rounded hover:bg-red-700">
                        Progress Summary
                    </Link>
                </li>
                <li>
                    <Link to='detailed-reports' className="block p-2 rounded hover:bg-red-700">
                        Detailed Reports
                    </Link>
                </li>
            </ul>
        </div>
    )
};

const KidDashboard = () => {
  return (
    <div className="min-h-screen flex bg-background text-text">
        <Sidebar/>
        <div className="flex-grow p-6">
            <Outlet/>
        </div>
    </div>
  )
}

export default KidDashboard