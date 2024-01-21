/* eslint-disable @next/next/no-img-element */
// import Navbar from '../app/Components/Navbar/index'
// import Footer from './Components/Footer/index';
import HowItWorks from '../app/Components/HowitWorks/index';
import Contactus from '../app/Components/Contactus/index'
import Testimonials from '../app/Components/Testimonials/index'
import Services from '../app/Components/Services/index'
import Whatwe from '../app/Components/Whatweoffer/index';
import Hero from '../app/Components/Hero/index'
// import Cards from '@/app/Components/Cards/index';
export default function Home() {
  return (
    <>
    <Hero/>
    <Whatwe />
    {/* <Cards/> */}

    
     
    <Testimonials />
    <Services />
    
    <HowItWorks/>
    
    <Contactus />
    
  
    </>
  );
}