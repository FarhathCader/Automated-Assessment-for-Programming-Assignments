import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import AdminDash from './pages/AdminDash/AdminDash'
import StudentDash from './pages/StudentDash/StudentDash'
import LecturerDash from './pages/LectureDash/LecturerDash'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
axios.defaults.baseURL = 'http://localhost:8000'
import 'bootstrap/dist/css/bootstrap.min.css'
import ForgotPassword from './pages/ForgetPassword/Forget'
import Signup from './pages/Signup/Signup'
axios.defaults.withCredentials = true
function App() {

  return (
    <>
      <Toaster position='bottom-center' toastOptions={{duration : 2000}} />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/admin' element = {<AdminDash/>}/>
        <Route path='/student' element = {<StudentDash/>}/>
        <Route path='/lecturer' element = {<LecturerDash/>}/>
        <Route path='/forgot' element = {<ForgotPassword/>}/>
      </Routes>
    </>
  )
}

export default App
