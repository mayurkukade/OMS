// MyComponent.js
import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  Alert,
  Input,
  Drawer,
  Card,
  Progress,
  Checkbox,
  Textarea,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
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

<div class="grid grid-flow-col auto-cols-max  ">
  <div> <CommonNavSide/></div>
  <div>  
    <div className="contain flex justify-center mt-[4rem]  ">
    <table className="h-[10rem] w-[40rem] border-collapse border border-black p-4">
              <thead>
                <tr>
                  <th className="border-black text-black">Running task</th>
                </tr>
              </thead>

              <tbody className="text-black">
                <tr className="border-black flex items-center">
                  <td className="border-black p-[20px] flex items-center">
                    <div>
                      <h1>Website Development</h1>
                      <div className="w-full">
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <Typography
                            color="blue-gray"
                            variant="h6"
                            className="w-[40rem]"
                          >
                            Completed
                          </Typography>
                          <Typography color="blue-gray" variant="h6">
                            50%
                          </Typography>
                        </div>
                        <Progress value={50} />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className="border-black flex items-center">
                  <td className="border-black p-[20px] flex items-center">
                    <div>
                      <h1>Software Development</h1>
                      <div className="w-full">
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <Typography
                            color="blue-gray"
                            variant="h6"
                            className="w-[40rem]"
                          >
                            Completed
                          </Typography>
                          <Typography color="blue-gray" variant="h6">
                            50%
                          </Typography>
                        </div>
                        <Progress value={50} />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
      <div className="class flex text-center justify-center mt-[4rem] text-black">
        <h1>Running Tasks</h1>
      </div>
      <div className="container ">
        <div class="grid grid-cols-3 gap-2 place-items-center mt-4 justify-center text-center">
          <div class="text-start w-1/4  ">Token Id</div>
          <div class="w-1/2">
            <Input />
          </div>
          <div class="flex place-items-center">
            <Checkbox />
            Start
          </div>

          <div class="text-start w-1/4">Due Date</div>
          <div class="w-1/2">
            <Input  />
          </div>
          <div class="flex place-items-center">
            <Checkbox />
            Submit
          </div>

          <div class="text-start w-1/4">Project Name</div>
          <div class="w-1/2">
            <Input  />
          </div>
          <div class="flex place-items-center">
            <Checkbox />
            Pending/Pause
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-2">
        <div className="name text-center">Description</div>
        <div className="description flex justify-center ml-[6.5rem]">
          <Textarea className="col-span-2 " />
        </div><br></br>
      </div>
      <div className="grid grid-cols-3 mt-2">
        <div className="name text-center ]">Comments</div>
        <div className="Comments flex justify-center ml-[6.5rem]">
          <Textarea className="col-span-2 " />
        </div><br></br>
      </div>
      <div className=" flex button justify-center place-items-center mt-2 ">
          <button class="bg-green-500 p-2 rounded-lg hover:bg-blue-300 text-white">
            Save changes
          </button>
        </div>

<div className=" p-4 mt-[2rem]">
      <div className="container mt-[2rem]">
        <div class="grid grid-cols-3 gap-2 place-items-center mt-4 justify-center">
          <div class="text-start w-1/4  ">Token Id</div>
          <div class="w-1/2">
            <Input  />
          </div>
          <div class="flex place-items-center">
            <Checkbox />
            Start
          </div>

          <div class="text-start w-1/4">Due Date</div>
          <div class="w-1/2">
            <Input  />
          </div>
          <div class="flex place-items-center">
            <Checkbox />
            Submit
          </div>

          <div class="text-start w-1/4">Project Name</div>
          <div class="w-1/2">
            <Input  />
          </div>
          <div class="flex place-items-center">
            <Checkbox />
            Pending/Pause
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-2 ">
        <div className="name text-center ">Description</div>
        <div className="description  ">
          <Textarea className="col-span-2 "  />
        </div>
      </div>
     

      <div className=" flex button justify-center place-items-center mt-2 space-x-2">
          <button class="bg-blue-500 p-2 rounded-lg hover:bg-red-300 text-white">
          Cancel
          </button>
          <button class="bg-green-500 p-2 rounded-lg hover:bg-blue-300 text-white">
            Save changes
          </button>
        </div>
        </div></div>

</div>


   

    
    </>
  );
}

export default Ongoingtask;
