import React from 'react'
import { Outlet } from "react-router-dom";
import Dashboardsidebar from '../Dashboard/Dashboardsidebar';
import Navbars from '../Navbars';

export default function AppLayout() {
  return (
    <div className='flex min-h-screen justify-center'>
        <div>
        <header className='w-[80rem]'>
         <Navbars/>
        </header>
       
        
        
        <div className='mt-2 flex '>
         <Dashboardsidebar/>
         <Outlet/>
        </div>
        
       
    </div>
    </div>
  )
}