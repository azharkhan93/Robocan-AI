/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-11 md:flex items-center" style={{ backgroundImage: "url('/bgtest.png')", backgroundSize: "cover",  }}>
        
      <div className=" container mx-auto flex flex-col md:flex-row h-[430px]">
      
        
        

        <div className="md:w-1/2 md:pl-8 relative">
          <h2 className="text-4xl font-bold mb-4">Quote From A Satisfied Customer</h2>
          <p className="text-gray-700 mb-6">
            Lorem Ipsum is simply dummy text
          </p>
          <div className="relative w-full h-80 mb-6 rounded-2xl top-10">
            <Image
              src="/person.png"
              alt="Testimonial Image"
              width={300}
              height={200}
            />
          </div>
        </div>
        {/* <div className=" md:overflow-hidden md:mr-4 md:mt-10 bg-black">
          <Image
             src="/skull.png"  
             alt="Small Image 2"
             width={200}
             height={100}
             objectFit="cover"
          />
        </div> */}
        
        

        
        <div className="section-container flex justify-end items-end">
        
  
  <div className="md:w-1/2 md:pl-8">
  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 left-32 mb-20" >
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

      <p className="text-gray-700 mb-6 text-center text-l mt-4 mx-4">
        "The accuracy of Medical Imaging Solutions' technology has revolutionized the way I practice medicine."
      </p>
      

      <div className="flex flex-col items-center -mt-4 ">
  <div className="relative w-10 h-10 rounded-full overflow-hidden mb-2">
    <Image src="/tr.png" alt="Reviewer Avatar" layout="fill" objectFit="cover" />
  </div>
  
  <div className="text-center">
  
    <p className="text-l">Dr. John Smith</p>

    
    <p className="text-gray-500 text-sm">Chief of Radiology at XYZ Hospital</p>
  </div>
</div>
    </div>
  </div>
  


  
  <div className="md:w-1/2 md:pl-8 ">
    <div className="bg-white  rounded-2xl shadow-md mt-4 ">
      <div className='flex items-center justify-center mt-5'>
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
      <p className="text-gray-700 mb-6 text-center text-l mt-4 mx-4">
        "The accuracy of Medical Imaging Solutions' technology has revolutionized the way I practice medicine."
      </p>

    
      <div className="flex flex-col items-center -mt-4 ">
  <div className="relative w-10 h-10 rounded-full overflow-hidden mb-2">
    <Image src="/tr.png" alt="Reviewer Avatar" layout="fill" objectFit="cover" />
  </div>
  
  <div className="text-center">
    
    <p className="text-l">Dr. John Smith</p>

    
    <p className="text-gray-500 text-sm mb-4">Chief of Radiology at XYZ Hospital</p>
  </div>
</div>

      
    </div>
    
  </div>
</div>



   </div>
   
      
      
    </section>
  );
};

export default TestimonialSection;



{/* <div className="relative  rounded-full mb-8 bg-black overflow-hidden">
    <Image
        
        src="/skull.png"  
        alt="Small Image 2"
        width={200}
        height={100}
        objectFit="cover"
        
        
    />
    
</div> */}