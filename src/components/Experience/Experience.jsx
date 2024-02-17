import React from 'react';
import html from "../../assets/experience/html.png";
import css from "../../assets/experience/css.png";
import js from "../../assets/experience/javascript.png";
import node from "../../assets/experience/node.png";
import reactImage from "../../assets/experience/react.png";
import taiwind from "../../assets/experience/tailwind.png";
import github from "../../assets/experience/github.png";
import mongodb from "../../assets/experience/mongodb.jpg";
import express from "../../assets/experience/express.png";
import typescript from "../../assets/experience/typescript.png";
import nextJS from "../../assets/experience/nextJS.png";
import prisma from "../../assets/experience/prisma.png";

const Experience = () => {

  const techs = [
    {
        id: 1,
        src: html,
        title: 'HTML',
        style: "shadow-orange-500"
    },

    {
        id: 2,
        src: css,
        title: 'CSS',
        style: "shadow-blue-700"
    },

    {
        id: 3,
        src: js,
        title: 'javaScript',
        style: "shadow-yellow-500"
    },

    {
        id: 4,
        src: node,
        title: 'Nodejs',
        style: "shadow-green-800"
    },

    {
        id: 5,
        src: express,
        title: 'Express js',
        style: "shadow-yellow-300"
    },

    {
        id: 6,
        src: mongodb,
        title: 'mongoDB',
        style: "shadow-green-500"
    },

    {
        id: 7,
        src: taiwind,
        title: 'tailwind css',
        style: "shadow-sky-700"
    },

    {
        id: 8,
        src: reactImage,
        title: 'reactjs',
        style: "shadow-blue-400"
    },

    {
        id: 9,
        src: github,
        title: 'GitHub',
        style: "shadow-gray-500"
    },

    {
        id: 10,
        src: typescript,
        title: 'TypeScript',
        style: "shadow-indigo-400"
    },

    {
        id: 11,
        src: nextJS,
        title: 'NextJS',
        style: "shadow-gray-200"
    },

    {
        id: 12,
        src: prisma,
        title: 'Prisma',
        style: "shadow-blue-700"
    },
  ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full
        h-full text-white'>
            <div className='pt-[145px] mt-[160px]'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            {
                techs.map(({id,src,title,style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                      <img src={src} alt='' className='w-20 mx-auto' />
                      <p className='mt-4'>
                        {title}
                      </p>
                    </div>
                ))
            }
               
            </div>
        </div>
    </div>
  )
}

export default Experience