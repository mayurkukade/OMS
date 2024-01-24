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
import ExpencePage from "./Components/ClientReport/ExpensePage"
import ClientReport from "./Components/ClientReport/ClientReport"

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
        <Route path="/expence" element={<ExpencePage/>}/>
        <Route path="/clientreport" element={<ClientReport/>}/>
     
      </Route>
    </Routes>
    </>
  )
}

export default App