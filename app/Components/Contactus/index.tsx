/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="flex items-center justify-center p-5 bg-#F7FFFE  h-[450px]">
    <div className="  relative flex lg:h-[300px] flex-col items-center w-full max-w-6xl px-4 py-8 mx-auto text-center rounded-2xl lg:text-left lg:block  sm:px-6 md:pb-0 md:pt-12 lg:px-12 lg:py-12">
    <Image
    src="/contactbg.png"
    alt="Background Image"
    layout="fill"
    objectFit="cover"
    // className="absolute "
  />
    
        
        <p className="mt-1 mb-10 text-base font-normal text-gray-700 text-center xl:text-base xl:tracking-wider lg:mb-0">
        Want More Information</p>
            <h2
            className=" max-w-3xl mx-auto  text-gray-800 inter-bold-46  my-4 text-3xl text-center font-bold   sm:text-3xl md:text-4xl lg:my-0 xl:text-1xl sm:leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </h2>
        
<div className="flex items-center justify-center mb-8 lg:mt-6 lg:mb-0 relative">
  


<div className="inline-flex">
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
    <span className='ml-4 text-sm text-range'>Contact Us</span>
  </a>
</div>

</div>
<div className="absolute bottom-8 right-8 rounded-full">
    <Image
      src="/bottomimg.png"  
      alt="Small Image"
      width={80}  
      height={60}  
    //   style={{ border: '2px solid #000' }}
    />
  </div>
  <div className="absolute top-8 left-11 rounded-full">
      <Image
        src="/topimage.png"  // Replace with the actual path to your top left image
        alt="Small Image"
        width={50}
        height={30}
        // style={{ border: '2px solid #000' }}
      />
    </div>

        
    </div>
</div>
  )
}

export default Contact;
