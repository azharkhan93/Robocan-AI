import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <>
    <div className="bg-gray-800 text-white p-8" style={{ backgroundImage: "url('/footerbg.png')" }}>
          <div className="container mx-auto flex flex-col items-center">
              {/* Logo in the Center */}
              <div className="mb-6">
  <Image
    src="/logofooter.png"
    alt="Logo"
    width={100} // Set your desired width for the logo
    height={80} // Set your desired height for the logo
    // className="w-16 h-16"
  />
  </div>

              {/* SVG Icons at the Bottom */}
              <div className="flex items-center space-x-1 mb-4">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill=""
      viewBox="0 0 22 22"
      width="22"
      height="22"
      className="w-4 h-4"
    >
      <path d="M0 2.55556C0 1.8148 0.247755 1.20369 0.743243 0.722222C1.23873 0.240733 1.88289 0 2.67568 0C3.45432 0 4.08429 0.237022 4.56564 0.711111C5.06113 1.2 5.30888 1.83702 5.30888 2.62222C5.30888 3.33333 5.06822 3.92591 4.58687 4.4C4.09138 4.88889 3.44015 5.13333 2.6332 5.13333H2.61197C1.83333 5.13333 1.20335 4.88889 0.722008 4.4C0.240662 3.91111 0 3.29629 0 2.55556ZM0.276062 22V7.15556H4.99035V22H0.276062ZM7.60232 22H12.3166V13.7111C12.3166 13.1926 12.3732 12.7926 12.4865 12.5111C12.6847 12.0074 12.9855 11.5815 13.389 11.2333C13.7925 10.8852 14.2986 10.7111 14.9073 10.7111C16.4929 10.7111 17.2857 11.8296 17.2857 14.0667V22H22V13.4889C22 11.2963 21.5045 9.63333 20.5135 8.5C19.5225 7.36667 18.213 6.8 16.5849 6.8C14.7587 6.8 13.3359 7.62222 12.3166 9.26667V9.31111H12.2954L12.3166 9.26667V7.15556H7.60232C7.63062 7.62962 7.64479 9.10369 7.64479 11.5778C7.64479 14.0518 7.63062 17.5259 7.60232 22Z" fill="#F5756B"/>
    </svg>
  </div>


<div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill=""
      viewBox="0 0 11 22"
      width="11"
      height="22"
      className="w-4 h-4"
    >
      <path d="M9.00963 3.65203H11V0.154033C10.0363 0.0499146 9.06802 -0.00148971 8.09913 3.28505e-05C5.21944 3.28505e-05 3.25024 1.82603 3.25024 5.17003V8.05202H0V11.968H3.25024V22H7.14629V11.968H10.3859L10.873 8.05202H7.14629V5.55502C7.14629 4.40003 7.44273 3.65203 9.00963 3.65203Z" fill="#F5756B"/>
    </svg>
  </div>
  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 17 16"
  width="17"
  height="16"
  className="w-4 h-4"
>
  
  <path d="M2.99786 14.4667H2L7.44359 8.16152L7.86635 8.82793L2.99786 14.4667Z" fill="#F5756B"/>
  <path d="M13.6265 1H14.625L9.51805 6.91493L9.08109 6.26485L13.6265 1Z" fill="#F5756B"/>
  <path d="M2.99786 14.4667H2L7.44359 8.16152L7.86635 8.82793L2.99786 14.4667Z" stroke="#F5756B" strokeWidth="1.5"/>
  <path d="M13.6265 1H14.625L9.51805 6.91493L9.08109 6.26485L13.6265 1Z" stroke="#F5756B" strokeWidth="1.5"/>
 
  <path d="M5.65133 1.42041H4.2471H2.84286L11.3755 14.0454H14.2054L5.65133 1.42041Z" stroke="#F5756B" strokeWidth="2"/>
</svg>
</div>

  {/* Add more SVG icons as needed */}
</div>

              {/* Additional Paragraphs */}
              <p className="mb-4">support@rhoscan.com</p>

              {/* Copyright and Privacy/Terms Div */}

          </div>
      </div>
      <div className="bg-white p-4 flex justify-between items-center">
              <div className='ml-24'>
                  <p>&copy; 2024 Your Company. All rights reserved.</p>
              </div>

              <div className="flex items-center mr-11">
                  <p className="mr-4">Privacy Policy</p>
                  <div className="border-r border-gray-600 h-4"></div>
                  <p className="ml-4">Terms and Conditions</p>
              </div>
          </div>
          </>
 
  )
}

export default Footer;
