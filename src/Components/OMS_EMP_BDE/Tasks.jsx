// import { useState } from 'react';
import { PencilIcon } from "@heroicons/react/24/solid";
import {
    Card,
    Typography,
    CardBody,
    IconButton,
    Tooltip,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    InboxIcon,
} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

function Tasks() {

    const TABLE_HEAD = ["No.", "Task", "Assigned To", "Assigned Date", "End Date", "Messages", "Calls", "Stauts", "Action", ""];

    const TABLE_ROWS = [
        {
            no: "1",
            task: "Calls/Messages",
            assignedTo: "XYZ",
            assignedDate: "14/12/23",
            endDate: "15/12/23",
            messages: "150",
            calls: "40",
            status: "Completed",
            action: ""
        },
    ];

    const TABLE_HEAD2 = ["No.", "Total Replies", "Total Calls Attend", "Date", "Stauts", "Action", ""];

    const TABLE_ROWS2 = [
        {
            no: "1",
            totalReplies: "50",
            totalCallsattend: "34",
            date: "14/12/23",
            status: "Completed",
            action: ""
        },
    ];

    const TABLE_HEAD3 = ["No.", "Task", "Assigned To", "Assigned Date", "End Date", "Stauts", "Action", ""];

    const TABLE_ROWS3 = [
        {
            no: "1",
            task: "40 Calls",
            assignedTo: "XYZ",
            assignedDate: "14/12/23",
            endDate: "15/12/23",
            status: "In Progress",
            action: ""
        },
    ];

    return (
        <div className='flex flex-col md:flex-row'>
            <Card className="h-[calc(30vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 ">
                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Link to="/registerHere">
                            Home
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Link to="/tasks">
                            <p>Tasks</p>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Link to="/requests">
                            <p>Requests</p>
                        </Link>
                    </ListItem>
                </List>
            </Card>

            <div className='mr-32'>

                {/* Total Calls/Messages */}

                <Card className="w-full md:w-[25rem] lg:w-[55.6rem] mt-4">
                    <p className='text-black font-semibold text-xl ml-4 mt-5'>Total Calls/Messages</p>
                    <CardBody className=" px-0">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {TABLE_ROWS.map(
                                    (
                                        {
                                            no,
                                            task,
                                            assignedTo,
                                            assignedDate,
                                            endDate,
                                            messages,
                                            calls,
                                            status,

                                        },
                                        index,
                                    ) => {
                                        const isLast = index === TABLE_ROWS.length - 1;
                                        const classes = isLast
                                            ? "p-4"
                                            : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={no}>
                                                <td className={classes}>
                                                    <div className="flex items-center gap-3">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {no}
                                                        </Typography>
                                                    </div>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {task}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {assignedTo}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {assignedDate}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>

                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal capitalize"
                                                    >
                                                        {endDate}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {messages}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {calls}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {status}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <div className="flex">
                                                        <Tooltip content="Edit User">
                                                            <IconButton variant="text">
                                                                <PencilIcon className="h-4 w-4" />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-2" width="18" height="20" viewBox="0 0 13 15" fill="none">
                                                            <path d="M10.875 4.375L10.3331 11.9638C10.3107 12.2791 10.1696 12.5743 9.9382 12.7897C9.70683 13.0052 9.40241 13.125 9.08625 13.125H3.91375C3.59759 13.125 3.29317 13.0052 3.0618 12.7897C2.83044 12.5743 2.68932 12.2791 2.66688 11.9638L2.125 4.375M5.25 6.875V10.625M7.75 6.875V10.625M8.375 4.375V2.5C8.375 2.33424 8.30915 2.17527 8.19194 2.05806C8.07473 1.94085 7.91576 1.875 7.75 1.875H5.25C5.08424 1.875 4.92527 1.94085 4.80806 2.05806C4.69085 2.17527 4.625 2.33424 4.625 2.5V4.375M1.5 4.375H11.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    },
                                )}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>

                {/* Total Replies */}

                <Card className="w-full md:w-[25rem] lg:w-[45rem] mt-4">
                    <p className='text-black font-semibold text-xl ml-4 mt-5'>Total Replies</p>
                    <CardBody className=" px-0">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD2.map((head) => (
                                        <th
                                            key={head}
                                            className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {TABLE_ROWS2.map(
                                    (
                                        {
                                            no,
                                            totalReplies,
                                            totalCallsattend,
                                            date,
                                            status,

                                        },
                                        index,
                                    ) => {
                                        const isLast = index === TABLE_ROWS2.length - 1;
                                        const classes = isLast
                                            ? "p-4"
                                            : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={no}>
                                                <td className={classes}>
                                                    <div className="flex items-center gap-3">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {no}
                                                        </Typography>
                                                    </div>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {totalReplies}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {totalCallsattend}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {date}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>

                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal capitalize"
                                                    >
                                                        {status}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <div className="flex">
                                                        <Tooltip content="Edit User">
                                                            <IconButton variant="text">
                                                                <PencilIcon className="h-4 w-4" />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-2" width="18" height="20" viewBox="0 0 13 15" fill="none">
                                                            <path d="M10.875 4.375L10.3331 11.9638C10.3107 12.2791 10.1696 12.5743 9.9382 12.7897C9.70683 13.0052 9.40241 13.125 9.08625 13.125H3.91375C3.59759 13.125 3.29317 13.0052 3.0618 12.7897C2.83044 12.5743 2.68932 12.2791 2.66688 11.9638L2.125 4.375M5.25 6.875V10.625M7.75 6.875V10.625M8.375 4.375V2.5C8.375 2.33424 8.30915 2.17527 8.19194 2.05806C8.07473 1.94085 7.91576 1.875 7.75 1.875H5.25C5.08424 1.875 4.92527 1.94085 4.80806 2.05806C4.69085 2.17527 4.625 2.33424 4.625 2.5V4.375M1.5 4.375H11.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    },
                                )}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>

                {/* Total People Consulted */}

                <Card className="w-full md:w-[25rem] lg:w-[55.6rem] mt-4">
                    <p className='text-black font-semibold text-xl ml-4 mt-5'>Total People Consulted</p>
                    <CardBody className=" px-0">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD3.map((head) => (
                                        <th
                                            key={head}
                                            className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {TABLE_ROWS3.map(
                                    (
                                        {
                                            no,
                                            task,
                                            assignedTo,
                                            assignedDate,
                                            endDate,
                                            status,

                                        },
                                        index,
                                    ) => {
                                        const isLast = index === TABLE_ROWS3.length - 1;
                                        const classes = isLast
                                            ? "p-4"
                                            : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={no}>
                                                <td className={classes}>
                                                    <div className="flex items-center gap-3">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {no}
                                                        </Typography>
                                                    </div>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {task}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {assignedTo}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {assignedDate}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>

                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal capitalize"
                                                    >
                                                        {endDate}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {status}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <div className="flex">
                                                        <Tooltip content="Edit User">
                                                            <IconButton variant="text">
                                                                <PencilIcon className="h-4 w-4" />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-2" width="18" height="20" viewBox="0 0 13 15" fill="none">
                                                            <path d="M10.875 4.375L10.3331 11.9638C10.3107 12.2791 10.1696 12.5743 9.9382 12.7897C9.70683 13.0052 9.40241 13.125 9.08625 13.125H3.91375C3.59759 13.125 3.29317 13.0052 3.0618 12.7897C2.83044 12.5743 2.68932 12.2791 2.66688 11.9638L2.125 4.375M5.25 6.875V10.625M7.75 6.875V10.625M8.375 4.375V2.5C8.375 2.33424 8.30915 2.17527 8.19194 2.05806C8.07473 1.94085 7.91576 1.875 7.75 1.875H5.25C5.08424 1.875 4.92527 1.94085 4.80806 2.05806C4.69085 2.17527 4.625 2.33424 4.625 2.5V4.375M1.5 4.375H11.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    },
                                )}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Tasks
