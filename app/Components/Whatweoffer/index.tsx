import React from 'react'
import Image from 'next/image';
import Cards from '../Cards/index'
const Whatwe = () => {
  return (
    <div className=' relative bg-white' >
      {/* <Image
        src="/abstract.png" 
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        
      /> */}
    <div className="container mx-auto mt-10 ml-46 z-50">
      <h1 className="text-3xl font-bold mb-6 text-start ">What We Offer</h1>
  <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  
  <div className="flex flex-wrap ">
     
    <div className="w-full md:w-2/3 ">
   
      <Image
        src="/halfimg.png" // Replace with the actual path to your image
        alt="Description of the image"
        width={600} // Set the desired width
        height={400} // Set the desired height
        className="mb-4 ml-11"
      />
    </div>
    <div className=" md:w-1/3  -ml-96 mb-11 ">
    
    <div className="bg-white  p-4 rounded-2xl shadow-md relative">
  <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="30" fill="#FDEFEF"/>
    <path d="M32.6506 21.5455V39H29.4886V24.6222H29.3864L25.304 27.2301V24.3324L29.642 21.5455H32.6506Z" fill="#F5756B"/>
  </svg>

  <div className="absolute m-4 top-0 right-0">
    <svg width="82" height="36" viewBox="0 0 82 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#F5756B"/>
      <circle cx="39" cy="18" r="17" fill="white" stroke="#F5756B" stroke-width="2"/>
      <path d="M40 17.6842H81M81 17.6842L75.7286 12M81 17.6842L75.7286 24" stroke="#F5756B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>

  <h2 className="text-l font-bold mb-2 ml-11">Pre-Trained Models</h2>
  <p className="text-sm mb-4">
    Choose from our library of pre-trained models for various organs, including lungs,
    breasts, hearts, and brains. These models are trained on large datasets of
    high-quality images, ensuring accurate identification and diagnosis.
  </p>
</div>
<div className="bg-white p-4 rounded-md shadow-md mt-11 ml-24 ">
            
            <h2 className="text-l font-bold mb-2 ">Your Smaller Card Title</h2>
            <p className="text-sm mb-4">
              Your Smaller Card Description. Choose from our library of pre-trained models for various organs, including lungs, breasts, hearts, and brains.
            </p>
          </div>



    
    </div>
    
    
  </div>
  <Cards/>
</div>
</div>

    
  )
}

export default Whatwe;
