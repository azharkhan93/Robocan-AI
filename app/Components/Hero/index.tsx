import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-[600px] mt-0 lg:mt-28">
    {/* Background Image */}
    <Image
      src="/hero1.png" // Replace with the actual path to your background image
      alt="Background Image"
      layout="fill"
      objectFit="cover"
    />
<div className="absolute top-28  left-28 p-8 ">
  <div className='max-w-2xl'>
<p className="text-black text-sm">
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</p>
        </div>
        <h1 className="text-black max-w-xl text-2xl md:text-5xl lg:text-5xl font-plus-jakarta-sans font-semibold mt-4">
          Unlock the Power of AI in <span className='text-5xl text-range mt-3'>Medical Imaging</span>
        </h1>
        <p className="text-black text-l max-w-xl mt-4">
          Our cutting-edge technology helps doctors diagnose diseases in organs more accurately and quickly than ever before.
        </p>
        {/* <button className="bg-blue-500 text-white px-4 py-2 mt-4">Get Started</button> */}
        <div className="inline-flex mt-6 " >
  <a href="#" className="inline-flex rounded-full items-center justify-center px-5 py-2 text-base font-medium text-indigo-700 transition duration-150 ease-in-out bg-white border border-transparent hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300">
    {/* New Circle SVG */}
    <svg width="40" height="40" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-4">
      <circle cx="34" cy="34" r="33" fill="white" stroke="#F5756B" stroke-width="2"/>
    </svg>

    {/* Original SVG Icon */}
    <svg width="18" height="20" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-7">
      <path d="M1 28L20 1M20 1C17.1667 2.66667 9 6.5 1 2.5M20 1C19.6667 5.5 20.2 15.1 25 17.5" stroke="#F5756B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    {/* Contact Us Text */}
    <span className='ml-4 text-sm text-range'>Get Started</span>
  </a>
</div>
<div className="inline-flex mt-3  ml-4 ">
  <a href="#" className="inline-flex rounded-full items-center justify-center px-5 py-2 text-base font-medium text-indigo-700 transition duration-150 ease-in-out  border border-transparent  hover:bg-white focus:outline-none focus:shadow-outline ">
    {/* New Circle SVG */}
    <svg width="35" height="35" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-4">
      <circle cx="34" cy="34" r="33" fill="white" stroke="#F5756B" stroke-width="2"/>
    </svg>

    {/* Original SVG Icon */}
    <svg width="20" height="20" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-7">
      <path d="M1 28L20 1M20 1C17.1667 2.66667 9 6.5 1 2.5M20 1C19.6667 5.5 20.2 15.1 25 17.5" stroke="#F5756B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    {/* Contact Us Text */}
    <span className='ml-4 text-sm text-range'>Start Free trial</span>
  </a>
</div>
      </div>
      <div className="relative w-[470px] h-[600px] ml-auto top-28 right-40">
      <Image
    src="/echero.png" // Replace with the actual path to your image
    alt="Additional Image"
    width={600} // Set your desired width
    height={600} // Set your desired height
    // objectFit="cover"
  />
      </div>
      <div className="relative   w-[400px] h-[300px] mt-[-170px] ml-auto bottom-72 -left-48 right-52">
        <Image
          src="/Ec6.png" 
          alt="Additional Image"
          width={600} 
          height={600}
        />
      </div>
      <div className="relative w-[300px] h-[150px] mt-[-330px] ml-auto bottom-72 right-52">
        <Image
          src="/heart.png" 
          alt="Additional Image"
          width={400} 
          height={300}
        />
      </div>
      <div className="absolute top-11 left-1/2  w-[100px] h-[100px]">
        <Image
          src="/herolung.png"
          alt="New Additional Image"
          width={80}
          height={80}
        />
      </div>
      <div className="absolute left-1/2 bottom-0 transform  mb-11 w-[80px] h-[80px] ml-11">
        <Image
          src="/brain.png"
          alt="New Additional Image"
          width={80}
          height={80}
        />
      </div>
      
      <div className="absolute left-36 bottom-8 flex gap-3 z-20 ">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            width="30"
            height="8"
            viewBox="0 0 50 6"
            fill="#EED9D7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="50" height="6" rx="3" fill="#EED9D7" />
          </svg>
        ))}
      </div>
      
    
  </div>
  )
}

export default Hero;