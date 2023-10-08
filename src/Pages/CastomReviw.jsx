
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function CustomerReviewSlider() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className="customer-review-slider">
        <Slider {...settings} >
         
          <div className='h-100 w-24'>
            
           <div>
            
           <p className=' font-light shadow-lg p-8 text-3xl bg-sky-50 '> <FaQuoteLeft className='inline'></FaQuoteLeft>   I had an amazing time at EvenTo. The organizers did a fantastic job creating a fun and immersive experience for gamers and tech enthusiasts. The gaming tournaments were intense, and I got to try out some cutting-edge VR technology. I cant wait for next years event!  <FaQuoteRight className='inline' ></FaQuoteRight> </p> 
           </div>
          </div>
          <div>
            
            <p className='text-3xl font-light shadow-lg p-8 bg-sky-50 '> <FaQuoteLeft className='inline'></FaQuoteLeft> The EvenTo was a blast! The variety of panels and discussions on game development and emerging tech trends was impressive. The organizers paid attention to every detail, and it showed in the overall experience. Kudos to the team! <FaQuoteRight className='inline' ></FaQuoteRight>  </p>
          </div>
          <div>
           
            <p className='text-3xl font-light shadow-lg p-8 bg-sky-50 '><FaQuoteLeft className='inline'></FaQuoteLeft>  I attended EvenTo with my friends, and we had a fantastic time. The cosplay competition was a highlight, and we were blown away by the creativity of the cosplayers. The event had a great atmosphere, and it was well-organized. Were definitely coming back next year. <FaQuoteRight className='inline' ></FaQuoteRight> </p>
          </div>
        
        </Slider>
      </div>
    );
  }
  
  export default CustomerReviewSlider;
  