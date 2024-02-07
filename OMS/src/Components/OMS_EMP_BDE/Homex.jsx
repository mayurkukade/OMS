import { useState } from 'react';
import {
    CardBody,
    Input,
    Card,
    Typography,
    RadioButton
} from "@material-tailwind/react";

import React from 'react'

export default function Homex() {

    const [selectedOption, setSelectedOption] = useState('');
    const [formInputs, setFormInputs] = useState({
        description: '',
        startDate: '',
        endDate: '',
        durations: '',
        assignedBy: '',
    });

    const handleCheckboxChange = (option) => {
        setSelectedOption(option);
    };

    const handleInputChange = (name, value) => {
        setFormInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };


    // Process Table and Done Table

    const TABLE_HEAD = ["No.", "Task", "Assigned To", "Assigned Date", "End Date", "Status", ""];

    const TABLE_ROWS = [
        {
            no: "1",
            task: "40 Calls",
            assignedTo: "Sheetal",
            assignedDate: "14/12/23",
            endDate: "15/12/23",
            status: "In Process"
        },
    ];

  return (
    <div>
        <div className='flex flex-col md:flex-row'>
                <div className="md:ml-4">
                    <div className='flex md:flex-row mt-4 ml-2 md:ml-0 gap-2'>
                        <p className="text-xl md:text-2xl lg:text-4xl text-blue-600 font-bold mb-2 ml-2">Welcome, XYZ !!</p>
                        <div className='flex space-x-2 md:ml-[23rem] ml-36'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" viewBox="0 0 31 29" fill="none">
                                <path d="M19.375 20.5417H25.8333L24.0185 18.844C23.7748 18.6159 23.5815 18.3452 23.4496 18.0473C23.3178 17.7494 23.2499 17.43 23.25 17.1076V13.2917C23.2502 11.792 22.7534 10.3292 21.8282 9.10466C20.9029 7.88007 19.5946 6.95391 18.0833 6.45371V6.04167C18.0833 5.40073 17.8112 4.78604 17.3267 4.33283C16.8422 3.87961 16.1851 3.625 15.5 3.625C14.8148 3.625 14.1578 3.87961 13.6733 4.33283C13.1888 4.78604 12.9167 5.40073 12.9167 6.04167V6.45371C9.90707 7.44938 7.74999 10.1355 7.74999 13.2917V17.1088C7.74999 17.7589 7.47357 18.3836 6.98145 18.844L5.16666 20.5417H11.625M19.375 20.5417V21.75C19.375 22.7114 18.9667 23.6334 18.24 24.3133C17.5133 24.9931 16.5277 25.375 15.5 25.375C14.4723 25.375 13.4867 24.9931 12.76 24.3133C12.0332 23.6334 11.625 22.7114 11.625 21.75V20.5417M19.375 20.5417H11.625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.9 15.5C27.9 18.7887 26.5936 21.9426 24.2681 24.2681C21.9427 26.5936 18.7887 27.9 15.5 27.9C12.2113 27.9 9.05733 26.5936 6.73188 24.2681C4.40643 21.9426 3.10001 18.7887 3.10001 15.5C3.10001 12.2113 4.40643 9.0573 6.73188 6.73185C9.05733 4.4064 12.2113 3.09998 15.5 3.09998C18.7887 3.09998 21.9427 4.4064 24.2681 6.73185C26.5936 9.0573 27.9 12.2113 27.9 15.5ZM18.6 10.85C18.6 11.6721 18.2734 12.4606 17.692 13.042C17.1107 13.6234 16.3222 13.95 15.5 13.95C14.6778 13.95 13.8893 13.6234 13.308 13.042C12.7266 12.4606 12.4 11.6721 12.4 10.85C12.4 10.0278 12.7266 9.23931 13.308 8.65794C13.8893 8.07658 14.6778 7.74998 15.5 7.74998C16.3222 7.74998 17.1107 8.07658 17.692 8.65794C18.2734 9.23931 18.6 10.0278 18.6 10.85ZM15.5 17.05C14.016 17.0497 12.5632 17.4754 11.3141 18.2767C10.065 19.0779 9.07222 20.2209 8.45371 21.5698C9.32586 22.5844 10.4071 23.3984 11.6234 23.956C12.8396 24.5135 14.1621 24.8014 15.5 24.8C16.838 24.8014 18.1604 24.5135 19.3766 23.956C20.5929 23.3984 21.6742 22.5844 22.5463 21.5698C21.9278 20.2209 20.935 19.0779 19.6859 18.2767C18.4368 17.4754 16.984 17.0497 15.5 17.05Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                    <div className="col flex-wrap bg-white border border-black md:w-[25rem] lg:w-[45rem] rounded-xl mt-2">
                        {/* <div className="flex items-center ml-2 mt-2">
                            <p className='text-lg md:text-xl lg:text-2xl'>Token ID :</p>
                            <div className='ml-4 md:ml-9'>
                                <div className='flex space-x-2 md:ml-[23rem] ml-36'>
                                    
                                    <RadioButton id="done" label="Done" checked={selectedOption === 'done'} onChange={handleCheckboxChange} />
                                    <RadioButton id="pause" label="Pause" checked={selectedOption === 'pause'} onChange={handleCheckboxChange} />
                                    <RadioButton id="pending" label="Pending" checked={selectedOption === 'pending'} onChange={handleCheckboxChange} />
                                    <RadioButton id="close" label="Close" checked={selectedOption === 'close'} onChange={handleCheckboxChange} />
                                </div>
                            </div>
                        </div> */}
                        <div className="col flex-wrap bg-white border border-black md:w-[25rem] lg:w-[45rem] rounded-xl mt-2">
                            {/* Description input */}
                            <div className="flex ml-2 mt-2">
                                <p className='mt-8 text-lg'>Description :</p>
                                <textarea
                                    name="description"
                                    id="description"
                                    cols="10"
                                    rows="3"
                                    className='ml-5 mt-2 rounded-md border border-black w-[35rem]'
                                    value={formInputs.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                />
                            </div>
                            {/* Start Date input */}
                            <div className='flex'>
                                <p className='text-left text-lg mt-2'>
                                    Start Date :
                                </p>
                                <div className="w-full md:w-[18rem] lg:w-[35rem] ml-6">
                                    <Input
                                        size="lg"
                                        label="Start Date"
                                        type='date'
                                        placeholder="Enter your Start Date"
                                        name='startDate'
                                        value={formInputs.startDate}
                                        onChange={(e) => handleInputChange('startDate', e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* End Date input */}
                            <div className='flex'>
                                <p className='text-left text-lg mb-4 mt-5'>
                                    End Date :
                                </p>
                                <div className="w-full md:w-[18rem] lg:w-[35rem] ml-8 mt-3">
                                    <Input
                                        size="lg"
                                        label="End Date"
                                        type='date'
                                        placeholder="Enter your End Date"
                                        name='endDate'
                                        value={formInputs.endDate}
                                        onChange={(e) => handleInputChange('endDate', e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* Durations input */}
                            <div className='flex'>
                                <p className='text-left text-lg mb-4 mt-3'>
                                    Durations :
                                </p>
                                <div className="w-full md:w-[18rem] lg:w-[35rem] ml-6 mt-1">
                                    <Input
                                        size="lg"
                                        label="Durations"
                                        type='number'
                                        placeholder="Enter your Durations"
                                        name='durations'
                                        value={formInputs.durations}
                                        onChange={(e) => handleInputChange('durations', e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* Assigned By input */}
                            <div className='flex'>
                                <p className='text-left text-lg mb-4 mt-2'>
                                    Assigned By :
                                </p>
                                <div className="w-full md:w-[18rem] lg:w-[35rem] ml-1">
                                    <Input
                                        size="lg"
                                        label="Assigned By"
                                        type='text'
                                        placeholder="Enter Assigned By"
                                        name='assignedBy'
                                        value={formInputs.assignedBy}
                                        onChange={(e) => handleInputChange('assignedBy', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* In Process Table */}

            <div className='mr-32'>
                <Card className="w-full md:w-[25rem] lg:w-[45rem] mt-4">
                    <p className='text-black font-semibold text-xl ml-4 mt-5'>In Process</p>
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
                                                        {status}
                                                    </Typography>
                                                </td>
                                            </tr>
                                        );
                                    },
                                )}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>

                {/* Done Table */}

                <Card className="w-full md:w-[25rem] lg:w-[45rem] mt-4 mb-4">
                    <p className='text-black font-semibold text-xl ml-4 mt-5'>Done</p>
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
                                                        {status}
                                                    </Typography>

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
