import React from 'react';
import homyz from "../../assets/portfolio/homyz.png";
import memories from "../../assets/portfolio/memories.png";
import removebg from "../../assets/portfolio/removebg.png";
import ecommerce from "../../assets/portfolio/ecommerce.png";
import discord from "../../assets/portfolio/discord.png";

const Portfolio = () => {
   
    const portfolios = [
        {
            id: 1,
            src: homyz,
            handleClick ()  {
               const link = "https://github.com/Rayleigh33/Homyz";

               window.open(link,'_blank');
           },

           handleDemo () {
            const link = "https://homyz-three.vercel.app/";
            window.open(link,'_blank');
        }
        },

        {
            id: 2,
            src: memories,
            handleClick ()  {
                const link = "https://github.com/Rayleigh33/memories-frontend";
 
                window.open(link,'_blank');
            },

            handleDemo () {
                const link = "https://memories-frontend-puce.vercel.app/posts";
                window.open(link,'_blank');
            }
        },

        {
            id: 3,
            src: ecommerce,
            handleClick ()  {
                const link = "https://github.com/Rayleigh33/Ecommerce";
 
                window.open(link,'_blank');
            }
        },

        {
            id: 4,
            src: removebg,
            handleClick ()  {
                const link = "https://github.com/Rayleigh33/background-image-remover";
 
                window.open(link,'_blank');
            },

            handleDemo () {
                const link = "https://background-image-remover.vercel.app/";
                window.open(link,'_blank');
            }
        },

        {
            id: 5,
            src: discord,
            handleClick ()  {
                const link = "https://github.com/Rayleigh33/discord-clone";
 
                window.open(link,'_blank');
            },

            handleDemo () {
                const link = "https://discord-clone-production-ee91.up.railway.app";
                window.open(link,'_blank');
            }
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 pt-80'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-60'>

            {
                portfolios.map(({id,src,handleClick,handleDemo}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        <button onClick={handleClick}
                        className='w-1/2 px-6 py-4 m-4 duration-400 hover:scale-105'>Code</button>
                        <button onClick={handleDemo}
                         className='w-1/2 px-6 py-4 m-4 duration-400 hover:scale-105'>Demo</button>
                    </div>
                </div>
                ))
            }
               
            </div>
        </div>
    </div>
  )
}

export default Portfolio