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
        // name: '',
        email: '',
        password: '',
        // agreeTerms: false,
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
        // TODO: Add your signup logic here using formData
        console.log('Form submitted:', formData);
    };

    return (
        <Card color="transparent"
            shadow={false}
            className="justify-center items-center"
            style={{
                backgroundImage: `url('${signInImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "50vh", // Adjust the height as needed
            }}
        >
            <Typography variant="h4" color="blue-gray" className="text-white">
                Sign In
            </Typography>
            {/* <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to register.
            </Typography> */}
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                <div className="mb-1 flex flex-col gap-6">
                    {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Name
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="Enter your name"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    /> */}
                    <Typography variant="h6" color="blue-gray" className="-mb-3 text-white">
                        Your Email
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="Enter your email"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3 text-white">
                        Password
                    </Typography>
                    <Input
                        type="password"
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                {/* <Checkbox
                    label={
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal"
                        >
                            I agree the
                            <a
                                href="#"
                                className="font-medium transition-colors hover:text-gray-900"
                            >
                                &nbsp;Terms and Conditions
                            </a>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                /> */}
                <Button type="submit" className="mt-6 text-md text-white" fullWidth>
                    Sign In
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal text-white">
                    Don't have any account?{" "}
                    <Link to="/registerHere" className="font-medium text-gray-900 text-white">
                        Register Here
                    </Link>
                </Typography>
            </form>
        </Card>
    );
}

export default SignIn;