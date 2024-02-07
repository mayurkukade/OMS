
import React from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
  } from "@heroicons/react/24/solid";
import { useState } from 'react';
import Homedashboard from '../Dashboard/Homedashboard';
import AddTask2 from '../Dashboard/AddTask2';
import AddToken from '../Dashboard/AddToken';
import CompletedTask from '../Dashboard/CompletedTask';
import Task from '../Dashboard/Task';
import AddProject from '../Dashboard/AddProject';

export default function TeamLead() {

const [open1 , setOpen1] = useState(true)
const [open2 , setOpen2] = useState(false)
const [open3 , setOpen3] = useState(false)
const [open4 , setOpen4] = useState(false)
const [open5 , setOpen5] = useState(false)
const [open6 , setOpen6] = useState(false)

function dashboard (){
   setOpen1(true) 
   setOpen2(false) 
   setOpen3(false) 
   setOpen4(false) 
   setOpen5(false)
   setOpen6(false) 
}
function RunningTask (){
    setOpen1(false) 
    setOpen2(true) 
    setOpen3(false) 
    setOpen4(false) 
    setOpen5(false)
    setOpen6(false) 
}
function AddTasks (){
    setOpen1(false) 
    setOpen2(false) 
    setOpen3(true) 
    setOpen4(false) 
    setOpen5(false)
    setOpen6(false) 
}
function AddTokens (){
    setOpen1(false) 
    setOpen2(false) 
    setOpen3(false) 
    setOpen4(true) 
    setOpen5(false)
    setOpen6(false) 
}
function CompletedTasks (){
    setOpen1(false) 
    setOpen2(false) 
    setOpen3(false) 
    setOpen4(false) 
    setOpen5(true)
    setOpen6(false)
}
function Addproject (){
    setOpen1(false) 
    setOpen2(false) 
    setOpen3(false) 
    setOpen4(false) 
    setOpen5(false)
    setOpen6(true)
}

  return (
    <div className=''>
        <div className='flex'>
           {/* sidebar start */}
            <div>
            <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <p onClick={dashboard}>Dashboard</p>  
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          <p onClick={RunningTask}>Running Task</p>
          
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          <p onClick={AddTasks}>Add Tasks</p>
          
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <p onClick={AddTokens}>Add Tokens</p>
          
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          <p onClick={CompletedTasks}>Completed Tasks</p>
          
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          <p onClick={Addproject}>Add Project</p>
          
        </ListItem>
      </List>
    </Card>
            </div>
           {/* sidebar End */}

          { open1 && ( <Homedashboard/>)}
          { open2 && ( <Task/>)}
          { open3 && ( <AddTask2/>)}
          { open4 && ( <AddToken/>)}
          { open5 && ( <CompletedTask/>)}
          { open6 && ( <AddProject/>)}
          
        </div>
    </div>
  )
}
