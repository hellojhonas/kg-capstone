import Navbar from "./components/Navbar";
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard";
import Exercises from "./pages/Exercises";
import Files from "./pages/Files";
import Notes from "./pages/Notes";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/exercises" element={<Exercises/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/files" element={<Files/>}/>
      </Routes>
    </div>
   )
}

export default App;