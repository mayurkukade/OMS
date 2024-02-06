import {
    Button,
    Input,
} from "@material-tailwind/react";
import { useState } from 'react';

function Add_Assessment_Hr() {

    const [selectedOption61, setSelectedOption61] = useState(null);

    const handleCheckboxChange61 = (option) => {
        setSelectedOption61(option);
    };

    const [formData61, setFormData61] = useState({
        fName: '',
        lName: '',
        email: '',
        mobile: '',
        sex: '',
        profile: '',
        aDateTime: '',
        status: '',
        result: ''
    });

    const handleInputChange61 = (e) => {
        const { name, value } = e.target;
        setFormData61({
            ...formData61,
            [name]: value
        });
    };


    const handleUpdate61 = () => {
        console.log(formData61);
    };

    return (
        <div>
            <div className='flex-col md:flex-row gap-10 md:ml-36 mt-6 m-4'>
                <p className='text-3xl font-bold mb-5'>Add Interviewee</p>
                <p className='text-left text-lg mb-4'>
                    First Name :
                </p>
                <div className="w-full md:w-[18rem] lg:w-[35rem]">
                    <Input size="lg" label="First Name" placeholder="Enter your first name" name='fName' value={formData61.fName} onChange={handleInputChange61} />
                </div>
                <p className='text-left text-lg mb-4'>
                    Last Name :
                </p>
                <div className="w-full md:w-[18rem] lg:w-[35rem]">
                    <Input size="lg" label="Last Name" placeholder="Enter your last name" name='lName' value={formData61.lName} onChange={handleInputChange61} />
                </div>
                <p className='text-left text-lg mb-4'>
                    Email :
                </p>
                <div className="w-full md:w-[18rem] lg:w-[35rem]">
                    <Input size="lg" label="Email" placeholder="Enter your Email" name='email' value={formData61.email} onChange={handleInputChange61} />
                </div>
                <p className='text-left text-lg mb-4'>
                    Mobile :
                </p>
                <div className="w-full md:w-[18rem] lg:w-[35rem]">
                    <Input size="lg" label="Mobile" placeholder="Enter your mobile number" name='mobile' value={formData61.mobile} onChange={handleInputChange61} />
                </div>
                <div>
                    <div className="flex items-center mt-2">
                        <p className='text-lg md:text-xl lg:text-2xl'>Sex  :</p>
                        <div className='ml-4 md:ml-9 flex space-x-3'>
                            <div className='flex'>
                                <input
                                    type="radio"
                                    id="male"
                                    name="status"
                                    className="form-radio h-5 w-5 text-blue-500"
                                    checked={selectedOption61 === 'male'}
                                    onChange={() => handleCheckboxChange61('male')}
                                />
                                <label htmlFor="done" className="ml-2 text-gray-700">Male</label>
                            </div>
                            <div className='flex'>
                                <input
                                    type="radio"
                                    id="female"
                                    name="status"
                                    className="form-radio h-5 w-5 text-blue-500"
                                    checked={selectedOption61 === 'female'}
                                    onChange={() => handleCheckboxChange61('female')}
                                />
                                <label htmlFor="female" className="ml-2 text-gray-700">Female</label>
                            </div>
                        </div>
                    </div>
                    <p className='text-left text-lg mb-4'>
                        Profile :
                    </p>
                    <div className="w-full md:w-[18rem] lg:w-[35rem]">
                        <Input size="lg" label="Profile" placeholder="Enter your profile" name='profile' value={formData61.profile} onChange={handleInputChange61} />
                    </div>
                    <p className='text-left text-lg mb-4'>
                        Assessment Date & Time :
                    </p>
                    <div className="w-full md:w-[18rem] lg:w-[35rem]">
                        <Input size="lg" label="Assessment Date & Time" placeholder="Enter your Assessment Date & Time" name='aDateTime' value={formData61.aDateTime} onChange={handleInputChange61} />
                    </div>
                    <div className="flex items-center ml-2 mt-2">
                        <p className='text-lg md:text-xl lg:text-2xl'>Status  :</p>
                        <div className='ml-4 md:ml-9 flex'>
                            <div className='flex space-x-3'>
                                <input
                                    type="radio"
                                    id="onHold"
                                    name="status"
                                    className="form-radio h-5 w-5 text-blue-500"
                                    checked={selectedOption61 === 'onHold'}
                                    onChange={() => handleCheckboxChange61('onHold')}
                                />
                                <label htmlFor="done" className="ml-2 text-gray-700">Submitted</label>
                                <input
                                    type="radio"
                                    id="selected"
                                    name="status"
                                    className="form-radio h-5 w-5 text-blue-500"
                                    checked={selectedOption61 === 'selected'}
                                    onChange={() => handleCheckboxChange61('selected')}
                                />
                                <label htmlFor="done" className="ml-2 text-gray-700">Not Submitted</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center ml-2 mt-2">
                        <p className='text-lg md:text-xl lg:text-2xl'>Result  :</p>
                        <div className='ml-4 md:ml-9 flex'>
                            <div className='flex space-x-3'>
                                <input
                                    type="radio"
                                    id="onHold"
                                    name="status"
                                    className="form-radio h-5 w-5 text-blue-500"
                                    checked={selectedOption61 === 'onHold'}
                                    onChange={() => handleCheckboxChange61('onHold')}
                                />
                                <label htmlFor="done" className="ml-2 text-gray-700">Pass</label>
                                <input
                                    type="radio"
                                    id="selected"
                                    name="status"
                                    className="form-radio h-5 w-5 text-blue-500"
                                    checked={selectedOption61 === 'selected'}
                                    onChange={() => handleCheckboxChange61('selected')}
                                />
                                <label htmlFor="done" className="ml-2 text-gray-700">Fail</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 space-x-4 md:ml-0 ml-14">
                    <Button color="orange" className="w-32 h-12 rounded-full " onClick={handleUpdate61}>Reset</Button>
                    <Button color="green" className="w-32 h-12 rounded-full">Save</Button>
                </div>
            </div>
        </div>
    )
}

export default Add_Assessment_Hr
