import {
  Input,
  Button
} from "@material-tailwind/react";
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
  width: 350,
  height: 350,
  series: [10000, 15000, 25000],
  options: {
    chart: {
      toolbar: {
        show: true,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#6A5ACD", "#FF4500", "#FF8C00"],
    legend: {
      show: false,
    },
  },
};

const chartConfig2 = {
  type: "pie",
  width: 350,
  height: 350,
  series: [10, 5, 5],
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
    colors: ["#6A5ACD", "#FF4500", "#FF8C00"],
    legend: {
      show: false,
    },
  },
};

const ClientReport = () => {
  return (
    <div>
    <div className='md:ml-64'>
      <div className="md:mx-10 lg:mx-20 xl:mx-32 md:ml-[20rem]">
        <div className='flex md:flex-row md:mt-10 mt-4 md:ml-0 ml-0 gap-2'>
          <div className="md:w-1/6">
            <p className='text-left text-lg mb-4 ml-2'>Total Clients</p>
            <div className='flex gap-6 bg-[#adadad] w-36 h-20 rounded-2xl items-center justify-center ml-2'>
              <p className='text-3xl'>3</p>
            </div>
          </div>
          <div className='flex space-x-5 md:ml-64 ml-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" viewBox="0 0 31 29" fill="none">
              <path d="M19.375 20.5417H25.8333L24.0185 18.844C23.7748 18.6159 23.5815 18.3452 23.4496 18.0473C23.3178 17.7494 23.2499 17.43 23.25 17.1076V13.2917C23.2502 11.792 22.7534 10.3292 21.8282 9.10466C20.9029 7.88007 19.5946 6.95391 18.0833 6.45371V6.04167C18.0833 5.40073 17.8112 4.78604 17.3267 4.33283C16.8422 3.87961 16.1851 3.625 15.5 3.625C14.8148 3.625 14.1578 3.87961 13.6733 4.33283C13.1888 4.78604 12.9167 5.40073 12.9167 6.04167V6.45371C9.90707 7.44938 7.74999 10.1355 7.74999 13.2917V17.1088C7.74999 17.7589 7.47357 18.3836 6.98145 18.844L5.16666 20.5417H11.625M19.375 20.5417V21.75C19.375 22.7114 18.9667 23.6334 18.24 24.3133C17.5133 24.9931 16.5277 25.375 15.5 25.375C14.4723 25.375 13.4867 24.9931 12.76 24.3133C12.0332 23.6334 11.625 22.7114 11.625 21.75V20.5417M19.375 20.5417H11.625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M27.9 15.5C27.9 18.7887 26.5936 21.9426 24.2681 24.2681C21.9427 26.5936 18.7887 27.9 15.5 27.9C12.2113 27.9 9.05733 26.5936 6.73188 24.2681C4.40643 21.9426 3.10001 18.7887 3.10001 15.5C3.10001 12.2113 4.40643 9.0573 6.73188 6.73185C9.05733 4.4064 12.2113 3.09998 15.5 3.09998C18.7887 3.09998 21.9427 4.4064 24.2681 6.73185C26.5936 9.0573 27.9 12.2113 27.9 15.5ZM18.6 10.85C18.6 11.6721 18.2734 12.4606 17.692 13.042C17.1107 13.6234 16.3222 13.95 15.5 13.95C14.6778 13.95 13.8893 13.6234 13.308 13.042C12.7266 12.4606 12.4 11.6721 12.4 10.85C12.4 10.0278 12.7266 9.23931 13.308 8.65794C13.8893 8.07658 14.6778 7.74998 15.5 7.74998C16.3222 7.74998 17.1107 8.07658 17.692 8.65794C18.2734 9.23931 18.6 10.0278 18.6 10.85ZM15.5 17.05C14.016 17.0497 12.5632 17.4754 11.3141 18.2767C10.065 19.0779 9.07222 20.2209 8.45371 21.5698C9.32586 22.5844 10.4071 23.3984 11.6234 23.956C12.8396 24.5135 14.1621 24.8014 15.5 24.8C16.838 24.8014 18.1604 24.5135 19.3766 23.956C20.5929 23.3984 21.6742 22.5844 22.5463 21.5698C21.9278 20.2209 20.935 19.0779 19.6859 18.2767C18.4368 17.4754 16.984 17.0497 15.5 17.05Z" fill="black" />
            </svg>
          </div>
        </div>
        <div>
          <p className="text-3xl font-bold ml-2 mt-10">Client Report</p>
        </div>
        <div>
          <p className='text-left text-lg mb-4 mt-4 ml-3'>
            Client Name :
          </p>
          <div className="w-full md:w-[18rem] lg:w-[32rem] md:ml-3">
            <Input size="lg" label="Client Name" placeholder="Enter your Client name" name='clientName' />
          </div>
          <div className="mt-4 space-x-4 md:ml-0 ml-14">
            <Button color="green" className="w-32 h-12 rounded-full ml-3">See Report</Button>
          </div>
        </div>
      </div>
      </div>
      <div className="mt-8 space-y-4 md:ml-64">
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="w-max rounded-lg bg-gray-900 p-5 text-white md:ml-36">
              <Square3Stack3DIcon className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray">
                Client Payment Report
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="max-w-sm font-normal"
              >
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="mt-4 grid place-items-center px-2 mr-96">
            <Chart {...chartConfig} />
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="w-max rounded-lg bg-gray-900 p-5 text-white md:ml-36">
              <Square3Stack3DIcon className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray">
                Client Project Report
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="max-w-sm font-normal"
              >
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="mt-4 grid place-items-center px-2 mr-96">
            <Chart {...chartConfig2} />
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="w-max rounded-lg bg-gray-900 p-5 text-white md:ml-36">
              <Square3Stack3DIcon className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray">
                Client Project Notes / Assignment
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="max-w-sm font-normal"
              >
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="mt-4 grid place-items-center px-2 mr-96">
            {/* <Chart {...chartConfig2} /> */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default ClientReport