import React,{useEffect, useState} from 'react'
import axios from 'axios'
export default function TicketCards() {
  const [data,setData] = useState([])
  const getdata = async ()=>{
    try {
      const res = await axios.get("http://localhost:3000/movies");
      setData(res.data);

    } catch (error) {
      console.log("something went wrong while fetching data")
    }
  }
  useEffect(() => {
    getdata();
  }, [])
console.log(data)
  return (
    <div className="flex font-mono flex-wrap w-full ">
    {
      data.map((item)=>(
    <div key={item.id} className='pl-5 w-80 h-64 rounded-md m-10  text-xl text-white bg-cardColor  flex flex-col items-start justify-center'>
      <p>Name : {item.movieName}</p>
      <p>Date : {item.Date}</p>
      <p>Time : {item.Time}</p>
      <p>{item.address}</p>
      <p>No of tickets : {item.noOftickets}</p>
      <p>Price : {item.price}</p>
      <p>InstaId : {item.InstaId}</p>
        {/* <h1>Manjummel boys(Tel,2D)</h1>
        <p>Mon,08April| 7:35pm</p>
        <p>INOX, GVK One, Banjara Hills</p>
        <p>1 Tickets (Executive -G11)</p>
        <p>200/-</p>

        <p>Anyone interested can DM</p>
        <p>@anilreddy</p>    */}
    </div>

      ))
    }
    </div>
  )
}
