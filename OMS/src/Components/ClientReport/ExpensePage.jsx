import { Card, Typography,Input } from "@material-tailwind/react";

const TABLE_HEAD1 = [
  "Total Expense",
  "Total Expense this week",
  "Total Expense this month",
  "Action",
];

const TABLE_ROWS1 = [
  {
    totalExpense: "50000",
    totalExpenseWeek: "23000",
    totalExpenseMonth: "10000",
  },
  {
    totalExpense: "50000",
    totalExpenseWeek: "23000",
    totalExpenseMonth: "10000",
  },
];
const TABLE_HEAD2 = [
  "Date",
  "Category",
  "Paid By",
  "Description",
  "Amount",
  "Payment Type",
];

const TABLE_ROWS2 = [
  {
    date: "20/12/23",
    category: "Internet",
    paidBy: "XYZ",
    description: "WIFI Bill",
    amount: "2000/-",
    paymentType: "UPI",
  },
  {
    date: "20/12/23",
    category: "Internet",
    paidBy: "XYZ",
    description: "WIFI Bill",
    amount: "2000/-",
    paymentType: "UPI",
  },
];

export default function ExpensePage() {
  return (
    <div className="flex flex-col items-start lg:items-end">
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
      <div className="w-full px-3 py-2 my-4 lg:w-3/5 flex flex-col items-end justify-center lg:px-6 lg:py-4 border-[2px] lg:m-5 rounded-xl">
        <div className="w-full flex justify-start py-2">Expense Summary</div>
        <hr className="border-[1px] w-full m-0 p-0" />
        <div className="w-full mt-3 lg:gap-7 lg:pt-3 lg:flex lg:mt-0">
          <div className="flex gap-7">
            <img src="./img/Document.svg" alt="Document" />
            <img src="./img/Document.svg" alt="Document" />
          </div>
          <div className="mt-3 lg:mt-0">
            <Input size="md" type="date" />
          </div>
        </div>
        <Card className="h-full w-full mt-4">
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
                (
                  { totalExpense, totalExpenseWeek, totalExpenseMonth },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS1.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={totalExpense}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {totalExpense}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {totalExpenseWeek}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {totalExpenseMonth}
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
                }
              )}
            </tbody>
          </table>
        </Card>
      </div>
      <div className="w-full px-3 py-2 my-4 lg:w-3/5 flex flex-col items-end justify-center lg:px-6 lg:py-4 border-[2px] lg:m-5 rounded-xl">
        <div className="w-full flex justify-start py-2">
          Last 20 Days Expense Summary
        </div>
        <hr className="border-[1px] w-full m-0 p-0" />
        <div className="w-full pt-3 items-center lg:flex">
          <div className="flex">
            <img className="mr-7" src="./img/Document.svg" alt="Document" />
            <img className="mr-7" src="./img/Document.svg" alt="Document" />
          </div>
          <div className="mr-2 mt-3 lg:mt-0">From:</div>
          <div className="lg:mr-8">
            <Input size="md" type="date" />
          </div>
          <div className="mr-2 mt-3 lg:mt-0">To:</div>
          <div>
            <Input size="md" type="date" />
          </div>
        </div>
        <Card className="h-full w-full mt-8">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD2.map((head) => (
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
              {TABLE_ROWS2.map(
                (
                  { date, category, paidBy, description, amount, paymentType },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS2.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={date}>
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
                          {category}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {paidBy}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {description}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {paymentType}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {amount}
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
    </div>
  );
}
