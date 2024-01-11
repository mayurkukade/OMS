import { Route, Routes } from "react-router-dom";
import AppLayout from "./Components/Layout/AppLayout";
import Example from "./Components/Example";
import Example2 from "./Components/Example2";
import Example3 from "./Components/Example3";

function App() {
  
  return (
    <>
    <Routes>
      <Route element={<AppLayout/>}>
        <Route path="/" element={<Example/>}/>
        <Route path="/example2" element={<Example2/>}/>
        <Route path="/example3" element={<Example3/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App