import Image from 'next/image';

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-11 md:flex items-center" style={{ backgroundImage: "url('/bgtest.png')", backgroundSize: "cover",  }}>
        
      <div className=" container mx-auto flex flex-col md:flex-row h-[400px]">
      
        
        

        {/* Testimonial Image */}
        <div className="md:w-1/2 md:pl-8 relative">
          <h2 className="text-4xl font-bold mb-4">Quote From A Satisfied Customer</h2>
          <p className="text-gray-700 mb-6">
            Lorem Ipsum is simply dummy text
          </p>
          <div className="relative w-full h-80 mb-6 rounded-2xl top-8">
            <Image
              src="/person.png"
              alt="Testimonial Image"
              width={300}
              height={200}
            />
          </div>
        </div>
        
        

        
        <div className="section-container flex justify-end items-end">
        
  
  <div className="md:w-1/2 md:pl-8">
  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 left-20 mb-11" >
              <Image
                src="/lego.png"  
                alt="Small Image"
                layout="fill"
                objectFit="cover"
                
              />
            </div>
            
    <div className="bg-white p-6 rounded-2xl shadow-md">
        
        <div className='flex items-center justify-center'>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.5L15.09 8.76L22 9.77L17 14.64L18.18 21.52L12 18.27L5.82 21.52L7 14.64L2 9.77L8.91 8.76L12 2.5Z" fill="#F5756B"/>
      </svg>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.5L15.09 8.76L22 9.77L17 14.64L18.18 21.52L12 18.27L5.82 21.52L7 14.64L2 9.77L8.91 8.76L12 2.5Z" fill="#F5756B"/>
      </svg>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.5L15.09 8.76L22 9.77L17 14.64L18.18 21.52L12 18.27L5.82 21.52L7 14.64L2 9.77L8.91 8.76L12 2.5Z" fill="#F5756B"/>
      </svg>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.5L15.09 8.76L22 9.77L17 14.64L18.18 21.52L12 18.27L5.82 21.52L7 14.64L2 9.77L8.91 8.76L12 2.5Z" fill="#F5756B"/>
      </svg><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.5L15.09 8.76L22 9.77L17 14.64L18.18 21.52L12 18.27L5.82 21.52L7 14.64L2 9.77L8.91 8.76L12 2.5Z" fill="#F5756B"/>
      </svg>
      </div>

      <p className="text-gray-700 mb-6 text-center text-l mt-4">
        "The accuracy of Medical Imaging Solutions' technology has revolutionized the way I practice medicine."
      </p>
      

      <div className="flex flex-col items-center">
  <div className="relative w-10 h-10 rounded-full overflow-hidden mb-2">
    <Image src="/tr.png" alt="Reviewer Avatar" layout="fill" objectFit="cover" />
  </div>
  
  <div className="text-center">
    {/* Reviewer's Name */}
    <p className="text-l">Dr. John Smith</p>

    {/* Client's Role */}
    <p className="text-gray-500 text-sm">Chief of Radiology at XYZ Hospital</p>
  </div>
</div>
    </div>
  </div>
  


  
  <div className="md:w-1/2 md:pl-8 mb-10">
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.5L15.09 8.76L22 9.77L17 14.64L18.18 21.52L12 18.27L5.82 21.52L7 14.64L2 9.77L8.91 8.76L12 2.5Z" fill="#F5756B"/>
      </svg>

      <p className="text-gray-700 mb-6">
        "Another testimonial or review goes here."
      </p>

      <div className="flex items-center">
        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          
        </svg>
        
        <p className="ml-4 font-bold">Another Reviewer</p>
      </div>
    </div>
  </div>
</div>
{/* <div className="relative  rounded-full mb-8">
    <Image
        
        src="/skull.png"  
        alt="Small Image 2"
        width={200}
        height={100}
        objectFit="cover"
        
    />
    
</div> */}

<div className="  flex justify-end items-end">
{/* <div className='left-20'> */}
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 26.2L11.8 19M11.8 19L19 11.8M11.8 19H26.2M1 19C1 28.9411 9.05887 37 19 37C28.9411 37 37 28.9411 37 19C37 9.05887 28.9411 1 19 1C9.05887 1 1 9.05887 1 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 26.2L26.2 19M26.2 19L19 11.8M26.2 19H11.8M37 19C37 28.9411 28.9411 37 19 37C9.05887 37 1 28.9411 1 19C1 9.05887 9.05887 1 19 1C28.9411 1 37 9.05887 37 19Z" stroke="#F5756B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    {/* </div> */}
  </div>
   </div>
   
      
      
    </section>
  );
};

export default TestimonialSection;