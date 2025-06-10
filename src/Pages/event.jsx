import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Eventcomp from '../Component/eventcomp';
const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    axios.get('https://casselys.com/api/events?search=&per_page=10&page=1')
    .then((res)=>{
      setEvents(res.data.data);
    })
    .catch((err)=>{
      console.log("API error", err)
    })
  }, []);
  return (
    <div className='bg-[#e8e8e8] min-h-screen py-32 px-40'>
      <div className='flex justify-between py-5'>
        <p className='text-5xl font-bold text-[#333]'>Events</p>
        <p className='font-bold cursor-pointer '>View All Events</p>
      </div>

      <div className=' flex gap-7'>
        {events.map((index)=>(
        <Eventcomp key={index.id} event={index}/>
        ))}
      </div>
    </div>
  )
}

export default Event