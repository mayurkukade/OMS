import { Route, Routes } from "react-router-dom";
import AppLayout from "./Components/Layout/AppLayout";
import Homedashboard from "./Components/Dashboard/Homedashboard";
import Clientlist from "./Components/Dashboard/Clientlist";
import AddClient from "./Components/Dashboard/AddClient";
import Task from "./Components/Dashboard/Task";
import RunningTask from "./Components/Dashboard/RunningTask";
import AddProject from "./Components/Dashboard/AddProject";
import AddClientPaymentAcc from "./Components/ClientReport/AddClientPaymentAcc";
import AddExpence from "./Components/ClientReport/AddExpence"
import ExpenceReport from "./Components/Dashboard/ExpenceReport"
import ClientReport from "./Components/Dashboard/ClientReport"
import AttendenceReport from "./Components/Dashboard/AttendenceReport"
import AttendenceHistory from "./Components/Dashboard/AttendenceHistory"
import ProjectReport from "./Components/Dashboard/ProjectReport";
import AddTask2 from "./Components/Dashboard/AddTask2";
import AddAttendee from "./Components/Dashboard/AddAttendee";
import ClientPaymentReport from "./Components/Dashboard/ClientPaymentReport" ;
import DevDash from "./Components/Dev-Side/DevDash";
import Ongoingtask from "./Components/Dev-Side/Ongoingtask";
import Request from "./Components/Dev-Side/Request";
import Home from "./Components/OMS_EMP_BDE/Home";
import Requests from "./Components/OMS_EMP_BDE/Requests";
import Taskss from "./Components/OMS_EMP_BDE/Taskss";


function App() {
  
  return (
    <>
    <Routes>
      <Route element={<AppLayout/>}>
        
        <Route path="/" element={<Homedashboard/>}/>
        <Route path="/clientlist" element={<Clientlist/>}/>
        <Route path="/addclient" element={<AddClient/>}/>
        <Route path="/task" element={<Task/>}/>
        <Route path="/runningtask" element={<RunningTask/>}/>
        <Route path="/addproject" element={<AddProject/>}/>
        <Route path="/addclientpayment" element={<AddClientPaymentAcc/>}/>
        <Route path="/addexpence" element={<AddExpence/>}/>
        <Route path="/expencereport" element={<ExpenceReport/>}/>
        <Route path="/clientreport" element={<ClientReport/>}/>
        <Route path="/attendencereoprt" element={<AttendenceReport/>}/>
        <Route path="/attendencehistory" element={<AttendenceHistory/>}/>
        <Route path="/Projectreport" element={<ProjectReport/>}/>
        <Route path="/addtask" element={<AddTask2/>}/>
        <Route path="/addattendee" element={<AddAttendee/>}/>
        <Route path="/addclientpaymentacc" element={<AddClientPaymentAcc/>}/>
        <Route path="/clientpaymentreport" element={<ClientPaymentReport/>}/>
      </Route>

      
       
        <Route path="/devdash" element={<DevDash/>}/>
        <Route path="/ongoingtask" element={<Ongoingtask/>}/>
        <Route path="/request" element={<Request/>}/>


        <Route path="/home" element={<Home/>}/>
        <Route path="/requests" element={<Requests/>}/>
        <Route path="/taskss" element={<Taskss/>}/>
        
    </Routes>
    </>
  )
}

export default App