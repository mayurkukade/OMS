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
    <div className="flex p-2">
    <IconButton variant="text" size="lg" onClick={openDrawer}>
          {isDrawerOpen ? (
            <XMarkIcon className="h-8 w-8 stroke-2" />
          ) : (
            <Bars3Icon className="h-8 w-8 stroke-2" />
          )}
        </IconButton>
  
        <Drawer open={isDrawerOpen} onClose={closeDrawer}>
          <Card
            color="transparent"
            shadow={false}
            className="h-[calc(100vh-2rem)] w-full p-4"
          >
            <div className="mb-2 flex items-center gap-4 p-4">
              <img
                src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
                alt="brand"
                className="h-8 w-8"
              />
              <Typography variant="h5" color="blue-gray">
                Sidebar
              </Typography>
            </div>
            <div className="p-2">
              <Input
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                label="Search"
              />
            </div>
            <List>
              <Accordion
              >
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader
                  
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal">
                    <Link to="/dashboard"> Home</Link>
                    </Typography>
                  </AccordionHeader>
                </ListItem>
               
              </Accordion>
              <Accordion
               
              >
                <ListItem className="p-0" selected={open === 2}>
                  <AccordionHeader
                  
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal">
                    <Link to="/ongoingtask">Tasks</Link>
                    </Typography>
                  </AccordionHeader>
                </ListItem>
             
              </Accordion>
              <Accordion
               
              >
                <ListItem className="p-0" selected={open === 2}>
                  <AccordionHeader
                  
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal">
                    <Link to="/request"> Request's</Link>
                    </Typography>
                  </AccordionHeader>
                </ListItem>
             
              </Accordion>
              <hr className="my-2 border-blue-gray-50" />
              <ListItem>
                <ListItemPrefix>
                  <InboxIcon className="h-5 w-5" />
                </ListItemPrefix>
                Inbox
                <ListItemSuffix>
                  <Chip
                    value="14"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
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
            <Alert
              open={openAlert}
              className="mt-auto"
              onClose={() => setOpenAlert(false)}
            >
              <CubeTransparentIcon className="mb-4 h-12 w-12" />
              <Typography variant="h6" className="mb-1">
                Upgrade to PRO
              </Typography>
              <Typography variant="small" className="font-normal opacity-80">
                Upgrade to Material Tailwind PRO and get even more components,
                plugins, advanced features and premium.
              </Typography>
              <div className="mt-4 flex gap-3">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-medium opacity-80"
                  onClick={() => setOpenAlert(false)}
                >
                  Dismiss
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-medium"
                >
                  Upgrade Now
                </Typography>
              </div>
            </Alert>
          </Card>
        </Drawer>
    <div className="ml-auto flex items-center">
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
  )

}
export default CommonNavSide;
