// import Service2 from '../Service2/index'
import Image from 'next/image';
const Services: React.FC = () => {
    return (
        <>
       
        <div className="bg-white">


            <div className="container mx-auto p-8 flex flex-col lg:flex-row items-center ">



                <div className="lg:w-1/2 mb-4  lg:mb-0 relative ml-24">
                    
                <Image
          src="/33.png" // Replace with the actual path to your small image
          alt="Small Image"
          width={200} // Adjust the width as per your design
          height={100} // Adjust the height as per your design
          className="top-0 left-0 ml-7 "
        />
        <div className='-mt-11 ml-24'>
                    <h1 className="text-4xl font-bold ">Train-your-own-model

                    </h1>
                    <p className="text-gray-700 max-w-xl tex-xs mt-4 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  
        <div className='mt-4'>
          
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
            <circle cx="6.5" cy="6.5" r="6.5" fill="#F5756B" />
          </svg>
          <span>Train My Own AI Model
</span>
          
          </div>
          
          <div className="inline-flex mt-5 ">
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
    <span className='ml-4 text-sm text-range'>Get Started</span>
  </a>
</div>
          
                </div>
                </div>


                <div className="lg:w-1/2 ml-20">
                    {/* Using next/image component */}
                    <Image
                        src="/skul93.png" // Replace with the actual path to your image
                        alt="Image"
                        width={600} // Adjust the width as per your design
                        height={400} // Adjust the height as per your design
                        className="w-full h-auto " />
                </div>
            </div>
            {/* <Service2 /> */}
            
        </div>
        </>
    );
  };
  
  export default Services;