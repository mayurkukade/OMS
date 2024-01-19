import React from 'react'
import {  FaRegCopy } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { Button, Input, Textarea } from "@material-tailwind/react";

export default function AddProject() {
  return (
    <div className='flex'>
      <div>
         {/* Upeer part */}
         <div className="flex  md:ml-[15rem]">
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

        {/* Remaning part */}

        <form className='mt-10 md:ml-[15rem]'>

            <div className='md:w-96'>
                <label className='font-semibold'>Project Name :-</label>
            <Input label="Project Name" />
            </div>

            <div className='w-96 mt-3'>
                <label className='font-semibold'>Client Name :-</label>
            <Input label="Client Name" />
            </div>

            <div className='w-96 mt-3'>
                <label className='font-semibold'>Assigned To :-</label>
            <Input label="Assigned To" />
            </div>
            <div className='w-96 mt-3'>
                <label className='font-semibold'>Status :-</label>
            <Input label="Status" />
            </div>
            <div className='w-96 mt-3'>
                <label className='font-semibold'>Duration :-</label>
            <Input label="Duration" />
            </div>

            <div className='w-96 mt-3'>
                <label className='font-semibold'>Start Date :-</label>
            <Input  type='date' />
            </div>
            <div className='w-96 mt-3'>
                <label className='font-semibold'>End Date :-</label>
            <Input  type='date' />
            </div>

            <div className='w-96 mt-3'>
                <label className='font-semibold'>Description :-</label>
            <Textarea label="Description" />
            </div>
            
            <div className='flex mt-5'>
                <div>
                    <Button className="bg-orange-900">Update</Button>
                </div>
                <div className='ml-4'>
                    <Button className="bg-indigo-500">Cancle</Button>
                </div>
            </div>

        </form>
      </div>
    </div>
  )
}
