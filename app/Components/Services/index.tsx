/* eslint-disable @next/next/no-img-element */
// pages/index.tsx
import Service2 from '../Service2/index'
import Service3 from '../Service3/index'
import Image from 'next/image';
const Services: React.FC = () => {
    return (
        <>
        <h1 className='text-5xl text-center mt-6 '>Our Services </h1>
        <div className="bg-white">


            <div className="container mx-auto p-8 flex flex-col lg:flex-row items-center ">



                <div className="lg:w-1/2 mb-4  lg:mb-0 relative ml-24">
                    
                <Image
          src="/1.png" 
          alt="Small Image"
          width={200} 
          height={100} 
          className="top-0 left-0 ml-7 "
        />
        <div className='-mt-11 ml-24'>
                    <h1 className="text-4xl font-bold ">MyScan
                    </h1>
                    <p className="text-gray-700 max-w-xl tex-xs mt-4 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  
        <div className='mt-4'>
          
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
            <circle cx="6.5" cy="6.5" r="6.5" fill="#F5756B" />
          </svg>
          <span>Patients Trained AI Models Login
</span>
          
          </div>
          <div className='mt-4'>
          
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
            <circle cx="6.5" cy="6.5" r="6.5" fill="#F5756B" />
          </svg>
          <span>Patients Tracking AI Login</span>
          
          </div>
          <div className="inline-flex mt-3 ">
  <a href="#" className="inline-flex rounded-full items-center justify-center px-5 py-2 text-base font-medium text-indigo-700 transition duration-150 ease-in-out bg-white border border-transparent  hover:bg-white focus:outline-none focus:shadow-outline ">
    
    <svg width="35" height="35" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-4">
      <circle cx="34" cy="34" r="33" fill="white" stroke="#F5756B" stroke-width="2"/>
    </svg>

    
    <svg width="20" height="20" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-7">
      <path d="M1 28L20 1M20 1C17.1667 2.66667 9 6.5 1 2.5M20 1C19.6667 5.5 20.2 15.1 25 17.5" stroke="#F5756B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    
    <span className='ml-4 text-sm text-range'>Get Started</span>
  </a>
</div>
          
                </div>
                </div>


                <div className="lg:w-1/2 ml-20">
                    
                    <Image
                        src="/skete.png" 
                        alt="Image"
                        width={600} 
                        height={400} 
                        className="w-full h-auto " />
                </div>
            </div>
            <Service2 />
            <Service3 />
            
        </div>
        </>
    );
  };
  
  export default Services;
  