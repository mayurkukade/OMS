import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";


const chartConfig = {
  type: "pie",
  width: 280,
  height: 280,
  series: [44, 55, 13, 43, 22],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
    legend: {
      show: false,
    },
  },
};
const chartConfig2 = {
  type: "pie",
  width: 280,
  height: 280,
  series: [100, 55, 44, 43, 82],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
    legend: {
      show: false,
    },
  },
};

const ProjectReport = () => {
  return (
    <>
      <div className="flex flex-col items-end">
        <div className="w-full lg:w-3/5">
          <div className="flex justify-end p-3 gap-3">
            <div>
              <img className="w-8" src="./img/BellOutline.svg" alt="Bell" />
            </div>
            <div>
              <img className="w-8" src="./img/UserCircle.svg" alt="Profile" />
            </div>
          </div>
          <div className="flex flex-col justify-center align-middle items-center lg:flex lg:flex-row lg:justify-normal lg:gap-4 lg:pl-6">
            <div>
              <div className="text-xl font-normal break-words">
                Running Projects
              </div>
              <div className="inline-flex pl-6 py-5 pr-8 gap-9 bg-[#F2F1FE] border-[1px] border-[#D9D9D9] rounded-xl align-middle mt-2">
                <img className="w-7" src="./img/Document.svg" alt="Document" />
                <div className="text-2xl font-medium break-words">3</div>
              </div>
            </div>
            <div>
              <div className="text-xl font-normal break-words mt-5 lg:mt-0">
                Active Employees
              </div>
              <div className="inline-flex pl-6 py-5 pr-8 gap-9 bg-[#F2F1FE] border-[1px] border-[#D9D9D9] rounded-xl align-middle mt-2">
                <img className="w-7" src="./img/UserGroup.svg" alt="Document" />
                <div className="text-2xl font-medium break-words">5</div>
              </div>
            </div>
          </div>
        </div>
        <Card className="w-3/5">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
              <Square3Stack3DIcon className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray">
                Client Payment Report
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="mt-4 grid place-items-center px-2">
            <Chart {...chartConfig} />
          </CardBody>
        </Card>
      </div>
      <div className="flex justify-end">
        <Card className="w-3/5">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
              <Square3Stack3DIcon className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray">
                Client Payment Report
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="mt-4 grid place-items-center px-2">
            <Chart {...chartConfig2} />
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default ProjectReport