
import { Button, Input,Textarea } from "@material-tailwind/react";
import React from "react";

export default function AddClient() {
 
const [open1 , setOpen1] = React.useState(true);
const [open2 , setOpen2] = React.useState(false);
const [open3 , setOpen3] = React.useState(false);

    // Basic Details
    const [fname , setFname] = React.useState("");
    const [lname , setLname] = React.useState("");
    const [email , setEmail] = React.useState("");
    const [number , setNumber] = React.useState("");
    const [dob , setDob] = React.useState("");
    const [responses, setResponses] = React.useState({
        Sex: "",
        Status : "",
        
      });
      const handleRadioChange = (question, value) => {
        setResponses((prevResponses) => ({ ...prevResponses, [question]: value }));
      };

// Company Details

const [company , setCompany] = React.useState("");
const [gst , setGst] = React.useState("");
const [registration , setRegistration] = React.useState("");
const [service , setService] = React.useState("");
const [joining , setJoining] = React.useState("");
const [endDate , setEnddate] = React.useState("");
const [address , setAddress] = React.useState("");

// Bank Details
const [account , setAccount] = React.useState("");
const [ifsc , setIfsc] = React.useState("");
const [bankname , setBankname] = React.useState("");
const [upi , setUpi] = React.useState("");
const [passport , setPassport] = React.useState("");
const [pan , setPan] = React.useState("");
const [aadhar , setAadhar] = React.useState("");

    function handleSubmit (e) {
        e.preventDefault();
    const obj = {
        FirstName: fname,
        LastName : lname,
        Email : email,
        MobileNumber : number,
        DateOfBirth : dob,
        Radio : responses,
        CompanyName : company,
        GST : gst,
        CompanyRegistration : registration,
        Service : service,
        DateOfJoining : joining,
        EndDate : endDate,
        CompanyAddress : address,
        AccountNumber : account,
        IFSCcode : ifsc,
        BankName : bankname,
        UPIid : upi,
        PassportNumber : passport,
        PanNumber : pan,
        AadharNumber : aadhar
    };

    console.log(obj)
    
    }

    function step1 () {
      setOpen3(false);
      setOpen2(false);
      setOpen1(true);
    }

    function step2 () {
      setOpen1(false);
      setOpen3(false);
      setOpen2(true);
    }

    function step3 () {
      setOpen2(false);
      setOpen1(false);
      setOpen3(true);
    }

  return (
    <div className="flex">
      <div className="mt-5">
        <div className=" md:ml-[20rem] border border-gray-500 md:w-[12rem] w-48 ml-20 px-3 py-2 rounded-md">
          <p className="text-2xl font-medium">Total Client :- 3 </p>
        </div>

        <div className="mt-10 md:ml-[15rem]">
          <p className="text-semibold text-3xl">Add Client :-</p>
        </div>

        {/* form Started */}
        <form onSubmit={handleSubmit} className="md:ml-[15rem]">
         
            {/* Basic Details */}
           { open1 && ( <div className="mt-5 border border-gray-500 rounded-md w-[25rem] py-2 px-2">
              <p className="font-semibold text-lg">Basic Details :- </p>

              <div className="mt-5 px-3 ">
                <label htmlFor="">First Name :-</label>
                <Input type="text"  label="First Name" value={fname} onChange={(e) => setFname(e.target.value)}/>
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Last Name :-</label>
                <Input type="text" label="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Email :-</label>
                <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Mobile Number :-</label>
                <Input type="number" label="Mobile Number" value={number} onChange={(e) => setNumber(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Date of Birth :-</label>
                <Input className="mt-1" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Upload Photo :-</label>
                <br />
                <input accept="image/*" className="mt-1" type="file" />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Sex :- </label><br />
                <input
                  type="radio"
                  name="Sex"
                  value="Male"
                  onChange={() =>
                    handleRadioChange("Sex", "Male")
                  }
                />
                <label className="ml-2"> Male</label>

                <input
                  type="radio"
                  name="Sex"
                  className="ml-2"
                  value="Female"
                  onChange={() =>
                    handleRadioChange("Sex", "Female")
                  }
                />
                <label className="ml-1"> Female</label>
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Status :- </label><br />
                <input
                  type="radio"
                  name="Status"
                  value="Active"
                  onChange={() =>
                    handleRadioChange("Status", "Active")
                  }
                />
                <label className="ml-2"> Active</label>

                <input
                  type="radio"
                  name="Status"
                  className="ml-2"
                  value="Inactive"
                  onChange={() =>
                    handleRadioChange("Status", "Inactive")
                  }
                />
                <label className="ml-1"> Inactive</label>
              </div>

              <div className="mt-5 ml-5">
                 <div>
                  <Button className="bg-orange-800 font-medium" onClick={step2}>Save & Next</Button>
                 </div>
               </div>

            </div>)}
           

            {/* Company Details */}
            { open2 && (<div className="mt-5 border border-gray-500 rounded-md py-2 px-2 ml-3 w-[25rem]">
              <p className="font-semibold text-lg">Company Details :- </p>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Company Name :-</label>
                <Input type="text" label="Company Name" value={company} onChange={(e) => setCompany(e.target.value)}/>
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">GST Number :-</label>
                <Input type="text" label="GST Number" value={gst} onChange={(e) => setGst(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Company Registration Number :-</label>
                <Input type="text" label="Registration  Number" value={registration} onChange={(e) => setRegistration(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Service/Product :-</label>
                <Input type="text" label="Service" value={service} onChange={(e) => setService(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Date Of Joining:-</label>
                <Input type="date" value={joining} onChange={(e) => setJoining(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">End Date:-</label>
                <Input type="date" value={endDate} onChange={(e) => setEnddate(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Company Address:-</label>
                <Textarea label="Company Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
              </div>

              <div className="mt-5 ml-5 flex">
                
              <div >
             <Button className=" font-medium" onClick={step1}>Back</Button>
            </div>

            <div className="ml-3">
             <Button  className="bg-orange-800 font-medium" onClick={step3}>Save & Next</Button>
            </div>
   
          </div>
            </div>)}
            

            {/* Bank Details */}
            { open3 && (<div className="mt-5 border border-gray-500 rounded-md py-2 px-2 ml-3 w-[25rem]">
              <p className="font-semibold text-lg">Bank Details :- </p>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Account Number :-</label>
                <Input type="number" label="Account Number" value={account} onChange={(e) => setAccount(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">IFSC code :-</label>
                <Input type="text" label="IFSC code" value={ifsc} onChange={(e) => setIfsc(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Bank Name :-</label>
                <Input type="text" label="Bank Name" value={bankname} onChange={(e) => setBankname(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">UPI Id:-</label>
                <Input type="text" label="UPI Id" value={upi} onChange={(e) => setUpi(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Passport Number:-</label>
                <Input type="text" label="Passport Number" value={passport} onChange={(e) => setPassport(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Pan Number:-</label>
                <Input type="text" label="Pan Number" value={pan} onChange={(e) => setPan(e.target.value)} />
              </div>

              <div className="mt-5 px-3 ">
                <label htmlFor="">Aadhar Number:-</label>
                <Input type="text" label="Aadhar Number" value={aadhar} onChange={(e) => setAadhar(e.target.value)}/>
              </div>

              <div className="mt-5 ml-5 flex">

              <div >
             <Button className="font-medium" onClick={step2}>Back</Button>
            </div>

            <div className="ml-3">
             <Button type="submit" className="bg-orange-800 font-medium">Save</Button>
            </div>
          
           </div>
            </div>)}
            
   
          
        </form>
        {/* form end*/}
      </div>
    </div>
  );
}
