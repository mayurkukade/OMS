import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AddTask2 from './Components/Dashboards/AddTask2'
// import AddToken from './Components/Dashboards/AddToken'
// import CompletedTask from './Components/Dashboards/CompletedTask'
// import AttendenceHistory from './Components/Dashboards/AttendenceHistory'
// import AddAttendee from "./Components/Dashboards/AddAttendee"
// import AttendenceReport from "./Components/Dashboards/AttendenceReport"
// import ProjectReport from './Components/Dashboards/ProjectReport'
// import ClientPaymentReport from './Components/Dashboards/ClientPaymentReport'
// import ExpenceReport from './Components/Dashboards/ExpenceReport'
// import ClientReport from './Components/Dashboards/ClientReport'

// Team BDE
import Homee from './Components/OMS_EMP_BDE/Home';

// Team HR
// import Home_Hr from "./Components/OMS_HR/Home_Hr"

// Team Lead
// import { TeamLead } from './Components/Dashboards/TeamLead';



// import { SignUp } from './Components/SignUp';
// import SignIn from './Components/SignIn';

function App() {
  return (
    <>
      {/* <AddTask2/>
      <AddToken/>
      <CompletedTask/>
      <AttendenceHistory/>
      <AddAttendee/>
      <AttendenceReport />
      <ProjectReport/>
      <ClientPaymentReport/>
      <ExpenceReport/>
      <ClientReport/> */}


      {/* <Home_Hr/> */}
      {/* <Interview_Hr/> */}
      {/* <SideBar/> */}
      <Router>
        <Routes>
        <Route path='/' element={<Homee/>} />
          {/* <Route path='/' element={<SignUp/>} />
          <Route path='/signIn' element={<SignIn/>} />
          <Route path='/registerHere' element={<SignUp/>} /> */}
          
          {/* <Route path="/" element={<Home_Hr/>} /> */}
          {/* <Route path="/" element={<TeamLead/>} /> */}
        </Routes>
      </Router>
    </>

  )
}

export default App
