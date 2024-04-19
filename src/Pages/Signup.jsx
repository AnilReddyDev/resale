import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  async function registerUser(ev){
    ev.preventDefault();
   console.log(username,email,password)
  }

  
  return (
    <div className='flex flex-col font-mono h-screen items-center bg-darkgray justify-center'>
      <div className=' bg-cardColor py-5 rounded-md '>
        <h1 className='text-4xl text-white text-center my-4'>Registor</h1>
        <form className=' mx-auto flex items-center flex-col gap-4' onSubmit={registerUser}>
          <input type="text" name="username" 
            className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-white bg-inputgray rounded-sm placeholder:text-white'
            placeholder='Name'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          
          <input type="email" name="email" placeholder='your@email.com'
            className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-white bg-inputgray rounded-sm placeholder:text-white'
            value={email}
            onChange={e => setEmail(e.target.value)} />
          <input type="password" name="password"
            className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-white bg-inputgray rounded-sm placeholder:text-white'
            placeholder='password'
            value={password}
            onChange={e => setPassword(e.target.value)} />
          <button   className=' w-96 h-14 outline-none mx-9  text-xl px-3 bg-red-600 text-white  rounded-sm placeholder:text-black'>Register</button>
          <div className='text-center py-2 text-white'>
            Already a member ? &#32;
            <Link to={"/"} className='text-red-600 underline'>
              Login Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}