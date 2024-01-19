import { Route, Routes } from "react-router-dom";
import AppLayout from "./Components/Layout/AppLayout";
import Homedashboard from "./Components/Dashboard/Homedashboard";
import Clientlist from "./Components/Dashboard/Clientlist";
import AddClient from "./Components/Dashboard/AddClient";
import Task from "./Components/Dashboard/Task";
import RunningTask from "./Components/Dashboard/RunningTask";
import AddProject from "./Components/Dashboard/AddProject";

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
     
      </Route>
    </Routes>
    </>
  )
}

export default App