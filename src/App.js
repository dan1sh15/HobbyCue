import './App.css';
import Cards from './components/Cards';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { FaPlusCircle } from 'react-icons/fa'
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { TbPlayerPlayFilled } from 'react-icons/tb';
import userImg from './assets/userimg.png';
import people from './assets/peoples.png';
import Footer from './components/Footer';
import { GoChevronUp } from 'react-icons/go';
import { useEffect, useState } from 'react';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <main className='poppins-regular min-h-screen relative'>
      <Navbar />
      <Home />
      <Cards />

      <section className='bg-[#F7FDFF] p-7 flex items-center justify-center'>
        <div className='w-10/12 mx-auto border rounded-lg flex flex-col gap-y-5 p-7'>
          <h1 className='font-semibold flex gap-x-5 items-center text-lg max-phone:text-[1rem] max-phone:gap-x-3'><FaPlusCircle className='text-[#0096C8] text-xl max-ipad:text-lg max-phone:text-[1rem]' />Add your own</h1>
          <p className='max-ipad:text-[1rem] max-phone:text-sm'>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
          <button className='w-fit border border-[#8064a2] text-[#8064a2] px-4 py-1 rounded-md text-sm font-[500] hover:text-white hover:bg-[#8064a2] transition-all duration-200 ease-in-out'>Add new</button>
        </div>
      </section>

      <section className='py-20 flex items-center justify-center'>
        <div className='bg-[#F7F5F9] w-10/12 mx-auto rounded-lg p-7 flex flex-col gap-y-5 max-ipad:items-center'>
          <div className='flex items-center gap-x-5 text-lg font-semibold'>
            <div className='w-fit rounded-full bg-[#8064a2] p-3 flex items-center justify-center'>
              <BiSolidQuoteAltLeft className='text-white' />
            </div>
            Testimonials
          </div>

          <p className='text-[#6D747A] text-[1rem] max-phone:text-sm max-phone:text-center'>
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>

          <div className='flex items-center justify-between gap-x-5 max-ipad:flex-col-reverse max-ipad:gap-y-5 max-ipad:w-full'>
            <div className='bg-[#CCC1DA] rounded-md flex gap-x-3 w-[70%] max-ipad:w-full items-center p-3 px-7'>
                <div className='w-fit rounded-full bg-white p-3'>
                  <TbPlayerPlayFilled className='text-[#8064a2]' />
                </div>
                <div className='w-full h-2 bg-white flex items-center rounded-lg'>   
                  <div className='h-3 w-3 bg-[#8064a2] rounded-full' />
                </div>
                <p className='text-[#8064A2]'>0:00</p>

                <img src={userImg} className='w-[60px] h-[60px] rounded-full' alt="" />
            </div>

            <div className='flex gap-x-3 items-center w-[30%] max-ipad:w-full justify-center'>
              <img src={userImg} className='rounded-full w-[100px] h-[100px]' alt="" />
              <div className='flex flex-col gap-y-3 text-sm'>
                <p className='max-phone:text-sm'>Shubha Nagarajan</p>
                <p className='text-[#0096C8] max-ipad:text-sm'>Classical Dancer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#F7FDFF] pt-20'>
        <div className='w-10/12 mx-auto flex flex-col gap-y-7 max-phone:gap-y-5 justify-between h-full'>
          <h1 className='text-2xl italic max-ipad:text-xl max-phone:text-lg font-semibold'>Your <span className='text-[#8064a2]'>Hobby</span>, <span className='text-[#0096C8]'>Your Community...</span></h1>
          <button className='text-white bg-[#8064a2] px-3 py-1 w-fit rounded-lg'>Get started</button>

          <img src={people} className='w-full' alt="" />
        </div>
      </section>

      <Footer />

      {
          isVisible && (
          <div onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}  className='w-fit bg-white rounded-full shadow-2xl fixed z-10 right-4 border border-[#8064a2] bottom-4 p-3 hover:bg-[#8064a2] group cursor-pointer' >
            <GoChevronUp className='text-[#8064a2] font-bold group-hover:text-white' />
        </div>)
      }
    </main>
  );
}

export default App;
