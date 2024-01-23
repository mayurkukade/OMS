import { Routes, Route } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import LoginPage from "./Components/LoginPage";
import AddExpence from "./Components/ClientReport/AddExpence";
import ExpensePage from "./Components/ClientReport/ExpensePage";
import ClientList from "./Components/ClientReport/ClientList";
import AddClient from "./Components/ClientReport/AddClientPaymentAcc";
import ProjectReport from "./Components/ClientReport/ProjectReport";
import DevDash from "./Components/Dev-Side/DevDash";
import Ongoingtask from "./Components/Dev-Side/Ongoingtask";
import Request from "./Components/Dev-Side/Request";
import CommonNavSide from "./Components/Dev-Side/CommonNavSide";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AddExpence />} />
        <Route path="expenses" element={<ExpensePage />} />
        <Route path="clientlist" element={<ClientList />} />
        <Route path="addclient" element={<AddClient />} />
        <Route path="projectreport" element={<ProjectReport />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DevDash/>} />
        <Route path="ongoingtask" element={<Ongoingtask/>} />
        <Route path="request" element={<Request/>} />
        <Route path="navside" element={<CommonNavSide/>} />
      </Routes>
    </>
  );
}

export default App;
