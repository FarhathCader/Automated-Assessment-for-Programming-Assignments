import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import Register from '../../components/Register/Register';
import Topbar from '../../components/Topbar/Topbar';
export default function Login() {
    return (
        <div className="login" >
          <Topbar/>
          <Register/>
        </div>
      );
//     const navigate = useNavigate()
//     const [data,setData] = useState({
//         name : '',
//         email : '',
//         password : '',
//     })

//     const [credential,setCredential] = useState({
//         email : '',
//         password : '',
//     })

//     const registerUser = async (e) =>{
//         e.preventDefault();
//         const {name,email,password} = data
//         try{
//             const {data} = await axios.post('/register',{
//                 name,email,password
//             })
//             if(data.error){
//                 toast.error(data.error)
//             }else{
//                 setData({})
//                 toast.success('user registered successfull')
//                 navigate('/student')
//             }
//         }catch(err){
//             console.log(err) 
//                }
//     }

//     const loginUser = async (e) =>{
//         e.preventDefault();
//         const {email,password} = credential
//         try{
//             const {data} = await axios.post('/login',{
//                 email,
//                 password
//             });
//             if(data.error){
//                 toast.error(data.error)
//             }else{
//                 setCredential({});
//                 toast.success('login successfull')
//                 navigate('/student')
//             }
//         }catch(err){
//             console.log(err)
//         }
//     }

//   return (
//     <div>
//       <h2>Register</h2>
//             <input type="text" placeholder="name" value={data.name} onChange={(e)=> setData({...data,name : e.target.value})} />
//             <input type="text" placeholder="email" value={data.email} onChange={(e)=> setData({...data,email : e.target.value})}  />
//             <input type="password" placeholder="Password" value={data.password} onChange={(e)=> setData({...data,password : e.target.value})}  />
//             <button onClick={registerUser}>Register</button>

//             <h2>Login</h2>
//             <input type="text" placeholder="email" value={credential.email} onChange={(e)=> setCredential({...credential,email : e.target.value})}  />
//             <input type="password" placeholder="Password"  value={credential.password} onChange={(e)=> setCredential({...credential,password : e.target.value})}  />
//             <button onClick={loginUser}>Login</button>
//     </div>
//   )
}
