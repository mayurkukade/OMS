import {
    Button,
    Input,
} from "@material-tailwind/react";
import { useState } from 'react';

function Add_Interview_Hr() {

    const [selectedOption31, setSelectedOption31] = useState(null);

    const handleCheckboxChange31 = (option) => {
        setSelectedOption31(option);
    };


    const [formData31, setFormData31] = useState({
        fName: '',
        lName: '',
        email: '',
        mobile: '',
        sex: '',
        profile: '',
        aDateTime: '',
        status: '',
    });


    const handleInputChange31 = (e) => {
        const { name, value } = e.target;
        setFormData31({
            ...formData31,
            [name]: value
        });
    };


    const handleUpdate31 = () => {
        console.log(formData31);
    };

    return (
        <div>
            <div className='flex-col md:flex-row gap-10 md:ml-36 mt-6 m-4'>
                <p className='text-3xl font-bold mb-5'>Add Interviewee</p>
                <p className='text-left text-lg mb-4'>
                    First Name :
                </p>
                <div className="w-full md:w-[18rem] lg:w-[35rem]">
                    <Input size="lg" label="First Name" placeholder="Enter your first name" name='fName' value={formData31.fName} onChange={handleInputChange31} />
                </div>
                <p className='text-left text-lg mb-4'>
                    Last Name :
                </p>
                <div className="w-full md:w-[18rem] lg:w-[35rem]">
                    <Input size="lg" label="Last Name" placeholder="Enter your last name" name='lName' value={formData31.lName} onChange={handleInputChange31} />
                </div>
                <p className='text-left text-lg mb-4'>
                    Email :
                </p>
                <div className="w-full md:w-[18rem] lg:w-[35rem]">
                    <Input size="lg" label="Email" placeholder="Enter your Email" name='email' value={formData31.email} onChange={handleInputChange31} />
                </div>
                <p className='text-left text-lg mb-4'>
                    Mobile :
                </p>
                <div className="w-full md:w-[18rem] lg:w-[35rem]">
                    <Input size="lg" label="Mobile" placeholder="Enter your mobile number" name='mobile' value={formData31.mobile} onChange={handleInputChange31} />
                </div>
                <div>
                    <div className="flex items-center mt-2">
                        <p className='text-lg md:text-xl lg:text-2xl'>Sex  :</p>
                        <div className='ml-4 md:ml-9 flex space-x-4'>
                            <div className='flex'>
                                <input
                                    type="radio"
                                    id="male"
                                    name="status"
                                    className="form-radio h-5 w-5 text-blue-500"
                                    checked={selectedOption31 === 'male'}
                                    onChange={() => handleCheckboxChange31('male')}
                                />
                                <label htmlFor="done" className="ml-2 text-gray-700">Male</label>
                            </div>
                            <div className='flex'>
                                <input
                                    type="radio"
                                    id="female"
                                    name="status"
                                    className="form-radio h-5 w-5 text-blue-500"
                                    checked={selectedOption31 === 'female'}
                                    onChange={() => handleCheckboxChange31('female')}
                                />
                                <label htmlFor="female" className="ml-2 text-gray-700">Female</label>
                            </div>
                        </div>
                    </div>
                    <p className='text-left text-lg mb-4'>
                        Profile :
                    </p>
                    <div className="w-full md:w-[18rem] lg:w-[35rem]">
                        <Input size="lg" label="Profile" placeholder="Enter your profile" name='profile' value={formData31.profile} onChange={handleInputChange31} />
                    </div>
                    <p className='text-left text-lg mb-4'>
                        Interview Date & Time :
                    </p>
                    <div className="w-full md:w-[18rem] lg:w-[35rem]">
                        <Input size="lg" label="Assessment Date & Time" placeholder="Enter your Assessment Date & Time" name='aDateTime' value={formData31.aDateTime} onChange={handleInputChange31} />
                    </div>
                    <div className="flex items-center ml-2 mt-2">
                        <p className='text-lg md:text-xl lg:text-2xl'>Status :</p>
                        <div className='ml-4 md:ml-9 flex '>
                            <div className='flex space-x-2'>
                                <input
                                    type="radio"
                                    id="onHold"
                                    name="status"
                                    className="form-radio h-5 w-5 text-blue-500"
                                    checked={selectedOption31 === 'onHold'}
                                    onChange={() => handleCheckboxChange31('onHold')}
                                />
                                <label htmlFor="done" className="ml-2 text-gray-700">On Hold</label>
                                <input
                                    type="radio"
                                    id="selected"
                                    name="status"
                                    className="form-radio h-5 w-5 text-blue-500"
                                    checked={selectedOption31 === 'selected'}
                                    onChange={() => handleCheckboxChange31('selected')}
                                />
                                <label htmlFor="done" className="ml-2 text-gray-700">Selected</label>
                                <input
                                    type="radio"
                                    id="rejected"
                                    name="status"
                                    className="form-radio h-5 w-5 text-blue-500"
                                    checked={selectedOption31 === 'rejected'}
                                    onChange={() => handleCheckboxChange31('rejected')}
                                />
                                <label htmlFor="done" className="ml-2 text-gray-700">Rejected</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 space-x-4 md:ml-0 ml-14">
                    <Button color="orange" className="w-32 h-12 rounded-full " onClick={handleUpdate31}>Reset</Button>
                    <Button color="green" className="w-32 h-12 rounded-full">Save</Button>
                </div>
            </div>
        </div>
    )
}

export default Add_Interview_Hr
