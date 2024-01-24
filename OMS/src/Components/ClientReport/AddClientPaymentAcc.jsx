import React from "react";
import { useState } from "react";
import { Input } from "@material-tailwind/react";

const AddClientPaymentAcc = () => {
  const initialFormData = {
    taskname: "",
    invoicedate: "",
    paymentType: "",
    amount: "",
    description: "",
    duedate:""
  };

  // State to hold form values
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateClick = () => {
    console.log(formData);
  };
  const handleCancelClick = () => {
    setFormData(initialFormData);
  };

  return (
    <>
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
        <hr className="lg:mt-5" />
        <div className="w-full lg:flex px-6 mt-3 lg:gap-5 lg:mt-11 lg:w-3/5">
          <div>
            <div className="text-lg font-[Fredoka] font-medium break-words pb-2 mt-2">
              Task Name
            </div>
            <Input
              size="lg"
              label="Task Name"
              value={formData.taskname}
              onChange={(e) => handleInputChange("taskname", e.target.value)}
            />
          </div>
          <div>
            <div className="text-lg font-[Fredoka] font-medium break-words pb-2 mt-2">
              Invoice Date
            </div>
            <Input
              size="lg"
              type="date"
              label="Invoice Date"
              value={formData.invoicedate}
              onChange={(e) => handleInputChange("invoicedate", e.target.value)}
            />
          </div>
          <div className="flex flex-col text-center">
            <div className="text-lg font-[Fredoka] font-medium break-words pb-4 mt-2">
              Invoice Number
            </div>
            <div className="text-xl text-[#FF0F0F] font-bold ">001</div>
          </div>
        </div>
        <div className="w-full lg:flex px-6 lg:gap-5 lg:mt-11 lg:w-3/5">
          <div>
            <div className="text-lg font-[Fredoka] font-medium break-words pb-2 mt-2">
              Description
            </div>
            <Input
              size="lg"
              label="Description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>

          <div>
            <div className="text-lg font-[Fredoka] font-medium break-words pb-2 mt-2">
              Amount
            </div>
            <Input
              size="lg"
              label="Amount"
              value={formData.amount}
              onChange={(e) => handleInputChange("amount", e.target.value)}
            />
          </div>
        </div>
        <div className="w-full lg:flex px-6 lg:gap-5 lg:mt-11 lg:w-3/5">
          <div>
            <div className="text-lg font-[Fredoka] font-medium break-words pb-2 mt-2">
              Due Date
            </div>
            <Input
              size="lg"
              type="date"
              label="Due Date"
              value={formData.duedate}
              onChange={(e) => handleInputChange("duedate", e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex justify-between my-8 px-7 lg:gap-20 lg:justify-normal lg:items-center lg:w-3/5">
          <div
            onClick={handleUpdateClick}
            className="px-3 py-1 text-white text-base font-[Fredoka] font-medium break-words bg-[#1CB134] rounded-md"
          >
            Update
          </div>
          <div
            onClick={handleCancelClick}
            className="px-3 py-1 text-white text-base font-[Fredoka] font-medium break-words bg-[#FF5139] rounded-md"
          >
            Cancel
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClientPaymentAcc;
