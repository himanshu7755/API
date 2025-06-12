import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Eventcomp from '../Component/eventcomp';
import { fetchEvent } from '../API/Api';
const Event = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchEvent()
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("API error", err)
        setEvents([]);
        setIsLoading(false);
      })
  }, []);

  if (isLoading)
    return <div className='text-center py-32 animate-pulse text-lg'>Loading Event....</div>
  if (events.length === 0)
    return <div className='text-center py-32'>No Event Found</div>
  return (
    <div className='bg-[#e8e8e8] min-h-screen py-10 px-10 sm:py-32 sm:px-40'>
      <div className='flex justify-between py-5'>
        <p className='text-5xl font-bold text-[#333]'>Events</p>
        <p className='font-bold cursor-pointer '>View All Events</p>
      </div>

      <div className='flex flex-wrap md:flex-wrap gap-7'>
        {events.map((event) => (
          <Eventcomp key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default Event