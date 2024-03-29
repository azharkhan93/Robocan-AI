/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Image from 'next/image';
const Cards = () => {
  return (
    <div className="font-sans ">
  <div className="container mx-auto flex justify-between p-8 ">
  
    
    <div className="flex-shrink-0 w-3/3 p-10  ">
    <div className="absolute top-54 left-20 mt-4 ml-4 mb-8 ">
            <Image
              src="/Ec8.png"
              alt="Top Left Image"
              height={500}
              width={400}
              className="rounded-full"
            />
          </div>
      <div className="grid grid-cols-1 gap-4 mt-32 ">
        
        <div className="relative bg-white p-2 z-10 rounded-2xl shadow-md w-[400px]" style={{ marginLeft: '380px' }}>
  
  <div className="absolute top-3 right-0 mt-2 mr-2">
    <svg width="40" height="20" viewBox="0 0 61 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#F5756B"/>
      <path d="M19 17.6842H60M60 17.6842L54.7286 12M60 17.6842L54.7286 24" stroke="#F5756B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19 17.6843H35" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
    </svg>
  </div>

  
  <div className="flex items-start">
    <Image
      src="/tar.png"
      alt="Sample Image"
      height={40}
      width={40}
    
      className="rounded-md mt-6"
    />

   
    <div className="ml-4">
      <h3 className="text-l font-semibold mb-2 mt-3">Increased Accuracy</h3>
      <p className="text-gray-600 text-xs mb-3">
        Our advanced algorithms and large dataset ensure highly accurate organ identification and diagnosis.
      </p>
    </div>
  </div>
</div>
<div className="relative bg-white p-2 z-10 rounded-2xl shadow-md w-[400px]"style={{ marginLeft: '290px' }}  >
  
  <div className="absolute top-3 right-0 mt-2 mr-2">
    <svg width="40" height="20" viewBox="0 0 61 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#F5756B"/>
      <path d="M19 17.6842H60M60 17.6842L54.7286 12M60 17.6842L54.7286 24" stroke="#F5756B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19 17.6843H35" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
    </svg>
  </div>

  
  <div className="flex items-start">
    <Image
      src="/sand.png"
      alt="Sample Image"
      height={40}
      width={40}
      // objectFit="cover"
      className="rounded-md mt-6"
    />

  
    <div className="ml-4">
      <h3 className="text-l font-semibold mb-2 mt-3">Time Savings</h3>
      <p className="text-gray-600 text-xs mb-3">
      With our automated systems, you can get results faster without sacrificing accuracy.
      </p>
    </div>
  </div>
</div>

<div className="relative bg-white p-2 rounded-2xl shadow-md w-[400px] ml-46 mt-4 " style={{ marginLeft: '360px' }} >
  
  <div className="absolute top-3 right-0 mt-2 mr-2">
    <svg width="40" height="20" viewBox="0 0 61 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#F5756B"/>
      <path d="M19 17.6842H60M60 17.6842L54.7286 12M60 17.6842L54.7286 24" stroke="#F5756B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19 17.6843H35" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
    </svg>
  </div>

 
  <div className="flex items-start">
    <Image
      src="/pil.png"
      alt="Sample Image"
      height={40}
      width={40}
      // objectFit="cover"
      className="rounded-md mt-6"
    />

    
    <div className="ml-4">
      <h3 className="text-l font-semibold mb-2 mt-3">Personalized Medicine
</h3>
      <p className="text-gray-600 text-xs mb-3">
      
By allowing customers to train their own models, we enable personalized medicine tailored to individual patients' needs.
      </p>
    </div>
  </div>
</div>



        
      </div>
    </div>
    
    {/* Right Section with Heading, Description, and Image */}
    <div className=" mr-32 flex-shrink-0 p-8 rounded-md">
      {/* Heading */}
      

      {/* Image using next/image */}
      <div className="relative  mb-4 -ml-[200px]">
      <h2 className="text-3xl font-bold mb-4">Benefits of Using Our Products
</h2>

      {/* Description */}
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        {/* Assuming you have imported the 'Image' component */}
        <Image
    src="/rightimage.png"
    alt="Sample Image"
    height={500}
    width={500}
    // objectFit="cover"
    className="rounded-md -ml-5"
  />

      </div>
    </div>
  </div>
</div>

  
  )
}

export default Cards;
