import { PencilIcon } from "@heroicons/react/24/solid";
import {
    Card,
    Typography,
    CardBody,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";

import pdf from "../Images/pdf.svg";
import csv from "../Images/csv.svg";
import xls from "../Images/xls.svg";

function AttendenceHistory() {

    const TABLE_HEAD = ["Name", "Date", "IN Time", "Out Time", "Hours", "Actions", ""];

    const TABLE_ROWS = [
        {
            name: "XYZ",
            date: "12/12/23",
            inTime: "9.30",
            outTime: "6.30",
            hours: "9 hrs",
        },
        {
            name: "XYZ",
            date: "12/12/23",
            inTime: "9.30",
            outTime: "6.30",
            hours: "9 hrs",
        },
    ];

    return (
        <div className="md:ml-64">
            <div className="md:mx-10 lg:mx-20 xl:mx-32">
                <div className='flex md:flex-row mt-10 md:ml-0 ml-36 gap-2'>
                    <div className="md:w-1/5">
                        <p className='text-left text-lg mb-4'>Running Projects</p>
                        <div className='flex gap-6 bg-[#adadad] w-36 h-20 rounded-2xl items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M10.6667 9.33333V20C10.6667 20.7072 10.9476 21.3855 11.4477 21.8856C11.9478 22.3857 12.6261 22.6667 13.3333 22.6667H21.3333M10.6667 9.33333V6.66667C10.6667 5.95942 10.9476 5.28115 11.4477 4.78105C11.9478 4.28095 12.6261 4 13.3333 4H19.448C19.8016 4.00008 20.1407 4.1406 20.3907 4.39067L26.276 10.276C26.5261 10.526 26.6666 10.8651 26.6667 11.2187V20C26.6667 20.7072 26.3857 21.3855 25.8856 21.8856C25.3855 22.3857 24.7072 22.6667 24 22.6667H21.3333M10.6667 9.33333H8C7.29275 9.33333 6.61448 9.61428 6.11438 10.1144C5.61428 10.6145 5.33333 11.2928 5.33333 12V25.3333C5.33333 26.0406 5.61428 26.7189 6.11438 27.219C6.61448 27.719 7.29275 28 8 28H18.6667C19.3739 28 20.0522 27.719 20.5523 27.219C21.0524 26.7189 21.3333 26.0406 21.3333 25.3333V22.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className='text-3xl'>3</p>
                        </div>
                    </div>
                    <div className='md:w-1/3'>
                        <p className='text-left text-lg mb-4'>Active Employees</p>
                        <div className="flex gap-6">
                            <div className='flex gap-6 bg-[#adadad] w-36 h-20 rounded-2xl items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                    <path d="M18.85 8.69998C18.85 9.85367 18.3917 10.9601 17.5759 11.7759C16.7601 12.5917 15.6537 13.05 14.5 13.05C13.3463 13.05 12.2399 12.5917 11.4241 11.7759C10.6083 10.9601 10.15 9.85367 10.15 8.69998C10.15 7.54628 10.6083 6.43984 11.4241 5.62406C12.2399 4.80828 13.3463 4.34998 14.5 4.34998C15.6537 4.34998 16.7601 4.80828 17.5759 5.62406C18.3917 6.43984 18.85 7.54628 18.85 8.69998ZM26.1 11.6C26.1 12.3691 25.7945 13.1067 25.2506 13.6506C24.7068 14.1944 23.9691 14.5 23.2 14.5C22.4309 14.5 21.6932 14.1944 21.1494 13.6506C20.6055 13.1067 20.3 12.3691 20.3 11.6C20.3 10.8308 20.6055 10.0932 21.1494 9.54937C21.6932 9.00551 22.4309 8.69998 23.2 8.69998C23.9691 8.69998 24.7068 9.00551 25.2506 9.54937C25.7945 10.0932 26.1 10.8308 26.1 11.6ZM20.3 21.75C20.3 20.2117 19.6889 18.7365 18.6012 17.6488C17.5135 16.561 16.0383 15.95 14.5 15.95C12.9617 15.95 11.4865 16.561 10.3988 17.6488C9.31107 18.7365 8.7 20.2117 8.7 21.75V26.1H20.3V21.75ZM8.7 11.6C8.7 12.3691 8.39446 13.1067 7.85061 13.6506C7.30675 14.1944 6.56913 14.5 5.8 14.5C5.03087 14.5 4.29324 14.1944 3.74939 13.6506C3.20553 13.1067 2.9 12.3691 2.9 11.6C2.9 10.8308 3.20553 10.0932 3.74939 9.54937C4.29324 9.00551 5.03087 8.69998 5.8 8.69998C6.56913 8.69998 7.30675 9.00551 7.85061 9.54937C8.39446 10.0932 8.7 10.8308 8.7 11.6ZM23.2 26.1V21.75C23.2021 20.2757 22.8278 18.8254 22.1125 17.5363C22.7554 17.3718 23.4273 17.3562 24.077 17.4909C24.7268 17.6256 25.3372 17.9069 25.8617 18.3133C26.3863 18.7198 26.811 19.2407 27.1036 19.8363C27.3962 20.4319 27.5489 21.0864 27.55 21.75V26.1H23.2ZM6.8875 17.5363C6.17228 18.8254 5.79797 20.2757 5.8 21.75V26.1H1.45V21.75C1.44972 21.0859 1.60147 20.4306 1.89362 19.8343C2.18577 19.238 2.61057 18.7165 3.13545 18.3097C3.66034 17.903 4.27138 17.6218 4.92175 17.4877C5.57211 17.3537 6.24454 17.3703 6.8875 17.5363Z" fill="black" />
                                </svg>
                                <p className='text-3xl'>5</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex space-x-5 md:ml-0 ml-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" viewBox="0 0 31 29" fill="none">
                            <path d="M19.375 20.5417H25.8333L24.0185 18.844C23.7748 18.6159 23.5815 18.3452 23.4496 18.0473C23.3178 17.7494 23.2499 17.43 23.25 17.1076V13.2917C23.2502 11.792 22.7534 10.3292 21.8282 9.10466C20.9029 7.88007 19.5946 6.95391 18.0833 6.45371V6.04167C18.0833 5.40073 17.8112 4.78604 17.3267 4.33283C16.8422 3.87961 16.1851 3.625 15.5 3.625C14.8148 3.625 14.1578 3.87961 13.6733 4.33283C13.1888 4.78604 12.9167 5.40073 12.9167 6.04167V6.45371C9.90707 7.44938 7.74999 10.1355 7.74999 13.2917V17.1088C7.74999 17.7589 7.47357 18.3836 6.98145 18.844L5.16666 20.5417H11.625M19.375 20.5417V21.75C19.375 22.7114 18.9667 23.6334 18.24 24.3133C17.5133 24.9931 16.5277 25.375 15.5 25.375C14.4723 25.375 13.4867 24.9931 12.76 24.3133C12.0332 23.6334 11.625 22.7114 11.625 21.75V20.5417M19.375 20.5417H11.625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M27.9 15.5C27.9 18.7887 26.5936 21.9426 24.2681 24.2681C21.9427 26.5936 18.7887 27.9 15.5 27.9C12.2113 27.9 9.05733 26.5936 6.73188 24.2681C4.40643 21.9426 3.10001 18.7887 3.10001 15.5C3.10001 12.2113 4.40643 9.0573 6.73188 6.73185C9.05733 4.4064 12.2113 3.09998 15.5 3.09998C18.7887 3.09998 21.9427 4.4064 24.2681 6.73185C26.5936 9.0573 27.9 12.2113 27.9 15.5ZM18.6 10.85C18.6 11.6721 18.2734 12.4606 17.692 13.042C17.1107 13.6234 16.3222 13.95 15.5 13.95C14.6778 13.95 13.8893 13.6234 13.308 13.042C12.7266 12.4606 12.4 11.6721 12.4 10.85C12.4 10.0278 12.7266 9.23931 13.308 8.65794C13.8893 8.07658 14.6778 7.74998 15.5 7.74998C16.3222 7.74998 17.1107 8.07658 17.692 8.65794C18.2734 9.23931 18.6 10.0278 18.6 10.85ZM15.5 17.05C14.016 17.0497 12.5632 17.4754 11.3141 18.2767C10.065 19.0779 9.07222 20.2209 8.45371 21.5698C9.32586 22.5844 10.4071 23.3984 11.6234 23.956C12.8396 24.5135 14.1621 24.8014 15.5 24.8C16.838 24.8014 18.1604 24.5135 19.3766 23.956C20.5929 23.3984 21.6742 22.5844 22.5463 21.5698C21.9278 20.2209 20.935 19.0779 19.6859 18.2767C18.4368 17.4754 16.984 17.0497 15.5 17.05Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <div className='flex bg-gray-600 w-[50rem] h-10 mt-10 justify-center items-center'>
                    <div className="mr-64 md:mr-[20rem]">
                        <p className="text-xl">Attendence History</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='ml-64' width="10" height="12" viewBox="0 0 10 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.227075 0.638559C0.372515 0.42574 0.569747 0.306184 0.775399 0.306184C0.981051 0.306184 1.17828 0.42574 1.32372 0.638559L4.65322 5.51202L7.98272 0.638559C8.05426 0.530135 8.13984 0.443652 8.23446 0.384156C8.32909 0.324661 8.43086 0.293345 8.53383 0.292035C8.63681 0.290725 8.73894 0.319448 8.83425 0.376527C8.92957 0.433607 9.01616 0.5179 9.08898 0.624488C9.1618 0.731076 9.21939 0.857824 9.25838 0.997338C9.29738 1.13685 9.317 1.28634 9.31611 1.43707C9.31521 1.5878 9.29382 1.73676 9.25317 1.87526C9.21253 2.01376 9.15344 2.13903 9.07937 2.24375L5.74987 7.11721L9.07937 11.9907C9.22064 12.2048 9.29881 12.4915 9.29705 12.7892C9.29528 13.0868 9.21372 13.3716 9.06992 13.582C8.92612 13.7925 8.7316 13.9119 8.52825 13.9145C8.3249 13.9171 8.12899 13.8026 7.98272 13.5959L4.65322 8.7224L1.32372 13.5959C1.17745 13.8026 0.98154 13.9171 0.77819 13.9145C0.574839 13.9119 0.380318 13.7925 0.236522 13.582C0.0927263 13.3716 0.0111608 13.0868 0.00939375 12.7892C0.00762668 12.4915 0.0857996 12.2048 0.227075 11.9907L3.55657 7.11721L0.227075 2.24375C0.081679 2.03086 0 1.74217 0 1.44115C0 1.14014 0.081679 0.851443 0.227075 0.638559Z" fill="black" />
                    </svg>
                </div>
                <div className='bg-gray-500 w-[50rem] justify-center text-center items-center h-auto'>
                    <div className="">
                        <div className="flex space-x-2 ml-6 pt-4">
                            <img src={pdf} alt="" className="w-8" />
                            <img src={csv} alt="" className="w-8" />
                            <img src={xls} alt="" className="w-8" />
                            <div className="w-[10rem]">
                                <Input size="lg" type="date" className="border border-blue-gray-900 " />
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-3 pb-5 ml-6">
                            <p>BDE</p>
                            <p>Development</p>
                            <p>HR</p>
                        </div>
                    </div>
                </div>

                <Card className="w-[50rem]">
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
                                            name,
                                            date,
                                            inTime,
                                            outTime,
                                            hours,
                                            actions,
                                        },
                                        index,
                                    ) => {
                                        const isLast = index === TABLE_ROWS.length - 1;
                                        const classes = isLast
                                            ? "p-4"
                                            : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={name}>
                                                <td className={classes}>
                                                    <div className="flex items-center gap-3">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {name}
                                                        </Typography>
                                                    </div>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {date}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {inTime}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {outTime}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex flex-col">
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal capitalize"
                                                            >
                                                                {hours}
                                                            </Typography>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal opacity-70"
                                                            >
                                                                {actions}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className={classes}>
                                                    <div className="flex">
                                                        <Tooltip content="Edit User">
                                                            <IconButton variant="text">
                                                                <PencilIcon className="h-4 w-4" />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-2" width="18" height="20" viewBox="0 0 13 15" fill="none">
                                                            <path d="M10.875 4.375L10.3331 11.9638C10.3107 12.2791 10.1696 12.5743 9.9382 12.7897C9.70683 13.0052 9.40241 13.125 9.08625 13.125H3.91375C3.59759 13.125 3.29317 13.0052 3.0618 12.7897C2.83044 12.5743 2.68932 12.2791 2.66688 11.9638L2.125 4.375M5.25 6.875V10.625M7.75 6.875V10.625M8.375 4.375V2.5C8.375 2.33424 8.30915 2.17527 8.19194 2.05806C8.07473 1.94085 7.91576 1.875 7.75 1.875H5.25C5.08424 1.875 4.92527 1.94085 4.80806 2.05806C4.69085 2.17527 4.625 2.33424 4.625 2.5V4.375M1.5 4.375H11.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
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

export default AttendenceHistory
