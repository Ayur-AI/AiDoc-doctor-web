import React from 'react'
import SideBar from './SideBar'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button'
import {auth} from './firebase'
import { toast,Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase/auth'
function Add_Patient() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [email,setEmail]=React.useState('')
    const [password,setPassword]=React.useState('')
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const navigate=useNavigate()
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const AddPatient=async()=>{
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          navigate("/")
          toast.success('Patient Added Successfully', {
            position: "top-center",
            limit: 1,
            transition: Zoom,
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
          })
      })
      }
  return<>
<SideBar/>
<div className="p-4 sm:ml-64">
            <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
              <div className='Patient-container'>
                <p id='detail-title'>Add Patient</p>
                </div>
                <div className='page-right-side'>
        <div id='Signin'>
            {/* <p>Sign in</p> */}
            <TextField sx={{ m: 1, width: '30ch' }} id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}/>
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </FormControl>
        <Button variant="contained" className="Login-btn" onClick={AddPatient} >Add</Button>
        </div>
    </div>
                </div>
                </div>
  </>
}

export default Add_Patient