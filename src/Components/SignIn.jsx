import {
    Card,
    Input,
    // Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import signInImage from './Images/signIn1.jpg';

export function SignIn() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <Card color="transparent"
            shadow={false}
            className="justify-center items-center"
            // style={{
            //     backgroundImage: `url('${signInImage}')`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            //     minHeight: "50vh",
            // }}
        >
            <Typography variant="h4" color="blue-gray" className="text-black">
                Sign In
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3 text-black">
                        Your Email
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="Enter your email"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-black"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3 text-black">
                        Password
                    </Typography>
                    <Input
                        type="password"
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-black"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <Button type="submit" className="mt-6 text-md text-black text-white" fullWidth>
                    Sign In
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal text-black">
                    Don't have any account?{" "}
                    <Link to="/registerHere" className="font-medium text-gray-900">
                        Register Here
                    </Link>
                </Typography>
            </form>
        </Card>
    );
}

export default SignIn;