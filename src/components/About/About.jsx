import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center
        w-full h-full pt-80 pb-24'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>ABOUT</p>
            </div>
            <p className='text-xl mt-20'>
            Enthusiastic full stack web developer, dedicated to building immersive digital experiences. Proficient in both front-end and back-end technologies, with expertise in HTML, CSS, JavaScript, React, Node.js, and database management. Skilled in crafting responsive and user-centric designs that seamlessly integrate functionality and aesthetics. With a keen eye for detail, I strive to optimize performance and ensure efficient, secure, and scalable solutions. 
            </p>

            <br />

            <p className='text-xl'>My passion for innovation and problem-solving drives me to create impactful web applications that cater to both user needs and business goals. Let's collaborate to turn visionary ideas into exceptional, functional reality.</p>
        </div>
    </div>
  )
}

export default About