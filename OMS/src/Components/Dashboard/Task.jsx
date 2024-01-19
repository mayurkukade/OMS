import { Button } from "@material-tailwind/react";
import React from "react";
import { BsFiletypeXls } from "react-icons/bs";
import { FaFilePdf, FaRegCopy } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { TiArrowMinimise } from "react-icons/ti";
import { Card, Typography } from "@material-tailwind/react";
import {TABLE_HEAD,TABLE_ROWS} from "../Data/TaskData"

export default function Task() {
  return (
    <div className="flex ">
      <div>
        {/* Upeer part */}
        <div className="flex  md:ml-[20rem]">
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

        <div className="md:ml-48 mt-5 border border-gray-400 rounded-lg">
          <div className="flex px-2">
            <p className="font-semibold">Running Task duration</p>

            <div className="md:ml-[23rem] ml-[7rem]">
              <MdCancel className="h-5 w-5" />
            </div>

            <div>
              <TiArrowMinimise className="h-5 w-5 ml-2" />
            </div>
          </div>
          <hr />
          <div className="mt-5 flex justify-center">
            <p className="text-3xl font-medium">05 Days</p>
          </div>
        </div>

        <div className="border border-gray-400 rounded-lg md:ml-48 mt-5 ">
          <div className="flex">
            <div className="px-2 py-2">
              <p className="font-semibold text-xl">Running Task</p>
            </div>
            <div className="md:ml-[25rem] ml-36 mt-3">
              <MdCancel className="h-5 w-5" />
            </div>

            <div className="mt-3">
              <TiArrowMinimise className="h-5 w-5 ml-2" />
            </div>
          </div>

          <hr />
          <div className="flex mt-5 px-2 py-2">
            <div className=" ">
              <Button className="bg-blue-400 text-black">Add Task</Button>
            </div>

            <div className="mt-2 ml-10">
              <FaFilePdf className="w-6 h-6" />
            </div>

            <div className="mt-2 ml-10">
              <BsFiletypeXls className="w-6 h-6" />
            </div>
          </div>
{/* Table start */}

<Card className="h-full md:w-[37rem] w-[20rem] m-2 overflow-auto">
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
          {TABLE_ROWS.map(({ task, assignedTo, duedate,description,status,action }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={task}>
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
                    {duedate}
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
                    {description}
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
                    {status}
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
                    {action}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>

        </div>
      </div>
    </div>
  );
}
