import React from 'react'
// import Box1 from '../assets/EventImages/box1.png'
// import Box2 from '../assets/EventImages/box2.png'
// import Box3 from '../assets/EventImages/box3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faClock, faCalendar } from '@fortawesome/free-solid-svg-icons'

const eventcomp = ({event}) => {
  const imageUrl = event.image?.[0] ||  ''
  return (
    <div className=' w-[450px] bg-white rounded-[20px]'>
      <img className='rounded-t-[20px] object-cover' src={imageUrl} alt={event.event_name} />
      <div className='p-7 space-y-4 font-montserrat'>
        <p className='text-xl font-semibold text-center'>{event.event_name}</p>

        <div className="flex gap-2 text-[#514484] font-semibold ">
          <FontAwesomeIcon icon={faLocationDot} className="mt-1" />
          <p>{`${event.location.city}, ${event.location.state}, ${event.location.country}`}</p>
        </div>

        <div className='flex justify-between text-sm'>
          <div className='flex gap-2'>
            <FontAwesomeIcon icon={faCalendar} className='mt-1' />
            <p>{event.date}</p>
          </div>

          <div className='flex gap-2'>
            <FontAwesomeIcon icon={faClock} className='text-white bg-black rounded-2xl mt-1' />
            <p>{event.time_slot || 'N/A'}</p>
          </div>

        </div>

        <div className='text-center'>
          <button className='mt-4 py-3 px-4 rounded-md bg-[#e13535] text-white font-bold hover:bg-[#e7746a]'> VIEW DETAILS </button>
        </div>
      </div>
    </div>
  )
}

export default eventcomp