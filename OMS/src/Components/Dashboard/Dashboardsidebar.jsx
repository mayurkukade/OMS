
import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
  import { IoIosPeople } from "react-icons/io";
  import { FaTasks } from "react-icons/fa";
  import { FaPeopleRoof,FaPeopleRobbery  } from "react-icons/fa6";
  import { TbReportSearch } from "react-icons/tb";
  import { MdOutlineAccountBalance } from "react-icons/md";
  import { VscTasklist } from "react-icons/vsc";

export default function Dashboardsidebar() {
    const [open, setOpen] = React.useState(0);
    const [sidebarVisible, setSidebarVisible] = React.useState(true);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <div className=" mt-5">
        <Card className=" shadow-lg md:block hidden shadow-blue-gray-900 pb-2">
      <div className="mb-2 p-4">
        <Link to="/">
        <Typography variant="h5" color="blue-gray" className={`${sidebarVisible ? " " : " text-xs"}`}>
          Dashboard
        </Typography>
        </Link>
        <button className= {`h-3.5 w-3.5  ${sidebarVisible ? "ml-[12.7rem] ": "ml-12"}`} onClick={() => setSidebarVisible(!sidebarVisible)}>
    <ChevronRightIcon strokeWidth={2.5} className={` transition-transform duration-500 ease-in-out  ${sidebarVisible ? "rotate-180" : " "}`}   />
  </button>
      </div>
      <div className="flex">

        <div className={`mt-8  ${sidebarVisible ? "hidden": " ml-8"}`}>
 
        <div>
        <IoIosPeople  className="h-8 w-8" />
        </div>

        <div className="mt-8">
        <FaTasks  className="h-6 w-6" />
        </div>
        <div className="mt-8">
        <FaPeopleRoof className="h-6 w-6" />
        </div>
        <div className="mt-8">
        <TbReportSearch className="h-7 w-7" />
        </div>
        <div className="mt-8">
        <MdOutlineAccountBalance  className="h-7 w-7" />
        </div>
        <div className="mt-8">
        <VscTasklist   className="h-7 w-7" />
        </div>
        <div className="mt-8">
        <FaPeopleRobbery   className="h-7 w-7" />
        </div>
      
        </div>

      <List className={`transition-transform duration-10000 ease-in-out ${sidebarVisible ? '' : 'hidden'}`}>
       
        <Link to="/clientlist">
           <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
            <ListItemPrefix>
                <IoIosPeople  className="h-8 w-8" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Clients
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                Clients List
              </ListItem>
              <Link to="/addclient">
              <ListItem>
                Add Clients
              </ListItem>
              </Link>
            </List>
          </AccordionBody>
           </Accordion>
        </Link>

        <Link to="/task">
          <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
            <ListItemPrefix>
              <FaTasks  className="h-6 w-6" />
            </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal ml-2.5">
                Task
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to="/runningtask">
              <ListItem>
                Running Project
              </ListItem>
              </Link>

              <Link to="/addproject">
              <ListItem>
                Add Project
              </ListItem>
              </Link>
            </List>
          </AccordionBody>
          </Accordion>
        </Link>

        
           <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
            <ListItemPrefix>
             <FaPeopleRoof className="h-6 w-6" />
            </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal ml-3">
              Attendance
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to="/attendencehistory">
              <ListItem>
              Attendance History
              </ListItem>
              </Link>

              <Link to="/attendencereoprt">
              <ListItem>
              Attendance Report
              </ListItem>
              </Link>

            </List>
          </AccordionBody>
           </Accordion>
        
        
        <Accordion
          open={open === 4}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 4}>
            <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">
            <ListItemPrefix>
            <TbReportSearch className="h-7 w-7" />
            </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal ml-2.5">
              Report
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to="/Projectreport">
              <ListItem>
              Project Report
              </ListItem>
              </Link>

              <Link to="/clientreport">
              <ListItem>
               Clients   Report
              </ListItem>
              </Link>
              <Link to="/expencereport">
              <ListItem>
               Expences  Report
              </ListItem>
              </Link>

            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 5}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 5 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 5}>
            <AccordionHeader onClick={() => handleOpen(5)} className="border-b-0 p-3">
            <ListItemPrefix>
              <MdOutlineAccountBalance  className="h-7 w-7" />
            </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal ml-2.5">
              Accounting
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to="/addclientpaymentacc">
              <ListItem>
                 Client Payment
              </ListItem>
              </Link>
              <Link to="/clientpaymentreport">
              <ListItem>
                 Client Payment Report
              </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion>
          <ListItem className="p-0" >
            <AccordionHeader  className="border-b-0 p-3">
            <ListItemPrefix>
            <VscTasklist   className="h-7 w-7" />
            </ListItemPrefix>
            <Link to="/leavemanagment">
              <Typography color="blue-gray" className="mr-auto font-normal ml-2.5">
              Leave Management
              </Typography>
              </Link>
            </AccordionHeader>
          </ListItem>
        </Accordion>

        <Accordion>
          <ListItem className="p-0" >
            <AccordionHeader className="border-b-0 p-3">
            <ListItemPrefix>
            <FaPeopleRobbery   className="h-7 w-7" />
            </ListItemPrefix>
            <Link to="/employeedev">
              <Typography color="blue-gray" className="mr-auto font-normal ml-2.5">
              Employee Developmen
              </Typography>
              </Link>
            </AccordionHeader>
          </ListItem>
        </Accordion>

      </List>
      </div>
    </Card>

      </div>
    </div>
  );
}
