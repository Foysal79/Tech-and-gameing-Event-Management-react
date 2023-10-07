import React from 'react';
import NavBar from '../Pages/NavBar';
import SimpleSlider from '../Pages/Slider';
import Services from '../Pages/Services';
import PopularEvent from '../Pages/PopularEvent';
import RecentEvent from '../Pages/RecentEvent';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    
    return (
        <div className='space-y-10  '>
            
            <SimpleSlider></SimpleSlider>
            <PopularEvent></PopularEvent>
            <RecentEvent></RecentEvent>
            <Services></Services>
            
            
        </div>
    );
};

export default Home;