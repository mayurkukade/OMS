import React from 'react'
import {  FaRegCopy } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { Progress } from "@material-tailwind/react";
import { Card, Typography, Button } from "@material-tailwind/react";
import {TABLE_HEAD, TABLE_ROWS} from "../Data/ClientlistData";
import { FaFilePdf } from "react-icons/fa6";
import { BsFiletypeXls } from "react-icons/bs";

export default function RunningTask() {
  return (
    <div className='flex'>
      <div>
         {/* Upeer part */}
         <div className="flex  md:ml-[15rem]">
          <div className="border border-gray-800 rounded-lg py-3 px-5">
            <p>Running project</p>
            <div className="flex">
              <div>
                <FaRegCopy className="h-8 w-8" />
              </div>
              <div className="ml-14">
                <p className="text-3xl">3</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg py-3 px-3 ml-10">
            <p>Active Employees</p>
            <div className="flex">
              <div>
                <IoIosPeople className="h-8 w-8" />
              </div>
              <div className="ml-14">
                <p className="text-3xl">3</p>
              </div>
            </div>
          </div>
        </div>
        {/* Upeer part  end*/}

         {/* upper lower part */}
         <div className="mt-20 md:ml-48">
          <p className="text-xl font-semibold">Running Project :- </p>
          <div className="border border-gray-500 py-5 px-6 rounded-lg mt-5 md:w-[30rem] w-[22rem]">
            <div>
              <p>Website development</p>
              <Progress value={80} label="Completed" color="green" />
            </div>

            <div className="mt-5">
              <p>Software development</p>
              <Progress value={50} label="in Pogress" color="blue" />
            </div>
          </div>
        </div>
        {/* upper lower part end */}

        <div className='mt-10 md:ml-48'>
            <p className='text-semibold text-3xl'>Client List :-</p>
         </div>

          <div className='flex mt-5 md:ml-28'>
         <div className=' md:ml-[5rem]'>
            <Button className='bg-blue-400 text-black'>Add Project</Button>
         </div>

         <div className='mt-2 ml-10'>
           <FaFilePdf className='w-6 h-6' /> 
         </div>

         <div className='mt-2 ml-10'>
         <BsFiletypeXls className='w-6 h-6' /> 
         </div>

         </div>

         {/* Table start */}
         <Card className=" md:w-[56rem] w-[24rem] overflow-auto mt-5 md:ml-36">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
          {TABLE_ROWS.map(({Profile, name, Number, Email,Company,Address,ServiceProduct,Status,Action }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={Profile}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Profile}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Number}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {Email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {Company}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {Address}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {ServiceProduct}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {Status}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {Action}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
         </Card>
        {/* Table end */}

      </div>
    </div>
  )
}
