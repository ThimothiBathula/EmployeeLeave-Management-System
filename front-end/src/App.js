import './App.css';
import EmployeeLeaveForm from './EmployeeLeaveForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './Nav';
import Status from './Status';
import Leaves from './Leaves';
import EmployeeLeaves from './EmployeeLeaves';

function App() {
  return (
    <div className="App">
     <Nav/>
     <BrowserRouter>
     <Routes>
      <Route path='' element={<EmployeeLeaveForm/>}/>
      <Route path='/status' element={<Status/>}/>
      <Route path='/leaves' element={<Leaves/>}/>
      <Route path='/empLeave' element={<EmployeeLeaves/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
