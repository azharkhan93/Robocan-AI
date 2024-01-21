import React from 'react'
import Image from 'next/image';
import Cards from '../Cards/index'
const Whatwe = () => {
  return (
    <div className=' relative bg-white' >
      
    <div className="container mx-auto mt-10 ml-46 z-50 ml-36">
      <h1 className="text-4xl font-bold mb-4 ml-11 ">What We Offer</h1>
  <p className="text-lg ml-11 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

  
  <div className="flex flex-wrap ">
     
    <div className="w-full md:w-2/3 ">
   
      <Image
        src="/halfimg.png" 
        alt="Description of the image"
        width={600} 
        height={400} 
        className="mb-4 ml-11"
      />
    </div>
    <div className=" md:w-1/3  -ml-96 mb-11 ">
    
    <div className="bg-white  p-4 rounded-2xl shadow-md relative">
    <div className="absolute m-4 top-0 -ml-2 space-x-2">
  <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" rx="30" fill="#FDEFEF"/>
    <path d="M32.6506 21.5455V39H29.4886V24.6222H29.3864L25.304 27.2301V24.3324L29.642 21.5455H32.6506Z" fill="#F5756B" />
  </svg>
</div>

  <div className="absolute m-4 top-0 right-0 -mb-6">
    <svg width="82" height="36" viewBox="0 0 82 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#F5756B"/>
      <circle cx="39" cy="18" r="17" fill="white" stroke="#F5756B" stroke-width="2"/>
      <path d="M40 17.6842H81M81 17.6842L75.7286 12M81 17.6842L75.7286 24" stroke="#F5756B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>

  <h2 className="text-l font-bold mb-2 ml-9">Pre-Trained Models</h2>
  <p className="text-sm mb-4 ml-9 mt-2">
    Choose from our library of pre-trained models for various organs, including lungs,
    breasts, hearts, and brains. These models are trained on large datasets of
    high-quality images, ensuring accurate identification and diagnosis.
  </p>
</div>

<div className="md:w-1/3 mx-auto mb-11 mt-6 relative">
            <div className="bg-white p-4 rounded-2xl shadow-md ml-20 h-[300px w-[450px]">
             
              
  <div className="absolute m-4 ">
              <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.551136 18V15.7159L6.6108 9.77557C7.19034 9.19034 7.6733 8.67045 8.05966 8.21591C8.44602 7.76136 8.7358 7.32102 8.92898 6.89489C9.12216 6.46875 9.21875 6.0142 9.21875 5.53125C9.21875 4.98011 9.09375 4.50852 8.84375 4.11648C8.59375 3.71875 8.25 3.41193 7.8125 3.19602C7.375 2.98011 6.87784 2.87216 6.32102 2.87216C5.74716 2.87216 5.24432 2.99148 4.8125 3.23011C4.38068 3.46307 4.04545 3.79545 3.80682 4.22727C3.57386 4.65909 3.45739 5.1733 3.45739 5.76989H0.448864C0.448864 4.66193 0.701705 3.69886 1.20739 2.88068C1.71307 2.0625 2.40909 1.42898 3.29545 0.980114C4.1875 0.53125 5.21023 0.306818 6.36364 0.306818C7.53409 0.306818 8.5625 0.525568 9.44886 0.963068C10.3352 1.40057 11.0227 2 11.5114 2.76136C12.0057 3.52273 12.2528 4.39204 12.2528 5.36932C12.2528 6.02273 12.1278 6.66477 11.8778 7.29545C11.6278 7.92614 11.1875 8.625 10.5568 9.39205C9.93182 10.1591 9.05398 11.0881 7.9233 12.179L4.91477 15.2386V15.358H12.517V18H0.551136Z" fill="#F5756B" />
              </svg>
              
              </div>
              <div className="absolute top-0 right-0 m-4 ">
      <svg width="82" height="36" viewBox="0 0 82 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="18" fill="#F5756B" />
        <circle cx="39" cy="18" r="17" fill="white" stroke="#F5756B" stroke-width="2" />
        <path d="M40 17.6842H81M81 17.6842L75.7286 12M81 17.6842L75.7286 24" stroke="#F5756B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
             

              
              <h1 className="text-l font-bold mb-2 text-gray-900 ml-4">Custom Model Training</h1>
              <p className="text-sm mb-4 text-gray-900 ml-4">
                Take control of your own model training with our easy-to-use platform. Train your own models using your own data and customize them according to your specific needs.
              </p>
              

            </div>
          </div>




    
    </div>
    
    
  </div>
  <Cards/>
</div>
</div>

    
  )
}

export default Whatwe;
