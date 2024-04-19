// import axios from 'axios';
import React, {  useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(email,password)
  }
  return (
    <div className='flex flex-col h-screen items-center font-mono bg-darkgray justify-center'>
      <div className='bg-cardColor w-11/12 text-white sm:w-auto py-8 rounded-md'>
      <h1 className='text-4xl text-center my-6'>Login</h1>
      <form className='mx-auto flex items-center flex-col gap-4 sm:gap-5' onSubmit={handleSubmit}>
        <input type="email" name="email" 
          className=' sm:w-96 h-14 outline-none mx-9 text-xl px-3 bg-inputgray text-white rounded-sm placeholder:text-white'
        placeholder='your@email.com'
        value={email}
        onChange={e => setEmail(e.target.value)} />
        
        <div className='relative'>
        <input
          type={showPassword ? 'text' : 'password'}
         className=' sm:w-96 h-14 outline-none mx-9 text-xl px-3 bg-inputgray text-white rounded-sm placeholder:text-white'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {showPassword ? (
          <FaEye className='absolute w-7 h-7 right-12 top-3 text-black' onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
          ) : (
          <FaEyeSlash className='absolute w-7 h-7 right-12 top-3 text-black' onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
        )}
      </div>
        <button    className=' w-96 h-14 outline-none mx-9  text-xl px-3 bg-red-600 text-white  rounded-sm placeholder:text-black'>Login</button>
        <div className='text-center py-2 text-white'>
          Don't have account yet ? &#32;
          <Link to={"/signup"} className=' text-red-600 underline'>
              Register Now
          </Link>
        </div>
      </form>
      </div>
    </div>
  )
}
