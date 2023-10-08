import React from 'react';
import NavBar from '../Pages/NavBar';
import SimpleSlider from '../Pages/Slider';
import Services from '../Pages/Services';
import PopularEvent from '../Pages/PopularEvent';
import RecentEvent from '../Pages/WelcomeTo';
import { useLoaderData } from 'react-router-dom';
import Sponsors from '../Pages/Sponsors';
import Testimonials from '../Pages/Testimonials';

const Home = () => {
    
    return (
        <div className='space-y-10'>
            
            <SimpleSlider></SimpleSlider>
            <RecentEvent></RecentEvent>
            <PopularEvent></PopularEvent>
            
            <Services></Services>
            <Sponsors></Sponsors>
            <Testimonials></Testimonials>
            
            
        </div>
    );
};

export default Home;