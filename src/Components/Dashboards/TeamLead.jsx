import { useState } from 'react';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import HomeDashBoard_TeamLead from './HomeDashBoard_TeamLead';
import AddProject_TeamLead from './AddProject_TeamLead';
import RunningTask_TeamLead from './RunningTask_TeamLead';
import AddTask_TeamLead from './AddTask_TeamLead';
import AddToken_TeamLead from './AddToken_TeamLead';
import CompletedTask_TeamLead from './CompletedTask_TeamLead';
import { CgAdd } from "react-icons/cg";
import { MdGeneratingTokens } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";
import { FaPersonRunning } from "react-icons/fa6";
import { FaDiagramProject } from "react-icons/fa6";

export function TeamLead() {

    // const [open1, setOpen1] = React.useState(0);

    // const handleOpen = (value) => {
    //     setOpen1(open1 === value ? 0 : value);
    // };

    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    // const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);

    function HomeDashBoard_TeamLead1() {
        setOpen1(true);
        setOpen2(false);
        setOpen3(false);
        // setOpen4(false);
        setOpen5(false);
        setOpen6(false);
        setOpen7(false);
    }
    function AddProject_TeamLead1() {
        setOpen1(false);
        setOpen2(true);
        setOpen3(true);
        // setOpen4(false);
        setOpen5(false);
        setOpen6(false);
        setOpen7(false);
    }
    function RunningTask_TeamLead1() {
        setOpen1(false);
        setOpen2(false);
        setOpen3(true);
        // setOpen4(false);
        setOpen5(false);
        setOpen6(false);
        setOpen7(false);
    }
    // function AddTask_TeamLead11() {
    //     setOpen1(false);
    //     setOpen2(false);
    //     setOpen3(false);
    //     setOpen4(true);
    //     setOpen5(false);
    //     setOpen6(false);
    //     setOpen7(false);
    // }
    function AddTask_TeamLead1() {
        setOpen1(false);
        setOpen2(false);
        setOpen3(false);
        // setOpen4(false);
        setOpen5(true);
        setOpen6(false);
        setOpen7(false);
    }
    function AddToken_TeamLead1() {
        setOpen1(false);
        setOpen2(false);
        setOpen3(false);
        // setOpen4(false);
        setOpen5(false);
        setOpen6(true);
        setOpen7(false);
    }
    function CompletedTask_TeamLead1() {
        setOpen1(false);
        setOpen2(false);
        setOpen3(false);
        // setOpen4(false);
        setOpen5(false);
        setOpen6(false);
        setOpen7(true);
    }

    return (
        <div className='flex flex-col md:flex-row'>
            <Card className="ml-8 text-center items-center h-[calc(50vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 mt-14">
                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <MdDashboardCustomize className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                        <p onClick={HomeDashBoard_TeamLead1}>
                            Dashboard
                        </p>
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <FaDiagramProject className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={AddProject_TeamLead1}>
                            Add Project
                        </p>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <FaPersonRunning className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={RunningTask_TeamLead1}>
                            Running Tasks
                        </p>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <CgAdd className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={AddTask_TeamLead1}>
                            Add Tasks
                        </p>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <MdGeneratingTokens className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={AddToken_TeamLead1}>
                            Add Tokens
                        </p>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <MdIncompleteCircle className="h-5 w-5" />
                        </ListItemPrefix>
                        <p onClick={CompletedTask_TeamLead1}>
                            Completed Tasks
                        </p>
                    </ListItem>
                </List>
            </Card>

            <div>
                {open1 && (<HomeDashBoard_TeamLead HomeDashBoard_TeamLead={HomeDashBoard_TeamLead1} />)}
                {open2 && (<AddProject_TeamLead AddProject_TeamLead={AddProject_TeamLead1} />)}
                {open3 && (<RunningTask_TeamLead RunningTask_TeamLead={RunningTask_TeamLead1} />)}
                {open5 && (<AddTask_TeamLead AddTask_TeamLead={AddTask_TeamLead1} />)}
                {open6 && (<AddToken_TeamLead AddToken_TeamLead={AddToken_TeamLead1} />)}
                {open7 && (<CompletedTask_TeamLead CompletedTask_TeamLead={CompletedTask_TeamLead} />)}
            </div>
        </div>
    )
}

