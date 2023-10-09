import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import PopularCard from '../card/PopularCard';
import AOS from 'aos';
import 'aos/dist/aos.css';



const PopularEvent = () => {
    const popularCards = useLoaderData();


    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out', 
        });
      }, []);

    return (
        <div className='text-center pt-4 lg:pt-16 w-11/12 mx-auto bg-sky-100 p-8 lg:p-11 rounded-lg'>
            <h3 data-aos="fade-up"  className='text-4xl font-semibold text-orange-400'>Event</h3>
            <h1 data-aos="fade-up"  className='text-5xl font-extrabold'>POPULAR <span className='text-blue-700'>EVENT</span></h1>
             
         <div data-aos="fade-down" className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-24'>
            {
                popularCards.slice(0, 3).map(items => <PopularCard key={items.id} items={items} ></PopularCard>)
            }
         </div>

        </div>
    );
};

export default PopularEvent;