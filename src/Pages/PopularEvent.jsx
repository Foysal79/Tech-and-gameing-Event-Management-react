import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PopularCard from '../card/PopularCard';

const PopularEvent = () => {
    const popularCards = useLoaderData();
    return (
        <div className='text-center pt-4 lg:pt-16'>
            <h3 className='text-4xl font-semibold text-orange-600'>Event</h3>
            <h1 className='text-5xl font-extrabold'>POPULAR <span className='text-blue-700'>EVENT</span></h1>
             
         <div className='grid grid-cols-3 gap-4 mt-24'>
            {
                popularCards.slice(0, 3).map(items => <PopularCard key={items.id} items={items} ></PopularCard>)
            }
         </div>

        </div>
    );
};

export default PopularEvent;