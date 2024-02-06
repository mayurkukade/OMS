
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


export default function Sidenavbar() {
    const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div>
      <div className=" mt-5">
        
      <div className="flex">

      <List className="w-20" >
      <Link to="/">
        <div >
          Dashboard
        </div>
        </Link>
       
        <Link to="/clientlist">
           <Accordion
          open={open === 1}
          className="w-28"
        >
          <ListItem className="p-0"  selected={open === 1}>
            <AccordionHeader className="border-b-0 p-3" onClick={() => handleOpen(1)} >
            <ListItemPrefix>
                <IoIosPeople  className="h-8 w-8" />
              </ListItemPrefix>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1" >
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
          className="w-28"
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
            <ListItemPrefix>
              <FaTasks  className="h-6 w-6" />
            </ListItemPrefix>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to="/runningtask">
              <ListItem>
                Running task
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
          className="w-28"
        >
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
            <ListItemPrefix>
             <FaPeopleRoof className="h-6 w-6" />
            </ListItemPrefix>
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
          open={open === 4} className="w-28"
        >
          <ListItem className="p-0" selected={open === 4}>
            <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">
            <ListItemPrefix>
            <TbReportSearch className="h-7 w-7" />
            </ListItemPrefix>
             
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
          open={open === 5} className="w-28"
        >
          <ListItem className="p-0" selected={open === 5}>
            <AccordionHeader onClick={() => handleOpen(5)} className="border-b-0 p-3">
            <ListItemPrefix>
              <MdOutlineAccountBalance  className="h-7 w-7" />
            </ListItemPrefix>
           
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

        <Accordion className="w-28">
          <ListItem className="p-0" >
            <AccordionHeader  className="border-b-0 p-3">
            <ListItemPrefix>
            <VscTasklist   className="h-7 w-7" />
            </ListItemPrefix>
             
            </AccordionHeader>
          </ListItem>
        </Accordion>

        <Accordion className="w-28">
          <ListItem className="p-0" >
            <AccordionHeader className="border-b-0 p-3">
            <ListItemPrefix>
            <FaPeopleRobbery   className="h-7 w-7" />
            </ListItemPrefix>
              
            </AccordionHeader>
          </ListItem>
        </Accordion>

      </List>
      </div>
    

      </div>
    </div>
  )
}

