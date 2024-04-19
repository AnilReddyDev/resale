import React from 'react'
import { useState} from 'react'

export default function Post() {
  const [formDetails,setFormDetails] = useState({
    movieName:"",
    theatreName:"",
    date:"",
    time:"",
    address:"",
    nooftickets:"",
    price:"",
    instaid:""
  })
  // console.log(formDetails)
  return (
    <>
      <div className='flex flex-col w-full  h-screen font-mono items-center bg-darkgray justify-center'>
      <div className='bg-cardColor w-11/12 px-16 text-white sm:w-auto py-8 rounded-md'>
      <h1 className='text-4xl text-red-600 text-center mb-8'>Create post</h1>
      <form className='mx-auto flex items-center flex-col gap-4 sm:gap-5' >
      <input type="text" name="moviename" 
            className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-white bg-inputgray rounded-sm placeholder:text-white'
            placeholder='Movie Name'
            value={formDetails.movieName}
            onChange={(e) => setFormDetails({ ...formDetails, movieName: e.target.value })}
          />
        <input type="date" name="date" 
            className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-white bg-inputgray rounded-sm placeholder:text-white'
            placeholder='Date'
            value={formDetails.date}
            onChange={(e) => setFormDetails({ ...formDetails, date: e.target.value })}
          />
          <input type="time" name="time" 
            className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-white bg-inputgray rounded-sm placeholder:text-white'
            placeholder='Time'
            value={formDetails.time}
            onChange={(e) => setFormDetails({ ...formDetails, time: e.target.value })}
          />
        <input type="text" name="Theatre Name" 
            className=' w-96 h-14 bg-inputgray outline-none mx-9 text-xl px-3 text-white rounded-sm placeholder:text-white'
            placeholder='Theatre Name'
            value={formDetails.place}
            onChange={(e) => setFormDetails({ ...formDetails, theatreName: e.target.value })}
          />
          <input type="text" name="address" 
            className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-white bg-inputgray rounded-sm placeholder:text-white'
            placeholder='Address'
            value={formDetails.address}
            onChange={(e) => setFormDetails({ ...formDetails, address: e.target.value })}
          />
          <input type="number" name="nooftickets" 
            className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-white bg-inputgray rounded-sm placeholder:text-white'
            placeholder='Number of tickets'
            value={formDetails.nooftickets}
            onChange={(e) => setFormDetails({ ...formDetails, nooftickets: e.target.value })}
          />
          <input type="number" name="price" 
            className=' w-96 h-14 outline-none mx-9 text-xl px-3 text-white bg-inputgray rounded-sm placeholder:text-white'
            placeholder='Price'
            value={formDetails.price}
            onChange={(e) => setFormDetails({ ...formDetails, price: e.target.value })}
          />
          <input type="text" name="instaid" 
            className=' w-96 h-14  outline-none mx-9 text-xl px-3 text-white bg-inputgray rounded-sm placeholder:text-white'
            placeholder='Instagram id'
            value={formDetails.instaid}
            onChange={(e) => setFormDetails({ ...formDetails, instaid: e.target.value })}
           />

          <input type="button" value="submit" 
            className=' w-96 h-14 outline-none mx-9  text-xl px-3 bg-red-600 text-white  rounded-sm placeholder:text-black'
            onClick={() => {
              console.log(formDetails)
              
            }}
          />
        
      </form>
      </div>
      </div>
    </>
  )
}
