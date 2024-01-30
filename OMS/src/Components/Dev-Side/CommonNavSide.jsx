import React from 'react'
import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    Alert,
    Input,
    Drawer,
    Card,
         
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
  import {
    CubeTransparentIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,
  } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
export function CommonNavSide() {

    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
   
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
   
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <>
    
  <div className="flex p-2">
       <Card className="h-[calc(100vh-2rem)]  max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray"  >
        <h1 className='text-orange-500 font-bold'>Operational Management System</h1> 
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/dashboard">Dashboard</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/ongoingtask">Ongoing Task</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/request">Leave Request</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
    <div className="fixed top-0 right-0 m-2 flex items-center">
  <div className="m-2">
    <button className="bg-white">
      <img className="w-8 h-[2rem]" src="./img/BellOutline.svg" alt="Bell" />
    </button>
  </div>
  <div className="m-2">
    <button className="bg-white">
      <img className="w-8" src="./img/UserCircle.svg" alt="Profile" />
    </button>
  </div>
</div>


  </div>



  </>
  )

}
export default CommonNavSide;
