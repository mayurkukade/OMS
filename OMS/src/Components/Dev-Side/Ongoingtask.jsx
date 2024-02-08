// MyComponent.js
import React from "react";

import {
  Typography,
  Input,
  Progress,
  Checkbox,
  Textarea,
} from "@material-tailwind/react";

import CommonNavSide from "./CommonNavSide";

export function Ongoingtask() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <div className="grid grid-flow-col auto-cols-max  ">
        <div>
          <CommonNavSide />
        </div>
        <div>
          <div className="mx-4">
            <h1 className="text-center mb-4 font-bold text-2xl text-amber-500 mt-[2rem]">
              Welcome User
            </h1>
            <div className="table w-full p-4 border rounded-xl">
              <table className="w-full p-4">
                <thead>
                  <tr>
                    <th className="text-black">Running task</th>
                  </tr>
                </thead>
                <tbody className="text-black">
                  <tr className="flex items-center">
                    <td className="p-4 flex items-center">
                      <div className="w-full">
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <Typography
                            color="blue-gray"
                            variant="h6"
                            className="w-full md:w-[40rem]"
                          >
                            Website Development
                          </Typography>
                          <Typography color="blue-gray" variant="h6">
                            Completed
                          </Typography>
                        </div>
                        <Progress value={50} />
                      </div>
                    </td>
                  </tr>

                  <tr className="flex items-center">
                    <td className="p-4 flex items-center">
                      <div className="w-full">
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <Typography
                            color="blue-gray"
                            variant="h6"
                            className="w-full md:w-[40rem]"
                          >
                            Software Development
                          </Typography>
                          <Typography color="blue-gray" variant="h6">
                            Completed
                          </Typography>
                        </div>
                        <Progress value={50} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className=" flex text-start justify-start mt-[4rem] text-black font-extrabold m-2">
            <h1>Running Tasks</h1>
          </div>
          <div className="index bg-blue-400 font-bold text-white w-[2rem] ml-[1.5rem] h-[2rem] border rounded-[20px]  p-[20px] flex items-center justify-center">
            1
          </div>

          <div className="container">
            <div className="grid grid-cols-3 gap-4 justify-center p-4 m-2 ">
              <div className="text-start">Token Name</div>
              <div className="col-span-1">
                <Input />
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <Checkbox />
                <span>Start</span>
              </div>

              <div className="text-start">Due Date</div>
              <div className="col-span-1">
                <Input />
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <Checkbox />
                <span>Submit</span>
              </div>

              <div className="text-start">Project Name</div>
              <div className="col-span-1">
                <Input />
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <Checkbox />
                <span>Pending/Pause</span>
              </div>

              <div className="text-start">Description</div>
              <div className="col-span-2">
                <Textarea />
              </div>

              <div className="text-start">Comments</div>
              <div className="col-span-2">
                <Textarea />
              </div>

              <div className="col-span-3 p-2">
                <div className="flex button justify-end place-items-end">
                  <button className="bg-green-500 p-2 rounded-lg hover:bg-blue-300 text-white">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-black w-full my-4"></div>

          <div className="index bg-blue-400 text-white font-bold w-[2rem] ml-[1.5rem] h-[2rem] border rounded-[20px]  p-[20px] flex items-center justify-center">
            2
          </div>

          <div className="container mt-2">
            <div className="grid grid-cols-3 gap-4 justify-center p-4 m-2 ">
              <div className="text-start">Token Name</div>
              <div className="col-span-1">
                <Input />
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <Checkbox />
                <span>Start</span>
              </div>

              <div className="text-start">Due Date</div>
              <div className="col-span-1">
                <Input />
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <Checkbox />
                <span>Submit</span>
              </div>

              <div className="text-start">Project Name</div>
              <div className="col-span-1">
                <Input />
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <Checkbox />
                <span>Pending/Pause</span>
              </div>

              <div className="text-start">Description</div>
              <div className="col-span-2">
                <Textarea />
              </div>

              <div className="text-start">Comments</div>
              <div className="col-span-2">
                <Textarea />
              </div>

              <div className="col-span-3 p-2">
                <div className="flex justify-end place-items-end ">
                  <button className="bg-red-300 p-2 rounded-lg hover:bg-blue-300 text-white mr-2">
                    Cancel
                  </button>
                  <button className="bg-green-500 p-2 rounded-lg hover:bg-blue-300 text-white">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ongoingtask;
