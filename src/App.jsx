import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTask2 from './Components/Dashboards/AddTask2'
import AddToken from './Components/Dashboards/AddToken'
import CompletedTask from './Components/Dashboards/CompletedTask'
import AttendenceHistory from './Components/Dashboards/AttendenceHistory'
import AddAttendee from "./Components/Dashboards/AddAttendee"
import AttendenceReport from "./Components/Dashboards/AttendenceReport"
import ProjectReport from './Components/Dashboards/ProjectReport'
import ClientPaymentReport from './Components/Dashboards/ClientPaymentReport'
import ExpenceReport from './Components/Dashboards/ExpenceReport'
import ClientReport from './Components/Dashboards/ClientReport'

import Home from "./Components/OMS_EMP_BDE/Home"
import Tasks from './Components/OMS_EMP_BDE/Tasks';
import Request from './Components/OMS_EMP_BDE/Request';
import { SignUp } from './Components/SignUp';
import SignIn from './Components/SignIn';

function App() {
  return (
    <>
      <AddTask2/>
      <AddToken/>
      <CompletedTask/>
      <AttendenceHistory/>
      <AddAttendee/>
      <AttendenceReport />
      <ProjectReport/>
      <ClientPaymentReport/>
      <ExpenceReport/>
      <ClientReport/>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/requests" element={<Request />} />
          <Route path='/' element={<SignUp/>} />
          <Route path='/signIn' element={<SignIn/>} />
          <Route path='/registerHere' element={<SignUp/>} />
        </Routes>
      </Router>
    </>

  )
}

export default App
