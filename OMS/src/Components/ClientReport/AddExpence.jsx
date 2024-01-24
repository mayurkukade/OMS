import React from "react";
import { useState } from "react";
import { Input } from "@material-tailwind/react";

const AddExpence = () => {
  const initialFormData = {
    name: "",
    date: "",
    paymentType: "",
    category: "",
    amount: "",
    paidBy: "",
    description: "",
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
                <img
                  className="w-7"
                  src="./img/Document.svg"
                  alt="Document"
                />
                <div className="text-2xl font-medium break-words">
                  3
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl font-normal break-words mt-5 lg:mt-0">
                Active Employees
              </div>
              <div className="inline-flex pl-6 py-5 pr-8 gap-9 bg-[#F2F1FE] border-[1px] border-[#D9D9D9] rounded-xl align-middle mt-2">
                <img
                  className="w-7"
                  src="./img/UserGroup.svg"
                  alt="Document"
                />
                <div className="text-2xl font-medium break-words">
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="lg:mt-5" />
        <div className="w-full lg:flex px-6 mt-3 lg:gap-5 lg:mt-11 lg:w-3/5">
          <div>
            <div className="text-lg font-[Fredoka] font-medium break-words pb-2 mt-2">
              Name
            </div>
            <Input
              size="lg"
              label="Name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </div>
          <div>
            <div className="text-lg font-[Fredoka] font-medium break-words pb-2 mt-2">
              Date
            </div>
            <Input
              size="lg"
              type="date"
              label="Date"
              value={formData.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
            />
          </div>
          <div>
            <div className="text-lg font-[Fredoka] font-medium break-words pb-2 mt-2">
              Payment Type
            </div>
            <Input
              size="lg"
              label="Payment Type"
              value={formData.paymentType}
              onChange={(e) => handleInputChange("paymentType", e.target.value)}
            />
          </div>
        </div>
        <div className="w-full lg:flex px-6 lg:gap-5 lg:mt-11 lg:w-3/5">
          <div>
            <div className="text-lg font-[Fredoka] font-medium break-words pb-2 mt-2">
              Category
            </div>
            <Input
              size="lg"
              label="Category"
              value={formData.category}
              onChange={(e) => handleInputChange("category", e.target.value)}
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
              Paid By
            </div>
            <Input
              size="lg"
              label="Paid By"
              value={formData.paidBy}
              onChange={(e) => handleInputChange("paidBy", e.target.value)}
            />
          </div>

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

export default AddExpence;
