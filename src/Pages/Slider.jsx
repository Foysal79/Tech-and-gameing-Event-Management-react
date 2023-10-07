import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

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
      <div className=" h-[80vh] rounded-lg bg-[url(https://i.ibb.co/YdCHNTW/6864937-23324.jpg)] bg-cover  bg-no-repeat text-center  ">
        
        <h1 className="lg:text-6xl font-bold mt-28 lg:mt-56 text-white">Create Beautiful <span className="text-orange-500">Memories</span> <br /> At Every Event</h1>
        <button  className="bg-yellow-300 mt-10 font-semibold btn">create Your Event</button>
        
        
      </div>
      <div className=" h-[80vh] rounded-lg bg-[url(https://i.ibb.co/mh0cqgw/binary-code-code-numbers-147523-1920x1080.jpg)] bg-cover  bg-no-repeat text-center  ">
        
        <h1 className="lg:text-6xl font-bold mt-28 lg:mt-56 text-white">Create Beautiful <span className="text-orange-500">Memories</span> <br /> At Every Event</h1>
        <button  className="bg-yellow-300 mt-10 font-semibold btn">create Your Event</button>
        
        
      </div>


      <div className=" h-[80vh] rounded-lg bg-[url(https://i.ibb.co/XYKdGGw/20231008001713-fpdl-in-woman-enjoying-vr-headset-53876-101870-medium.jpg)] bg-cover  bg-no-repeat text-center  ">
        
        <h1 className="lg:text-6xl font-bold mt-28 lg:mt-56 text-white">Create Beautiful <span className="text-orange-500">Memories</span> <br /> At Every Event</h1>
        <button  className="bg-yellow-300 mt-10 font-semibold btn">create Your Event</button>
        
        
      </div>


      <div className=" h-[80vh] rounded-lg bg-[url(https://i.ibb.co/Q6VSWG9/20231008001907-fpdl-in-e-sport-arena-43901-82-large.jpg)] bg-cover  bg-no-repeat text-center  ">
        
        <h1 className="lg:text-6xl font-bold mt-28 lg:mt-56 text-white">Create Beautiful <span className="text-orange-500">Memories</span> <br /> At Every Event</h1>
        <button  className="bg-yellow-300 mt-10 font-semibold btn">create Your Event</button>
        
        
      </div>



      <div className=" h-[80vh] rounded-lg bg-[url(https://i.ibb.co/K5shs71/20231008002107-fpdl-in-online-video-game-competition-league-3d-illustration-1419-2791-large.jpg)] bg-cover  bg-no-repeat text-center  ">
        
        <h1 className="lg:text-6xl font-bold mt-28 lg:mt-56 text-white">Create Beautiful <span className="text-orange-500">Memories</span> <br /> At Every Event</h1>
        <button  className="bg-yellow-300 mt-10 font-semibold btn">create Your Event</button>
        
        
      </div>




      <div className=" h-[80vh] rounded-lg bg-[url(https://i.ibb.co/gDLG1MB/20231008002246-fpdl-in-avatars-sandbox-metaverse-party-online-meetings-via-vr-cameras-metaverse-3d-3.jpg)] bg-cover  bg-no-repeat text-center  ">
        
        <h1 className="lg:text-6xl font-bold mt-28 lg:mt-56 text-white">Create Beautiful <span className="text-orange-500">Memories</span> <br /> At Every Event</h1>
        <button  className="bg-yellow-300 mt-10 font-semibold btn">create Your Event</button>
        
        
      </div>
    </Slider>
  );
}