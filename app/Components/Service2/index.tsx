/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';

const Service2 = () => {
  return (
    <div className=" p-8 mt-11">
      <div className="container  flex">
        {/* Left side with image */}
        <div className="w-1/2 pr-8">
        <Image
        src='/2.png'
        alt='image'
        width={400}
        height={300}
        className="rounded ml-24"
      />
        </div>

        
  
        <div className="w-1/2">
        <div className="relative  -ml-11">
    <Image
      src="/3.png"
      alt="Your Image Alt Text"
    width={200}
    height={100}
      
    />
  </div>
  <div className='-mt-11  absolute'>
          <h2 className="text-3xl font-bold mb-4  ">Pre-Trained Models</h2>
          <p className="text-gray-700 text-l max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          </div>
          <div className="flex items-center mt-20 gap-8">
            <Image
              src="/a.png"
              alt="Your Image Alt Text"
              width={60}
              height={60}
              className="mr-2"
            />
            <div className='-ml-4 text-1xl'>
            <h1>Neural AI</h1>
            </div>
            <Image
              src="/b.png"
              alt="Your Image Alt Text"
              width={60}
              height={60}
              className="mr-2"
            />
            <div className='-ml-4 text-1xl'>
            <h1>Cardio AI</h1>
            </div>
            <Image
              src="/av.png"
              alt="Your Image Alt Text"
              width={60}
              height={60}
              className="mr-2"
            />
            <div className='-ml-4 text-1xl'>
            <h1>Breast AI</h1>
            </div>
          </div>
          <div className="flex items-center mt-8  gap-8">
            <Image
              src="/c.png"
              alt="Your Image Alt Text"
              width={60}
              height={60}
              className="mr-2"
            />
            <div className='-ml-4 text-1xl'>
            <h1>Liver AI</h1>
            </div>
            <Image
              src="/d.png"
              alt="Your Image Alt Text"
              width={60}
              height={60}
              className="mr-2"
            />
            <div className='-ml-4 text-1xl'>
            <h1>Bone AI</h1>
            </div>
            <Image
              src="/e.png"
              alt="Your Image Alt Text"
              width={60}
              height={60}
              className="mr-2"
            />
            <div className='-ml-4 text-1xl'>
            <h1>Lung AI</h1>
            </div>
          </div>
          
          {/* <div className="flex items-center ">
            <Image
              src="/c.png"
              alt="Your Image Alt Text"
              width={50}
              height={50}
              className="mr-2"
            />
            <h1>Liver AI</h1>
            <Image
              src="/d.png"
              alt="Your Image Alt Text"
              width={50}
              height={50}
              className="mr-2"
            />
            <h1>Bone AI</h1>
            <Image
              src="/e.png"
              alt="Your Image Alt Text"
              width={50}
              height={50}
              className="mr-2"
            />
            <h1>Lung AI</h1>
          </div> */}
          <div className="flex items-center mt-8 gap-8">
            <Image
              src="/f.png"
              alt="Your Image Alt Text"
              width={60}
              height={60}
              className="mr-2"
            />
            <div className='-ml-4 text-1xl'>
            <h1>Heart AI</h1>
            </div>
            <Image
              src="/g.png"
              alt="Your Image Alt Text"
              width={60}
              height={60}
              className="mr-2"
            />
            <div className='-ml-4 text-1xl'>
            <h1>Pancreas AI</h1>
            </div>
            
            
          </div>
          <div className="inline-flex mt-6 ml-2 ">
  <a href="#" className="inline-flex rounded-full items-center justify-center px-5 py-2 text-base font-medium text-indigo-700 transition duration-150 ease-in-out bg-white border border-transparent  hover:bg-white focus:outline-none focus:shadow-outline ">
    {/* New Circle SVG */}
    <svg width="35" height="35" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-4">
      <circle cx="34" cy="34" r="33" fill="white" stroke="#F5756B" stroke-width="2"/>
    </svg>

    {/* Original SVG Icon */}
    <svg width="20" height="20" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-7">
      <path d="M1 28L20 1M20 1C17.1667 2.66667 9 6.5 1 2.5M20 1C19.6667 5.5 20.2 15.1 25 17.5" stroke="#F5756B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    {/* Contact Us Text */}
    <span className='ml-4 text-sm text-range'>Explore All Products</span>
  </a>
</div>
          
        </div>
      </div>
    </div>
    
  )
}

export default Service2;
{/* <div className="container mx-auto p-4 bg-white  mt-8 left-44" >
  <div className="flex flex-col md:flex-row left-96">
    <div className="md:w-1/3 mb-4 md:mb-0">
      <div className="">
      <Image
        src='/2.png'
        alt='image'
        width={400}
        height={300}
        className="w-full h-auto rounded"
      />
    </div>
    </div>
    
    <div className="md:w-2/3 ml-48">
    
      <h1 className="text-2xl font-bold mb-4">Pre-Trained Models</h1>
      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <div className="flex items-center">
  <Image
    src="/av.png"
    alt="Your Image Alt Text"
    width={50}
    height={50}
    className="mr-2" 
  />
  <h1>Title 1</h1>

  <Image
    src="/av.png"
    alt="Your Image Alt Text 2"
    width={50}
    height={50}
    className="mr-2" 
  />
  <h1>Title 2</h1>

  <Image
    src="/av.png"
    alt="Your Image Alt Text 3"
    width={50}
    height={50}
    className="mr-2" // Add margin if needed
  />
  <h1>Title 3</h1>
</div>
<div className="flex items-center">
  <Image
    src="/av.png"
    alt="Your Image Alt Text"
    width={50}
    height={50}
    className="mr-2" 
  />
  <h1>Title 1</h1>

  <Image
    src="/av.png"
    alt="Your Image Alt Text 2"
    width={50}
    height={50}
    className="mr-2" 
  />
  <h1>Title 2</h1>

  <Image
    src="/av.png"
    alt="Your Image Alt Text 3"
    width={50}
    height={50}
    className="mr-2" 
  />
  <h1>Title 3</h1>
</div>
<div className="flex items-center">
  <Image
    src="/av.png"
    alt="Your Image Alt Text"
    width={50}
    height={50}
    className="mr-2" 
  />
  <h1>Title 1</h1>

  <Image
    src="/av.png"
    alt="Your Image Alt Text 2"
    width={50}
    height={50}
    className="mr-2" 
  />
  <h1>Title 2</h1>

 
</div>


      

    
    </div>
  </div>
  </div> */}