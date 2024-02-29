import React from 'react';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import profileImage from "../../assets/profile.png";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4
        md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white pt-20'>I am a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Passionate web developer with a strong foundation
                    in front-end and back-end technologies. With a keen
                    eye for design and a knack for problem-solving.
                    I specialize in creating dynamic and user-friendly websites
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500} 
                    className='group text-white w-fit px-6 py-3 my-5 flex items-center
                    rounded-md bg-gradient-to-r from-cyan-500 to-purple-800 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                        </span>   
                    </Link>
                </div>
            </div>

            <div>
                <img src={profileImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full ' />
            </div>
        </div>
    </div>
  )
}

export default Home