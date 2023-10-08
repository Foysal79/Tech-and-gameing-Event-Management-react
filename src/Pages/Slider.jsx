import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="h-[80vh]">



  {/* 1 */}
      <div className=" h-[80vh]  bg-[url(https://i.ibb.co/Mk6KW09/20231008133828-fpdl-in-portrait-young-boy-dressed-white-t-shirt-using-virtual-reality-glasses-holds.jpg)] bg-cover  bg-no-repeat text-center  ">
        
        <h1 className="lg:text-6xl font-bold mt-28 lg:mt-56 text-white">Create Beautiful <span className="text-orange-500">Memories</span> <br /> At Every Event</h1>
        <Link to="/Service" ><button  className="bg-yellow-500 mt-10  text-white text-2xl font-bold px-12 py-4 rounded-lg">create Your Event</button></Link>
        
        
      </div>

{/* 2 */}
      <div className=" h-[80vh]  bg-[url(https://i.ibb.co/tPsjbH0/20231008133102-fpdl-in-professional-gamers-game-chair-concept-cyber-sport-arena-3d-rendering-256339.jpg)] bg-cover  bg-no-repeat text-center  ">
        
        <h1 className="lg:text-6xl font-bold mt-28 lg:mt-36 text-white">Create Beautiful Memories & <br /> Successful Events Every Time With <br /> <span className="text-orange-400">EvenTo</span> <br /> Management</h1>
        <Link to="/Service" ><button  className="bg-yellow-500 mt-10  text-white text-2xl font-bold px-12 py-4 rounded-lg">create Your Event</button></Link>
        
        
      </div>

{/* 3 */}
      <div className=" h-[80vh]  bg-[url(https://i.ibb.co/XYKdGGw/20231008001713-fpdl-in-woman-enjoying-vr-headset-53876-101870-medium.jpg)] bg-cover  bg-no-repeat text-center  ">
        
      <h1 className="lg:text-6xl font-bold mt-28 lg:mt-56 text-white">Create A Memorable Event With <br /> <span className="text-orange-500">EvenTo</span> </h1>
      <Link to="/Service" ><button  className="bg-yellow-500 mt-10  text-white text-2xl font-bold px-12 py-4 rounded-lg">create Your Event</button></Link>
        
        
      </div>
{/* 4 */}

      <div className=" h-[80vh]  bg-[url(https://i.ibb.co/w0wyRcs/20231008133231-fpdl-in-electronic-sports-competition-background-3d-illustration-1419-2781-medium.jpg)] bg-cover  bg-no-repeat text-center  ">
        
        <h1 className="lg:text-6xl font-bold mt-28 lg:mt-56 text-orange-500">Planning Something Special For Your <br /> <span className="text-white">Moments</span>? </h1>
        <Link to="/Service" ><button  className="bg-yellow-500 mt-10  text-white text-2xl font-bold px-12 py-4 rounded-lg">create Your Event</button></Link>
        
        
      </div>

{/* 5 */}

      <div className=" h-[80vh]  bg-[url(https://i.ibb.co/K5shs71/20231008002107-fpdl-in-online-video-game-competition-league-3d-illustration-1419-2791-large.jpg)] bg-cover  bg-no-repeat text-center  ">
        
        <h1 className="lg:text-6xl font-bold mt-28 lg:mt-56 text-white">Create Beautiful <span className="text-orange-500">Memories</span> <br /> At Every Event</h1>
        <Link to="/Service" ><button  className="bg-yellow-500 mt-10  text-white text-2xl font-bold px-12 py-4 rounded-lg">create Your Event</button></Link>
        
        
      </div>


{/* 6 */}

      <div className=" h-[80vh] rounded-lg bg-[url(https://i.ibb.co/wQdcCGf/20231008133418-fpdl-in-man-enjoying-vr-headset-53876-101874-large.jpg)] bg-cover  bg-no-repeat text-center  ">
        
        <h1 className="lg:text-6xl font-bold mt-28 lg:mt-56 text-black">Create Beautiful <span className="text-orange-500">Memories</span> <br /> At Every Event</h1>
        <Link to="/Service" ><button  className="bg-yellow-500 mt-10  text-white text-2xl font-bold px-12 py-4 rounded-lg">create Your Event</button></Link>
        
        
      </div>
    </Slider>
  );
}