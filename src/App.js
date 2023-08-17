import React from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Dashboard from './Compontents/Dashboard'
import Patient from './Compontents/Patient'
import Add_Patient from './Compontents/Add_Patient'
import { ToastContainer} from 'react-toastify';
function App() {
  
  return<>
     <BrowserRouter>
     <ToastContainer/>
     <Routes>
      <Route path='/'  element={<Dashboard/>}></Route>
      <Route path='/Patient/:id' element={<Patient/>}></Route>
      <Route path='/Add_Patient'  element={<Add_Patient/>}></Route>
     </Routes>
    </BrowserRouter>
  </>
}

export default App 