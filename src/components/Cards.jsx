import React from 'react'
import { IoIosPeople } from 'react-icons/io';
import { FaLocationDot, FaCalendarCheck } from 'react-icons/fa6';
import { MdShoppingBasket } from 'react-icons/md';

const Cards = () => {
  return (
    <section className='w-10/12 min-h-[80vh] mx-auto flex justify-center items-center p-10 max-ipad:p-7'>
      <div className='grid grid-cols-2 gap-10 max-ipad:grid-cols-1'>
        <div className='flex flex-col gap-y-7 border rounded-md p-7 hover:bg-[#8064A2] hover:text-white group transition-all duration-300 ease-in-out cursor-pointer justify-between max-ipad:items-center'>
            <h2 className='font-semibold text-lg flex items-center gap-x-3'><IoIosPeople className='text-[#8064a2] text-2xl group-hover:text-white' /> People</h2>
            <p className='max-ipad:text-center'>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
            <button className='w-fit border border-[#8064a2] text-[#8064a2] px-4 py-1 rounded-md text-sm font-[500] group-hover:text-white group-hover:border group-hover:border-white max-ipad:w-full'>Connect</button>
        </div>

        <div className='flex flex-col gap-y-7 border rounded-md p-7 group hover:bg-[#77933C] hover:text-white transition-all duration-300 ease-in-out cursor-pointer justify-between max-ipad:items-center'>
            <h2 className='font-semibold text-lg flex items-center gap-x-3'><FaLocationDot className='text-[#77933C] text-2xl group-hover:text-white' /> Place</h2>
            <p className='max-ipad:text-center'>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
            <button className='w-fit border border-[#8064a2] text-[#8064a2] px-4 py-1 rounded-md text-sm font-[500] group-hover:text-white group-hover:border group-hover:border-white max-ipad:w-full'>Meet up</button>
        </div>

        <div className='flex flex-col gap-y-7 border rounded-md p-7 group hover:bg-[#C0504D] hover:text-white transition-all duration-300 ease-in-out cursor-pointer justify-between max-ipad:items-center'>
            <h2 className='font-semibold text-lg flex items-center gap-x-3'><MdShoppingBasket className='text-[#C0504D] text-2xl group-hover:text-white' /> Product</h2>
            <p className='max-ipad:text-center'>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
            <button className='w-fit border border-[#8064a2] text-[#8064a2] px-4 py-1 rounded-md text-sm font-[500] group-hover:text-white group-hover:border group-hover:border-white max-ipad:w-full'>Get it</button>
        </div>

        <div className='flex flex-col gap-y-7 border rounded-md p-7 group hover:bg-[#0096C8] hover:text-white transition-all duration-300 ease-in-out cursor-pointer justify-between max-ipad:items-center' >
            <h2 className='font-semibold text-lg flex items-center gap-x-3'><FaCalendarCheck className='text-[#0096C8] text-2xl group-hover:text-white' /> Program</h2>
            <p className='max-ipad:text-center'>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
            <button className='w-fit border border-[#8064a2] text-[#8064a2] px-4 py-1 rounded-md text-sm font-[500] group-hover:text-white group-hover:border group-hover:border-white max-ipad:w-full'>Attend</button>
        </div>
      </div>
    </section>
  )
}

export default Cards
