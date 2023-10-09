import React from 'react';
import { useLoaderData } from 'react-router-dom';
import upComingEventCard from './UCEvent';
import UCEvent from './UCEvent';

const UpComingEvent = () => {
    const events = useLoaderData();
    return (
        <div>
            <div className='text-center pt-4 lg:pt-16 w-full mx-auto  p-8 lg:p-11 '>
            
        <h1 className='lg:text-5xl font-extrabold'>Up Coming <span className='text-blue-700'>Event</span></h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-4  ' >
            {
                events.slice(2, 7).map(event => <UCEvent key={event.id} event={event}  ></UCEvent>)
            }
        </div>

        </div>
    );
};

export default UpComingEvent;