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
  Progress,
  AccordionBody,
  Card,
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

export function DevDash() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const TABLE_HEAD = ["Task", "Assigned On", "Deadline", ""];

  const TABLE_ROWS = [
    {
      task: "Front End Development",
      aDate: "23/04/18",
      dDate: "23/04/18",
    },
    {
      task: "Front End Development",
      aDate: "23/04/18",
      dDate: "23/04/18",
    },
    {
      task: "Front End Development",
      aDate: "23/04/18",
      dDate: "23/04/18",
    },
    {
      task: "Front End Development",
      aDate: "23/04/18",
      dDate: "23/04/18",
    },
    {
      task: "Front End Development",
      aDate: "23/04/18",
      dDate: "23/04/18",
    },
  ];

  return (
    <>
      <div class="grid grid-flow-col auto-cols-max ">
        <div>
          <CommonNavSide />
        </div>
        <div className="mt-[2rem] ml-[2rem]">
          {" "}
          <div className="contain justify-center  ">
            <h1 className="text-center mb-[2rem] font-bold text-2xl text-amber-500">Welcome User</h1>
            <table className="h-[10rem] w-[40rem] border-collapse border border-black p-4">
              <thead>
                <tr>
                  <th className="border-black text-black ">Running task</th>
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
          <div className="contain  mt-[2rem] ">
            <Accordion
              open={open === 1}
              className="mb-2 rounded-lg border border-blue-gray-100 px-4"
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={`border-b-0 justify-center transition-colors ${
                  open === 1 ? "text-black hover:text-black " : ""
                }`}
              >
                Pending Task
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                <div className="contain flex justify-center mt-10">
                  <Card className="h-full w-full overflow-scroll">
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
                        {TABLE_ROWS.map(({ task, aDate, dDate }, index) => {
                          const isLast = index === TABLE_ROWS.length - 1;
                          const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";

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
                                  {aDate}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {dDate}
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
                                  Edit
                                </Typography>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Card>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              className="mb-2 rounded-lg border border-blue-gray-100 px-4"
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className={`border-b-0 justify-center transition-colors ${
                  open === 2 ? "text-black hover:!text-black" : ""
                }`}
              >
                R7 Work Deadline
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                <div className="contain flex justify-center mt-10">
                  <Card className="h-full w-full overflow-scroll">
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
                        {TABLE_ROWS.map(({ task, aDate, dDate }, index) => {
                          const isLast = index === TABLE_ROWS.length - 1;
                          const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";

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
                                  {aDate}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {dDate}
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
                                  Edit
                                </Typography>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Card>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              className="rounded-lg border border-blue-gray-100 px-4"
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className={`border-b-0 justify-center transition-colors ${ 
                  open === 3 ? "text-black hover:!text-black" : ""
                }`}
              >
                R30 Work Deadline
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                <div className="contain flex justify-center mt-10">
                  <Card className="h-full w-full overflow-scroll">
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
                        {TABLE_ROWS.map(({ task, aDate, dDate }, index) => {
                          const isLast = index === TABLE_ROWS.length - 1;
                          const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";

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
                                  {aDate}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {dDate}
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
                                  Edit
                                </Typography>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Card>
                </div>
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevDash;
