import { Route, Routes } from "react-router-dom";
import AppLayout from "./Components/Layout/AppLayout";
import Homedashboard from "./Components/Dashboard/Homedashboard";
import Clientlist from "./Components/Dashboard/Clientlist";

function App() {
  
  return (
    <>
    <Routes>
      <Route element={<AppLayout/>}>
        {/* <Route path="/" element={<Homedashboard/>}/> */}
        <Route path="/" element={<Clientlist/>}/>
     
      </Route>
    </Routes>
    </>
  )
}

export default App