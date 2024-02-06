import { FaRegCopy } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { Progress } from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";

export default function HomeDashBoard_TeamLead() {

    const TABLE_HEAD1 = ["Task", "Assigned To", "Assinged On", "Deadline"];
 
    const TABLE_ROWS1 = [
  {
    Task: "Dashboard",
    AssignedTo: "XYZ",
    AssingedOn: "23/04/18",
    Deadline : "15/10/2024",
  },
  {
    Task: "Home page",
    AssignedTo: "ABC",
    AssingedOn: "23/04/18",
    Deadline : "15/10/2024",
  },
];
const TABLE_HEAD2 = ["Task", "Assigned To"];
 
 const TABLE_ROWS2 = [
  {
    Task: "API integration",
    AssignedTo: "XYZ",

  },
  {
    Task: "102 Calls",
    AssignedTo: "ABC",

  },
 

];
  return (
    <div className="flex mt-5 md:ml-10">
      <div>
        {/* Upeer part */}
        <div className="flex  md:ml-36">
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
        <div className="mt-20 md:ml-28">
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

        {/* middle part  */}
        <div className="mt-20 md:ml-28">
          <p className="text-xl font-semibold">Work Deadlines :- </p>

          <div className="mt-5">
            {/* Table start */}
            <Card className="h-full md:w-full w-[22rem] overflow-x-auto ">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD1.map((head) => (
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
                  {TABLE_ROWS1.map(
                    ({ Task, AssignedTo, AssingedOn, Deadline }, index) => {
                      const isLast = index === TABLE_ROWS1.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={Task}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {Task}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {AssignedTo}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {AssingedOn}
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
                              {Deadline}
                            </Typography>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </Card>
            {/* Table end */}
          </div>
        </div>
        {/* middle part end */}

        {/* lower part */}

        <div className="mt-20 md:ml-28">
          <p className="text-xl font-semibold">Pending Work :- </p>

          <div className="mt-5">
            {/* Table start */}
            <Card className="h-full md:w-full w-[22rem] overflow-x-auto">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD2.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-100 p-4"
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
                    ({ Task, AssignedTo}, index) => {
                      const isLast = index === TABLE_ROWS2.length - 1;
                      const classes = isLast
                        ? "p-4 w-[5rem]"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={Task}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {Task}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {AssignedTo}
                            </Typography>
                          </td>
                         
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </Card>
            {/* Table end */}
          </div>

        </div>
      </div>
    </div>
  );
}