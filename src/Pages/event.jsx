import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Eventcomp from '../Component/eventcomp';
const Event = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://casselys.com/api/events?search=&per_page=10&page=1')
      .then((res) => {
        setEvents(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("API error", err)
        setEvents([]);
        setIsLoading(false);
      })
  }, []);

  if (isLoading)
    return <div className='text-center py-32'>Loading Event....</div>
  if (events.length === 0)
    return <div className='text-center py-32'>No Event Found</div>
  return (
    <div className='bg-[#e8e8e8] min-h-screen py-32 px-40'>
      <div className='flex justify-between py-5'>
        <p className='text-5xl font-bold text-[#333]'>Events</p>
        <p className='font-bold cursor-pointer '>View All Events</p>
      </div>

      <div className=' flex gap-7'>
        {events.map((event) => (
          <Eventcomp key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default Event