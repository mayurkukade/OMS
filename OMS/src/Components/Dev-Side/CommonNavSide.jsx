import React, { useState, useEffect } from 'react';
import { MdDashboard } from 'react-icons/md';
import { FaTasks } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Card,
  IconButton,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export function CommonNavSide() {
  const [open, setOpen] = useState(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarVisible(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {isSidebarVisible && (
        <div className="md:flex p-2">
          <Card className="h-[calc(100vh-2rem)] max-w-[20rem] p-4 shadow-2xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
              <Typography variant="h5" color="blue-gray">
                <h1 className="text-orange-500 font-bold">Operational Management System</h1>
              </Typography>
            </div>
            <List>
              <ListItem>
                <ListItemPrefix>
                  <MdDashboard className="h-5 w-5" />
                </ListItemPrefix>
                <Link to="/dashboard">Dashboard</Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FaTasks className="h-5 w-5" />
                </ListItemPrefix>
                <Link to="/ongoingtask">Ongoing Task</Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <SlCalender className="h-5 w-5" />
                </ListItemPrefix>
                <Link to="/request">Leave Request</Link>
              </ListItem>
            </List>
          </Card>
        </div>
      )}
      <div className="fixed top-0 right-0 m-2 flex items-center">
        <IconButton variant="text" size="lg" onClick={toggleSidebar}>
          {isSidebarVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </IconButton>
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
    </>
  );
}

export default CommonNavSide;
