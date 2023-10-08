import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Services = () => {

    const cards = useLoaderData();
    
    return (
        <div data-aso="fade-up" className='text-center pt-4 lg:pt-16 w-11/12 mx-auto'>
            
            <h1 className='text-5xl font-extrabold uppercase mb-14'>Our <span className='text-blue-600'>
                Event</span> <br /> Management Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 gap-4'>
                    {
                        cards.map(card => <Card key={card.id} card={card} ></Card>)
                    }
                </div>
             
             </div>
    );
};

export default Services;