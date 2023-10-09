import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import CustomerReviewSlider from './CastomReviw';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Testimonials = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out', 
        });
      }, []);
    return (
        <div data-aos="zoom-out-left" className='text-center pt-4 lg:pt-16 w-8/12 mx-auto'>
            <h1 className='text-5xl font-extrabold uppercase mb-14'>CUSTOMER <span className='text-blue-600'>
            TESTIMONIALS </span></h1>
            <CustomerReviewSlider></CustomerReviewSlider>
            
        </div>
    );
};

export default Testimonials;