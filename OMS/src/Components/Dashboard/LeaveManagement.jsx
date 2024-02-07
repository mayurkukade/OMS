import React from "react";
import { FaFilePdf } from "react-icons/fa6";
import { BsFiletypeXlsx } from "react-icons/bs";
import { Input } from "@material-tailwind/react";
import { TABLE_HEAD, TABLE_ROWS } from "../Data/Leavemangdata";
import { Card, Typography } from "@material-tailwind/react";

export default function LeaveManagement() {
  return (
    <div>
      <div className="ml-20 mt-20">
        <div className=" ">
          <p className="text-3xl font-semibold">Leaves</p>
        </div>

        <div className="border border-gray-500 mt-5  rounded-md w-[50rem]">
          <div className="flex p-2">
            <FaFilePdf className="w-5 h-5 mt-2" />
            <BsFiletypeXlsx className="w-5 h-5 ml-5 mt-2" />

            <div className="ml-5">
              <Input type="date" className="" />
            </div>
          </div>

          {/* Table start  */}

          <div>
            <Card className="h-full w-full p-2 ">
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
                  {TABLE_ROWS.map(
                    (
                      {
                        no,
                        name,
                        leaveon,
                        leavetill,
                        reason,
                        documentsubmitted,
                        action,
                      },
                      index
                    ) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={no}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {no}
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
                              {leaveon}
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
                              {leavetill}
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
                              {reason}
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
                              {documentsubmitted}
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
                    }
                  )}
                </tbody>
              </table>
            </Card>
          </div>

          {/* Table end  */}
        </div>
      </div>
    </div>
  );
}
