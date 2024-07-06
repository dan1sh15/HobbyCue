import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaGooglePlusG, FaYoutube, FaTelegram } from 'react-icons/fa';
import { GoChevronUp } from 'react-icons/go';

const Footer = () => {

    const [showDropMenu1, setShowDropMenu1] = useState(true);
    const [showDropMenu2, setShowDropMenu2] = useState(true);
    const [showDropMenu3, setShowDropMenu3] = useState(true);

  return (
    <footer className='w-10/12 mx-auto'>
        <div className='flex flex-col p-10 max-phone:px-5 pb-0 gap-y-10'>
            <div className='grid grid-cols-4 max-xl:grid-cols-3 gap-9 max-phone:gap-5 max-phone:grid-cols-1 max-md:grid-cols-2'> 
                <div className='flex flex-col gap-y-5 max-phone:gap-y-3 text-xs max-phone:text-sm'>
                    <p  onClick={() => {
                        setShowDropMenu1(!showDropMenu1);
                    }}  className='font-semibold flex items-center justify-between max-phone:bg-[#EBEDF0] max-phone:cursor-pointer max-phone:py-2 max-phone:px-3 max-phone:rounded-md'>Hobbycue <GoChevronUp className='phone:hidden' /></p>
                    <ul className={`flex flex-col gap-y-2 max-phone:px-3 ${showDropMenu1 ? 'flex': 'hidden'}`}>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>About Us</li>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>Our Services</li>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>Work with Us</li>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>FAQ</li>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>Contact Us</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-y-5 text-xs max-phone:text-sm'>
                    <p  onClick={() => {
                            setShowDropMenu2(!showDropMenu2);
                        }}  className='font-semibold flex items-center justify-between max-phone:bg-[#EBEDF0] max-phone:cursor-pointer max-phone:py-2 max-phone:px-3 max-phone:rounded-md'>How Do I <GoChevronUp className='phone:hidden' /></p>
                    <ul className={`flex flex-col gap-y-2 max-phone:px-3 ${showDropMenu2 ? 'flex': 'hidden'}`}>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>Sign Up</li>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>Add a listing</li>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>Claim listing</li>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>Post a query</li>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>Add ablog spot</li>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>Other Queries</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-y-5 text-xs max-phone:text-sm'>
                <p  onClick={() => {
                            setShowDropMenu3(!showDropMenu3);
                        }}  className='font-semibold flex items-center justify-between max-phone:bg-[#EBEDF0] max-phone:cursor-pointer max-phone:py-2 max-phone:px-3 max-phone:rounded-md'>Quick Links <GoChevronUp className='phone:hidden' /></p>
                    <ul className={`flex flex-col gap-y-2 max-phone:px-3 ${showDropMenu3 ? 'flex': 'hidden'}`}>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>Listings</li>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>Blog posts</li>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>Shop / Store</li>
                        <li className='cursor-pointer hover:text-[#8064a2] transition-all duration-200 ease-in-out'>Community</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-y-7 text-xs max-phone:text-sm'>
                    <div className='flex flex-col gap-y-3'>
                        <p className='font-semibold'>Social Media</p>
                        <div className='flex items-center gap-x-3 flex-wrap gap-3 justify-center'>
                            <div className='w-fit rounded-full p-2 cursor-pointer bg-[#EBEDF0]'>
                                <FaFacebookF className='text-[#6D747A] text-lg' />
                            </div>
                            <div className='w-fit rounded-full p-2 cursor-pointer bg-[#EBEDF0]'>
                                <FaTwitter className='text-[#6D747A] text-lg' />
                            </div>
                            <div className='w-fit rounded-full p-2 cursor-pointer bg-[#EBEDF0]'>
                                <FaInstagram className='text-[#6D747A] text-lg' />
                            </div>
                            <div className='w-fit rounded-full p-2 cursor-pointer bg-[#EBEDF0]'>
                                <FaPinterest className='text-[#6D747A] text-lg' />
                            </div>
                            <div className='w-fit rounded-full p-2 cursor-pointer bg-[#EBEDF0]'>
                                <FaGooglePlusG className='text-[#6D747A] text-lg' />
                            </div>
                            <div className='w-fit rounded-full p-2 cursor-pointer bg-[#EBEDF0]'>
                                <FaYoutube className='text-[#6D747A] text-lg' />
                            </div>
                            <div className='w-fit rounded-full p-2 cursor-pointer bg-[#EBEDF0]'>
                                <FaTelegram className='text-[#6D747A] text-lg' />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-3 max-phone:text-sm'>
                        <p className='text-xs font-semibold'>Invite Friends</p>
                        <label htmlFor="invite" className='border-[#8064a2] border w-full flex items-center justify-between rounded-lg max-sm:flex-col max-phone:flex'>
                            <input 
                                type="email"
                                className='outline-none w-full  bg-transparent py-2 px-5'
                                placeholder='Email Id'
                            />
                            <button className='bg-[#8064a2] font-semibold w-fit h-full rounded-r-lg px-3  text-white outline-none max-ipad:w-full max-ipad:rounded'>Invite</button>
                        </label>
                    </div>
                </div>
            </div>

            <div className='bg-[#F7F5F9] text-center text-xs py-5 font-semibold'>
                © Purple Cues Private Limited
            </div>
        </div>
    </footer>
  )
}

export default Footer
